
const FB_API_VERSION = 'v19.0';
const BASE_URL = `https://graph.facebook.com/${FB_API_VERSION}`;

/**
 * Servicio para interactuar con la API Graph de Facebook/Instagram desde el servidor.
 * Requiere variables de entorno configuradas con un Token de Acceso de Página de larga duración.
 */
export const facebookService = {
  
  /**
   * Obtiene métricas básicas de la página de Facebook.
   */
  async getFacebookMetrics() {
    const pageId = process.env.FACEBOOK_PAGE_ID;
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;

    if (!pageId || !accessToken) {
      console.warn('⚠️ Credenciales de Facebook no configuradas (FACEBOOK_PAGE_ID o FACEBOOK_ACCESS_TOKEN faltantes).');
      return [];
    }

    try {
      // 1. Obtener datos básicos de la página (Fans/Likes)
      const response = await fetch(
        `${BASE_URL}/${pageId}?fields=fan_count,new_like_count&access_token=${accessToken}`
      );

      if (!response.ok) {
        const err = await response.json();
        throw new Error(`Facebook API Error: ${err.error?.message || response.statusText}`);
      }

      const data = await response.json();
      const date = new Date();
      // Normalizar fecha a medianoche
      const normalizedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

      return [
        {
          platform: 'facebook',
          metric: 'followers', // fan_count se considera followers en contextos generales
          value: data.fan_count || 0,
          date: normalizedDate
        },
        {
          platform: 'facebook',
          metric: 'page_likes', // new_like_count es útil si existe, sino fan_count es el total
          value: data.new_like_count || data.fan_count || 0,
          date: normalizedDate
        }
      ];

    } catch (error) {
      console.error('Error fetching Facebook metrics:', error);
      return [];
    }
  },

  /**
   * Obtiene métricas de la cuenta de Instagram Business vinculada.
   */
  async getInstagramMetrics() {
    const instagramAccountId = process.env.INSTAGRAM_ACCOUNT_ID;
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;

    if (!instagramAccountId || !accessToken) {
      console.warn('⚠️ Credenciales de Instagram no configuradas (INSTAGRAM_ACCOUNT_ID faltante).');
      return [];
    }

    try {
      // 1. Obtener detalles de la cuenta (Followers, Media Count)
      const response = await fetch(
        `${BASE_URL}/${instagramAccountId}?fields=followers_count,media_count&access_token=${accessToken}`
      );

      if (!response.ok) {
        const err = await response.json();
        throw new Error(`Instagram API Error: ${err.error?.message || response.statusText}`);
      }

      const data = await response.json();
      const date = new Date();
      const normalizedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

      return [
        {
          platform: 'instagram',
          metric: 'followers',
          value: data.followers_count || 0,
          date: normalizedDate
        },
        {
          platform: 'instagram',
          metric: 'media_count',
          value: data.media_count || 0,
          date: normalizedDate
        }
      ];

    } catch (error) {
      console.error('Error fetching Instagram metrics:', error);
      return [];
    }
  }
};
