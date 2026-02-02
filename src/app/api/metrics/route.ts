import { NextResponse } from 'next/server';
import { metricsService } from '@/services/metricsService';

export const dynamic = 'force-dynamic';

/**
 * Endpoint para obtener métricas históricas de la base de datos propia.
 * Soporta filtrado por año y plataforma.
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const yearParam = searchParams.get('year');
    const platform = searchParams.get('platform') || undefined;

    const currentYear = new Date().getFullYear();
    const year = yearParam ? parseInt(yearParam) : currentYear;

    // Obtener estadísticas anuales (suma total)
    // Nota: Esto es un ejemplo simple. Podrías querer obtener desglose mensual para gráficas.
    const yearlyStats = await metricsService.getYearlyStats(year);

    // Obtener datos detallados para gráficas (todo el año)
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);
    const detailedMetrics = await metricsService.getMetricsByDateRange(startDate, endDate, platform);

    return NextResponse.json({
      success: true,
      year,
      yearlySummary: yearlyStats,
      timeSeries: detailedMetrics
    });

  } catch (error) {
    console.error('Error obteniendo métricas:', error);
    return NextResponse.json(
      { success: false, error: 'Error al obtener métricas' },
      { status: 500 }
    );
  }
}
