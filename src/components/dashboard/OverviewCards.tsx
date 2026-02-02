import React from 'react';
import { Facebook, Users, MessageCircle, BarChart3, Share2, ThumbsUp } from 'lucide-react';
import { FacebookData } from '@/types/social';

interface OverviewCardsProps {
    data: FacebookData;
}

export const OverviewCards = ({ data }: OverviewCardsProps) => {
    const posts = data.posts?.data || [];
    
    // Calculate Metrics
    const totalPosts = posts.length;
    
    const totalReactions = posts.reduce((acc, post) => 
        acc + (post.reactions?.summary?.total_count || post.reactions?.data?.length || 0), 0);
        
    const totalComments = posts.reduce((acc, post) => 
        acc + (post.comments?.summary?.total_count || post.comments?.data?.length || 0), 0);
        
    const totalShares = posts.reduce((acc, post) => 
        acc + (post.shares?.count || 0), 0);

    const totalInteractions = totalReactions + totalComments + totalShares;
    const avgInteractions = totalPosts > 0 ? Math.round(totalInteractions / totalPosts) : 0;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Page Info */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl shadow-lg text-white relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                            <Facebook size={24} className="text-white" />
                        </div>
                    </div>
                    <div>
                        <p className="text-blue-100 text-sm font-medium mb-1">Facebook Page</p>
                        <h3 className="text-2xl font-bold truncate">{data.name}</h3>
                        <p className="text-blue-100 text-xs mt-2 line-clamp-2 opacity-80">{data.about}</p>
                    </div>
                </div>
                {/* Decorative circle */}
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>

            {/* Audience */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 group hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className="text-sm font-medium text-gray-500">Total Followers</p>
                        <h3 className="text-3xl font-bold mt-2 text-gray-900">
                            {data.likes?.followers_count?.toLocaleString() || 'N/A'}
                        </h3>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-xl text-purple-600 group-hover:scale-110 transition-transform">
                        <Users size={24} />
                    </div>
                </div>
                <div className="w-full bg-gray-100 h-1.5 rounded-full mt-2 overflow-hidden">
                     <div className="bg-purple-500 h-full rounded-full w-[70%]"></div>
                </div>
                <p className="text-xs text-gray-400 mt-2">Audience Size</p>
            </div>

            {/* Engagement Overview */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 group hover:shadow-md transition-all">
                 <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className="text-sm font-medium text-gray-500">Avg. Engagement</p>
                         <h3 className="text-3xl font-bold mt-2 text-gray-900">
                            {avgInteractions.toLocaleString()}
                        </h3>
                    </div>
                    <div className="p-3 bg-green-50 rounded-xl text-green-600 group-hover:scale-110 transition-transform">
                        <BarChart3 size={24} />
                    </div>
                </div>
                <div className="flex gap-3 mt-4">
                    <div className="flex items-center gap-1 text-xs font-medium text-gray-600">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        Reactions
                    </div>
                     <div className="flex items-center gap-1 text-xs font-medium text-gray-600">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Comments
                    </div>
                </div>
            </div>

            {/* Total Performance */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 group hover:shadow-md transition-all">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm font-medium text-gray-500">Total Interactions</p>
                        <h3 className="text-3xl font-bold mt-2 text-gray-900">{totalInteractions.toLocaleString()}</h3>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-xl text-orange-600 group-hover:scale-110 transition-transform">
                        <Share2 size={24} />
                    </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-gray-50">
                    <div>
                        <p className="text-xs text-gray-400">Analyzed Posts</p>
                        <p className="text-sm font-bold text-gray-800">{totalPosts}</p>
                    </div>
                     <div>
                        <p className="text-xs text-gray-400">Total Comments</p>
                        <p className="text-sm font-bold text-gray-800">{totalComments.toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
