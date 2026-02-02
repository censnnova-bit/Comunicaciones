import React, { useState, useEffect, useRef } from 'react';
import { Camera, Users, Heart, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { InstagramMedia } from '@/types/social';
import { PostDetailModal } from './PostDetailModal';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

interface Paging {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
    previous?: string; 
}

interface InstagramData {
    username: string;
    followers_count: number;
    media: {
        data: InstagramMedia[];
        paging?: Paging;
    };
}

interface InstagramSectionProps {
    data: InstagramData;
    onNext?: () => void;
    onPrev?: () => void;
}

const PAGE_SIZE = 12;

export const InstagramSection = ({ data, onNext, onPrev }: InstagramSectionProps) => {
    const [selectedPost, setSelectedPost] = useState<InstagramMedia | null>(null);
    const [localPage, setLocalPage] = useState(0);
    const [prevPostCount, setPrevPostCount] = useState(0);
    const isWaitingForDataRef = useRef(false);

    if (!data) return null;

    const posts = data.media?.data || [];
    const paging = data.media?.paging;
    
    // Auto-advance
    useEffect(() => {
        if (posts.length > prevPostCount) {
            if (isWaitingForDataRef.current) {
                setLocalPage(p => p + 1);
                isWaitingForDataRef.current = false;
            }
            setPrevPostCount(posts.length);
        }
    }, [posts.length, prevPostCount]);

    const currentPosts = posts.slice(localPage * PAGE_SIZE, (localPage + 1) * PAGE_SIZE);

    const handleNext = () => {
        const nextPageIndex = localPage + 1;
        if (nextPageIndex * PAGE_SIZE < posts.length) {
            setLocalPage(nextPageIndex);
        } else if (onNext && paging?.cursors?.after) {
            isWaitingForDataRef.current = true;
            onNext();
        }
    };

    const handlePrev = () => {
        setLocalPage(prev => Math.max(0, prev - 1));
    };
    
    // Prepare chart data (last 20 posts or all accumulated if reasonable)
    // Let's show up to 20 for better density
    const chartData = posts.slice(0, 20).reverse().map(post => ({
        name: new Date(post.timestamp).toLocaleDateString(),
        likes: post.like_count || 0,
        comments: post.comments_count || 0,
        caption: post.caption ? post.caption.substring(0, 15) + '...' : 'Media'
    }));

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Camera className="text-pink-600" />
                    Instagram Insights ({data.username})
                </h2>
                <div className="flex gap-2">
                    <button 
                         onClick={handlePrev}
                         disabled={localPage === 0}
                         className="p-1.5 rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed border border-gray-200"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button 
                        onClick={handleNext}
                        disabled={!paging?.cursors?.after && (localPage + 1) * PAGE_SIZE >= posts.length}
                        className="p-1.5 rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed border border-gray-200"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Profile Card */}
                <div className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-6 rounded-2xl shadow-lg text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                <Camera size={24} className="text-white" />
                            </div>
                        </div>
                        <div>
                            <p className="text-pink-100 text-sm font-medium mb-1">Instagram Account</p>
                            <h3 className="text-2xl font-bold truncate">@{data.username}</h3>
                            <p className="text-pink-100 text-xs mt-2 opacity-80">Visual Insights</p>
                        </div>
                    </div>
                     <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                </div>

                {/* Followers */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 group hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Instagram Followers</p>
                            <h3 className="text-3xl font-bold mt-1 text-gray-900">{data.followers_count.toLocaleString()}</h3>
                        </div>
                        <div className="p-3 bg-pink-50 rounded-xl text-pink-600 group-hover:scale-110 transition-transform">
                            <Users size={24} />
                        </div>
                    </div>
                     <div className="w-full bg-gray-100 h-1.5 rounded-full mt-2 overflow-hidden">
                         <div className="bg-pink-500 h-full rounded-full w-[85%]"></div>
                    </div>
                </div>

                {/* Media Stats */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 group hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Total Media Loaded</p>
                            <h3 className="text-3xl font-bold mt-1 text-gray-900">
                                {posts.length}
                            </h3>
                        </div>
                        <div className="p-3 bg-purple-50 rounded-xl text-purple-600 group-hover:scale-110 transition-transform">
                            <Camera size={24} />
                        </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">Showing batches of {PAGE_SIZE}</p>
                </div>
                
                 {/* Engagement */}
                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 group hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Total Likes</p>
                            <h3 className="text-3xl font-bold mt-1 text-gray-900">
                                {posts.reduce((acc, curr) => acc + (curr.like_count || 0), 0).toLocaleString()}
                            </h3>
                        </div>
                        <div className="p-3 bg-red-50 rounded-xl text-red-500 group-hover:scale-110 transition-transform">
                            <Heart size={24} />
                        </div>
                    </div>
                    <div className="border-t border-gray-50 pt-2 mt-2">
                        <div className="flex justify-between text-xs">
                             <span className="text-gray-500">Total Comments</span>
                             <span className="font-bold text-gray-900">{posts.reduce((acc, curr) => acc + (curr.comments_count || 0), 0).toLocaleString()}</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Charts */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-6 text-gray-900">Media Engagement (Likese & Comments)</h3>
                <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis 
                                dataKey="caption" 
                                tick={{ fontSize: 10, fill: '#4B5563' }} 
                                interval={0}
                                angle={-15}
                                textAnchor="end"
                                height={60}
                            />
                            <YAxis tick={{ fontSize: 12, fill: '#4B5563' }} tickLine={false} axisLine={false} />
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
                            <Bar dataKey="likes" fill="#E1306C" radius={[4, 4, 0, 0]} name="Likes" />
                            <Bar dataKey="comments" fill="#FCAF45" radius={[4, 4, 0, 0]} name="Comments" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentPosts.map((post) => (
                    <div 
                        key={post.id} 
                        className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => setSelectedPost(post)}
                    >
                        {post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM' ? (
                             // eslint-disable-next-line @next/next/no-img-element
                            <img src={post.media_url} alt="IG Media" className="w-full h-48 object-cover" />
                        ) : (
                            <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400">
                                Video Content
                            </div>
                        )}
                        <div className="p-4">
                            <p className="text-xs text-gray-500 mb-2">{new Date(post.timestamp).toLocaleDateString()}</p>
                            <p className="text-sm text-gray-800 line-clamp-2 mb-3">{post.caption || 'No caption'}</p>
                            <div className="flex gap-4 text-xs text-gray-600 font-medium">
                                <span className="flex items-center gap-1"><Heart size={14} className="text-pink-500" /> {post.like_count}</span>
                                <span className="flex items-center gap-1"><MessageCircle size={14} /> {post.comments_count}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <PostDetailModal 
                isOpen={!!selectedPost}
                onClose={() => setSelectedPost(null)}
                post={selectedPost}
                type="instagram"
            />
        </div>
    );
};
