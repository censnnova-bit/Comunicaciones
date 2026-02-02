import React, { useState, useEffect, useRef } from 'react';
import { Post, FacebookData } from '@/types/social';
import { OverviewCards } from './OverviewCards';
import { ChartsSection } from './ChartsSection';
import { ThumbsUp, MessageCircle, Share2, ChevronLeft, ChevronRight, Facebook } from 'lucide-react';
import Image from 'next/image';
import { PostDetailModal } from './PostDetailModal';

interface FacebookSectionProps {
    data: FacebookData;
    onNext?: () => void;
    onPrev?: () => void;
}

const PAGE_SIZE = 12;

export const FacebookSection = ({ data, onNext }: FacebookSectionProps) => {
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [localPage, setLocalPage] = useState(0);
    const prevPostCountRef = useRef(0);
    const isWaitingForDataRef = useRef(false);

    const posts = data.posts?.data || [];
    const paging = data.posts?.paging;

    const currentPosts = posts.slice(localPage * PAGE_SIZE, (localPage + 1) * PAGE_SIZE);
    
    // Auto-advance page when new data arrives if requested
    useEffect(() => {
        if (posts.length > prevPostCountRef.current) {
            if (isWaitingForDataRef.current) {
                setTimeout(() => setLocalPage(p => p + 1), 0);
                isWaitingForDataRef.current = false;
            }
            prevPostCountRef.current = posts.length;
        }
    }, [posts.length]);

    const handleNext = () => {
        const nextPageIndex = localPage + 1;
        // Check if we have enough local data for the next page
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

    return (
        <div className="space-y-8">
            {/* Header / Title */}
            <div className="flex items-center gap-2">
                 <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Facebook className="text-blue-600" />
                    Facebook Insights ({data.name})
                </h2>
            </div>

            {/* Metrics */}
            <OverviewCards data={data} />

            {/* Charts (Using all accumulated posts for better reporting) */}
            {posts.length > 0 && <ChartsSection posts={posts} />}

            {/* Posts Grid (Cards) */}
            <div className="space-y-4">
                 <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Posts ({localPage * PAGE_SIZE + 1} - {Math.min((localPage + 1) * PAGE_SIZE, posts.length)} of {posts.length})
                    </h3>
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {currentPosts.map((post) => (
                        <div 
                            key={post.id}
                            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow flex flex-col"
                            onClick={() => setSelectedPost(post)}
                        >
                            {/* Media Preview */}
                            <div className="relative h-48 bg-gray-100 w-full">
                                {post.full_picture ? (
                                    <Image
                                        src={post.full_picture}
                                        alt="Post Media"
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-400 p-4 text-center text-sm">
                                        No Image
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-4 flex-1 flex flex-col">
                                <div className="mb-3">
                                    <p className="text-xs text-gray-500 mb-2">
                                        {new Date(post.created_time).toLocaleDateString()}
                                    </p>
                                    <p className="text-sm text-gray-900 line-clamp-3 font-medium">
                                        {post.message || post.story || 'No caption'}
                                    </p>
                                </div>
                                
                                <div className="mt-auto pt-3 border-t border-gray-50 flex justify-between text-xs text-gray-600 font-medium">
                                    <span className="flex items-center gap-1">
                                        <ThumbsUp size={14} className="text-blue-600" /> 
                                        {post.reactions?.summary?.total_count || post.reactions?.data?.length || 0}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MessageCircle size={14} className="text-green-600" />
                                        {post.comments?.summary?.total_count || post.comments?.data?.length || 0}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Share2 size={14} className="text-orange-600" />
                                        {post.shares?.count || 0}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <PostDetailModal 
                isOpen={!!selectedPost}
                onClose={() => setSelectedPost(null)}
                post={selectedPost}
                type="facebook"
            />
        </div>
    );
};
