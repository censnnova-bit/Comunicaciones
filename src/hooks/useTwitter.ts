import { useState, useCallback } from 'react';
import { TwitterData } from '@/types/twitter';

export const useTwitter = () => {
  const [data, setData] = useState<TwitterData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTwitterData = useCallback(async (username: string, options?: { limit?: number; nextToken?: string; startTime?: string; endTime?: string }) => {
    setLoading(true);
    setError(null);
    try {
      const queryParams = new URLSearchParams({ username });
      if (options?.limit) queryParams.set('limit', options.limit.toString());
      if (options?.nextToken) queryParams.set('pagination_token', options.nextToken);
      if (options?.startTime) queryParams.set('start_time', options.startTime);
      if (options?.endTime) queryParams.set('end_time', options.endTime);

      const response = await fetch(`/api/twitter?${queryParams.toString()}`);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to fetch Twitter data');
      }
      
      // If loading more (pagination), you typically would append, but this raw hook 
      // just returns what the API returns. The consuming component should handle merging if needed.
      setData(prevData => {
         if (options?.nextToken && prevData) {
             return {
                 ...result,
                 tweets: [...prevData.tweets, ...result.tweets], // Simple append for now
                 user: prevData.user // Keep original user data
             };
         }
         return result;
      });

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data,
    loading,
    error,
    fetchTwitterData,
  };
};
