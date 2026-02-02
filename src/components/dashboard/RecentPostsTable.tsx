import React, { useState } from 'react';
import Image from 'next/image';
import { ThumbsUp, MessageCircle, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Post, Paging } from '@/types/social';
import { PostDetailModal } from './PostDetailModal';

interface RecentPostsTableProps {
  posts: Post[];
  paging?: Paging;
  onNext?: () => void;
  onPrev?: () => void;
}

export const RecentPostsTable = ({ posts, paging, onNext, onPrev }: RecentPostsTableProps) => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          <div className="flex gap-2">
            <button 
              onClick={onPrev}
              disabled={!paging?.cursors?.before}
              className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button 
              onClick={onNext}
              disabled={!paging?.cursors?.after}
              className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-gray-500 bg-gray-50 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">Content</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3 text-center">Likes</th>
                <th className="px-6 py-3 text-center">Comments</th>
                <th className="px-6 py-3 text-center">Shares</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {posts.map((post) => (
                <tr
                  key={post.id}
                  className="hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <td className="px-6 py-4 max-w-md">
                    <div className="flex items-center gap-3">
                      {post.full_picture && (
                        <Image
                          src={post.full_picture}
                          alt=""
                          className="w-10 h-10 rounded object-cover"
                          width={40}
                          height={40}
                          unoptimized
                        />
                      )}
                      <p className="truncate font-medium text-gray-900">
                        {post.message || post.story || 'No Text'}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {new Date(post.created_time).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
                      <ThumbsUp size={12} />
                      {post.reactions?.summary?.total_count ||
                        post.reactions?.data?.length ||
                        0}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 text-xs font-medium">
                      <MessageCircle size={12} />
                      {post.comments?.summary?.total_count ||
                        post.comments?.data?.length ||
                        0}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-50 text-orange-700 text-xs font-medium">
                      <Share2 size={12} />
                      {post.shares?.count || 0}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <PostDetailModal
        isOpen={!!selectedPost}
        onClose={() => setSelectedPost(null)}
        post={selectedPost}
        type="facebook"
      />
    </>
  );
};
