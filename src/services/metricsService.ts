import { prisma } from '@/lib/prisma';
// import { SocialMetric } from '@prisma/client'; // Ya no es necesario importar el tipo si no se usa explícitamente o importarlo del generado
import { SocialMetric } from '@/generated/client';

/**
 * Servicio para manejar la lógica de negocio de las métricas de redes sociales.
 * Se encarga de guardar, actualizar y consultar datos históricos.
 */

export const metricsService = {
  /**
   * Guarda o actualiza una métrica específica para una fecha dada.
   * Utiliza 'upsert' para evitar duplicados.
   */
  async saveMetric(platform: string, metric: string, value: number, date: Date) {
    try {
      return await prisma.socialMetric.upsert({
        where: {
          platform_metric_date: {
            platform,
            metric,
            date,
          },
        },
        update: { value },
        create: {
          platform,
          metric,
          value,
          date,
        },
      });
    } catch (error) {
      console.error(`Error guardando métrica ${platform}/${metric}:`, error);
      throw error;
    }
  },

  /**
   * Guarda o actualiza un Post de red social.
   * Permite mantener un registro histórico de las publicaciones.
   */
  async savePost(post: {
    platformId: string;
    platform: string;
    content?: string;
    type?: string;
    url?: string;
    image?: string;
    postedAt: Date;
    likes?: number;
    comments?: number;
    shares?: number;
    impressions?: number;
    engagement?: number;
  }) {
    try {
      return await prisma.socialPost.upsert({
        where: {
          platform_platformId: {
            platform: post.platform,
            platformId: post.platformId,
          },
        },
        update: {
          content: post.content,
          image: post.image,
          likes: post.likes || 0,
          comments: post.comments || 0,
          shares: post.shares || 0,
          impressions: post.impressions || 0,
          engagement: post.engagement || 0,
          lastSyncAt: new Date(),
        },
        create: {
          platformId: post.platformId,
          platform: post.platform,
          content: post.content,
          type: post.type,
          url: post.url,
          image: post.image,
          postedAt: post.postedAt,
          likes: post.likes || 0,
          comments: post.comments || 0,
          shares: post.shares || 0,
          impressions: post.impressions || 0,
          engagement: post.engagement || 0,
        },
      });
    } catch (error) {
      console.error(`Error guardando post ${post.platformId}:`, error);
      // No lanzamos error para no detener el batch completo si un post falla
      return null;
    }
  },

  /**
   * Guarda múltiples métricas en lote.
   * Útil para la sincronización masiva desde la API.
   */
  async saveMetricsBatch(metrics: { platform: string; metric: string; value: number; date: Date }[]) {
    const results = [];
    // Prisma createMany no soporta upsert directamente en Postgres de forma sencilla con conflictos complejos en versiones antiguas,
    // pero podemos iterar o usar transacciones. Para seguridad y simplicidad con upsert:
    for (const m of metrics) {
      results.push(await this.saveMetric(m.platform, m.metric, m.value, m.date));
    }
    return results;
  },

  /**
   * Guarda múltiples posts en lote.
   */
  async savePostsBatch(posts: any[]) {
    const results = [];
    for (const p of posts) {
      results.push(await this.savePost(p));
    }
    return results;
  },

  /**
   * Obtiene métricas filtradas por rango de fechas.
   */
  async getMetricsByDateRange(startDate: Date, endDate: Date, platform?: string) {
    return await prisma.socialMetric.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate,
        },
        ...(platform ? { platform } : {}),
      },
      orderBy: {
        date: 'asc',
      },
    });
  },

  /**
   * Obtiene el acumulado anual agrupado por plataforma y métrica.
   */
  async getYearlyStats(year: number) {
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);

    // Agrupamos por plataforma y métrica sumando los valores
    return await prisma.socialMetric.groupBy({
      by: ['platform', 'metric'],
      where: {
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      _sum: {
        value: true,
      },
    });
  }
};
