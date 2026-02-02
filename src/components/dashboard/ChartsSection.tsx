import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import { Post } from '@/types/social';

interface ChartsSectionProps {
  posts: Post[];
}

export const ChartsSection = ({ posts }: ChartsSectionProps) => {
  const getChartData = () => {
    if (!posts) return [];

    // Take last 100 posts for broader historical visibility as requested
    const recentPosts = posts.slice(0, 100).reverse(); // Oldest to newest for line chart

    return recentPosts.map((post) => {
      // Extract insights if available
      const insightsData = post.insights?.data || [];
      const impressionsMetric = insightsData.find(i => i.name === 'post_impressions_unique');
      const impressions = impressionsMetric && impressionsMetric.values && impressionsMetric.values[0] 
        ? impressionsMetric.values[0].value 
        : 0;

      return {
        name: new Date(post.created_time).toLocaleDateString(),
        comments:
          post.comments?.summary?.total_count || post.comments?.data?.length || 0,
        likes:
          post.reactions?.summary?.total_count ||
          post.reactions?.data?.length ||
          0,
        shares: post.shares?.count || 0,
        impressions: impressions,
        shortMessage: post.message
          ? post.message.substring(0, 15) + '...'
          : 'No Text',
      };
    });
  };

  const chartData = getChartData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Chart 1: Engagement (Interactions) */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-6 text-gray-900">
          Engagement Trends (Reactions)
        </h3>
        <div className="h-72 w-full min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E5E7EB"
              />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 10, fill: '#4B5563' }} // Darker text
                tickLine={false}
                axisLine={false}
                interval="preserveStartEnd" // Avoid clutter with 50 items
              />
              <YAxis
                tick={{ fontSize: 12, fill: '#4B5563' }} // Darker text
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  color: '#111827'
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="likes"
                name="Likes"
                stroke="#1877F2"
                strokeWidth={2}
                dot={false} // Hide dots for large datasets to look cleaner
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="comments"
                name="Comments"
                stroke="#10B981"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="shares"
                name="Shares"
                stroke="#F59E0B"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chart 2: Reach/Impressions (Impact) */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Post Reach (Unique Impressions)</h3>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Last 50 Posts</span>
        </div>
        <div className="h-72 w-full min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E5E7EB"
              />
              <XAxis
                dataKey="shortMessage"
                tick={{ fontSize: 0 }} // Hide X labels for 50 bars to be clean, rely on tooltip
                interval={0}
                textAnchor="end"
                height={10} 
              />
              <YAxis
                tick={{ fontSize: 12, fill: '#4B5563' }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                cursor={{ fill: '#F3F4F6' }}
                contentStyle={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  color: '#111827'
                }}
              />
              <Legend />
              <Bar dataKey="impressions" name="Unique Reach" fill="#8884d8" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
