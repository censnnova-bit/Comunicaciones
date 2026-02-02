import { NextResponse } from 'next/server';
import { metricsService } from '@/services/metricsService';
import { facebookService } from '@/services/facebookService';

export const dynamic = 'force-dynamic';

/**
 * GET: Intenta sincronización desde el servidor (Requiere Token de larga duración).
 * Útil si configuras Cron Jobs en el futuro.
 */
export async function GET() {
  try {
    const [fbMetrics, igMetrics] = await Promise.all([
      facebookService.getFacebookMetrics(),
      facebookService.getInstagramMetrics()
    ]);
    const allMetrics = [...fbMetrics, ...igMetrics];

    if (allMetrics.length === 0) {
      return NextResponse.json({
        success: true, 
        message: 'No se encontraron métricas server-side (¿Faltan credenciales?)', 
        savedRecords: 0 
      });
    }

    const result = await metricsService.saveMetricsBatch(allMetrics);
    return NextResponse.json({ success: true, savedRecords: result.length });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error sync server-side' }, { status: 500 });
  }
}

/**
 * POST: Recibe datos desde el Frontend (Cliente) y los guarda.
 * Esta es la estrategia principal cuando solo se tiene App ID (login de usuario).
 * El usuario entra al dashboard -> Cliente obtiene datos con su token -> Cliente envía a este endpoint -> Se guarda en DB.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { metrics, posts } = body;

    // Validar que al menos uno de los dos arrays exista
    if ((!metrics || !Array.isArray(metrics)) && (!posts || !Array.isArray(posts))) {
      return NextResponse.json({ success: false, error: 'Formato inválido. Se espera { metrics: [] } o { posts: [] }' }, { status: 400 });
    }

    // Normalizar fechas por si vienen como string
    let metricsToSave: any[] = [];
    if (metrics && Array.isArray(metrics)) {
      metricsToSave = metrics.map((m: any) => ({
        ...m,
        date: new Date(m.date) // Asegurar objeto Date
      }));
    }

    const { posts } = body;
    let postsToSavePromise = Promise.resolve([]);
    
    if (posts && Array.isArray(posts)) {
        postsToSavePromise = metricsService.savePostsBatch(posts.map((p: any) => ({
            ...p,
            postedAt: new Date(p.postedAt)
        })));
    }

    const [metricsResult, postsResult] = await Promise.all([
        metricsService.saveMetricsBatch(metricsToSave),
        postsToSavePromise
    ]);

    return NextResponse.json({
      success: true,
      message: 'Métricas y posts guardados desde cliente',
      savedMetrics: metricsResult.length,
      savedPosts: postsResult.length
    });

  } catch (error) {
    console.error('Error guardando métricas desde cliente:', error);
    return NextResponse.json({ success: false, error: 'Error interno guardando datos' }, { status: 500 });
  }
}
