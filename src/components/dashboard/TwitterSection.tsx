import React from 'react';
import { TwitterData } from '@/types/twitter';
import { BarChart3, Heart, MessageCircle, Repeat2, Users, Eye } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface TwitterSectionProps {
  data: TwitterData;
}

export const TwitterSection = ({ data }: TwitterSectionProps) => {
  const { user, tweets } = data;

  const chartData = tweets.slice(0, 10).reverse().map(tweet => ({
    date: new Date(tweet.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
    engagement: (tweet.public_metrics?.like_count || 0) + (tweet.public_metrics?.retweet_count || 0) + (tweet.public_metrics?.reply_count || 0),
    impressions: tweet.public_metrics?.impression_count || 0,
    text: tweet.text.substring(0, 20) + '...'
  }));

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-black text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
               {user.profile_image_url && (
                   <img src={user.profile_image_url} alt={user.name} className="w-12 h-12 rounded-full border-2 border-gray-800" />
               )}
               <div>
                   <h3 className="font-bold text-lg">{user.name}</h3>
                   <p className="text-gray-400 text-sm">@{user.username}</p>
               </div>
            </div>
            <div className="flex gap-4 text-sm text-gray-300">
                <div>
                    <span className="font-bold text-white block">{user.public_metrics?.tweet_count || 0}</span>
                    Tweets
                </div>
                 <div>
                    <span className="font-bold text-white block">{user.public_metrics?.listed_count || 0}</span>
                    Lists
                </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <span className="text-gray-500 text-sm font-medium">Followers</span>
                <Users size={20} className="text-blue-400" />
            </div>
            <span className="text-3xl font-bold text-gray-900">{(user.public_metrics?.followers_count || 0).toLocaleString()}</span>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <span className="text-gray-500 text-sm font-medium">Following</span>
                <Users size={20} className="text-gray-400" />
            </div>
             <span className="text-3xl font-bold text-gray-900">{(user.public_metrics?.following_count || 0).toLocaleString()}</span>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <span className="text-gray-500 text-sm font-medium">Recent Impressions</span>
                 <Eye size={20} className="text-green-500" />
            </div>
             <span className="text-3xl font-bold text-gray-900">
                {tweets.reduce((acc, t) => acc + (t.public_metrics?.impression_count || 0), 0).toLocaleString()}
             </span>
             <span className="text-xs text-gray-400 mt-1">Last {tweets.length} tweets</span>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <BarChart3 size={20} />
            Tweet Performance (Last 10)
        </h3>
        <div className="h-64">
             <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                    <XAxis dataKey="date" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip 
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        labelStyle={{ color: '#6b7280', marginBottom: '4px' }}
                    />
                    <Bar dataKey="impressions" fill="#000000" radius={[4, 4, 0, 0]} name="Impressions" />
                     <Bar dataKey="engagement" fill="#3B82F6" radius={[4, 4, 0, 0]} name="Engagements" />
                </BarChart>
             </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Tweets List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tweets.map(tweet => (
            <div key={tweet.id} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-gray-800 mb-4 line-clamp-3 font-medium">{tweet.text}</p>
                <div className="text-xs text-gray-400 mb-4 block">
                    {new Date(tweet.created_at).toLocaleString()}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-gray-500 text-sm">
                    <div className="flex items-center gap-1 hover:text-red-500 transition-colors">
                        <Heart size={16} />
                        <span>{tweet.public_metrics?.like_count || 0}</span>
                    </div>
                    <div className="flex items-center gap-1 hover:text-green-500 transition-colors">
                        <Repeat2 size={16} />
                        <span>{tweet.public_metrics?.retweet_count || 0}</span>
                    </div>
                    <div className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                        <MessageCircle size={16} />
                        <span>{tweet.public_metrics?.reply_count || 0}</span>
                    </div>
                     <div className="flex items-center gap-1">
                        <Eye size={16} />
                        <span>{tweet.public_metrics?.impression_count || 0}</span>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};
