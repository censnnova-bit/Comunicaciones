import React, { useEffect, useRef, useMemo, useState } from 'react';
import { X, MessageCircle, ThumbsUp, Share2, Calendar, User, Activity } from 'lucide-react';
import { Post, InstagramMedia, Comment } from '@/types/social';

interface PostDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: Post | InstagramMedia | null;
  type: 'facebook' | 'instagram';
}

interface SentimentAnalysis {
    category: string;
    strength: number;
    confidence: number;
}

interface AnalyzedCommentResponse {
    comment_id: string;
    sentimentAnalysis: SentimentAnalysis;
}

export const PostDetailModal = ({ isOpen, onClose, post, type }: PostDetailModalProps) => {
  const sentPostIdRef = useRef<string | null>(null);
  const [analysisResults, setAnalysisResults] = useState<Record<string, SentimentAnalysis>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const commentsList = useMemo(() => {
     if (!post) return [];
     if (type === 'facebook') return (post as Post).comments?.data || [];
     return []; 
  }, [post, type]);

  const message = useMemo(() => {
      if (!post) return undefined;
      if (type === 'facebook') return (post as Post).message || (post as Post).story;
      return (post as InstagramMedia).caption;
  }, [post, type]);

  useEffect(() => {
    if (isOpen && post && commentsList.length > 0) {
        // Prevent duplicate sends for the same post session by using ref
        if (sentPostIdRef.current === post.id) return;
        
        setAnalysisResults({});
        setIsAnalyzing(true);

        const sendToWebhook = async () => {
             try {
                // Using the specific n8n webhook URL provided
                const response = await fetch('https://censnnova.app.n8n.cloud/webhook-test/111dbf3b-3f9f-4417-955e-90856f9bea64', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        postId: post.id,
                        postType: type,
                        postMessage: message,
                        comments: commentsList,
                        timestamp: new Date().toISOString()
                    })
                });

                if (response.ok) {
                    try {
                        const text = await response.text();
                        if (!text) {
                            console.warn("Empty response from webhook");
                            return;
                        }
                        const data: AnalyzedCommentResponse[] = JSON.parse(text);
                        
                        const map: Record<string, SentimentAnalysis> = {};
                        if (Array.isArray(data)) {
                            data.forEach(item => {
                                if (item.comment_id && item.sentimentAnalysis) {
                                    map[item.comment_id] = item.sentimentAnalysis;
                                }
                            });
                            setAnalysisResults(map);
                        }
                    } catch (parseError) {
                        console.error("Failed to parse webhook response:", parseError);
                    }
                }
                sentPostIdRef.current = post.id;
            } catch (error) {
                console.error('Error sending comments to analysis webhook:', error);
            } finally {
                setIsAnalyzing(false);
            }
        };
        sendToWebhook();
    } else if (!isOpen) {
        // Reset ref when modal closes so it can fetch again if reopened (optional)
        sentPostIdRef.current = null;
        setAnalysisResults({});
    }
  }, [isOpen, post, commentsList, type, message]);

  useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
    return () => {
        document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !post) return null;

  // Normalize data between FB and IG
  const isFB = type === 'facebook';
  const fbPost = isFB ? (post as Post) : null;
  const igPost = !isFB ? (post as InstagramMedia) : null;

  const imageUrl = isFB ? fbPost?.full_picture : igPost?.media_url;
  // reuse message logic but need to be careful about variable shadowing if I called the useMemo var 'message'
  // Actually I did calling it 'message' above.
  
  const date = new Date((isFB ? fbPost?.created_time : igPost?.timestamp) || '').toLocaleString();
  
  const likes = isFB 
    ? (fbPost?.reactions?.summary?.total_count || 0) 
    : (igPost?.like_count || 0);
    
  const commentsCount = isFB 
    ? (fbPost?.comments?.summary?.total_count || 0) 
    : (igPost?.comments_count || 0);


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[85vh] md:h-[90vh] overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-200"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-black">
          {imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img 
              src={imageUrl} 
              alt="Post content" 
              className="max-h-[50vh] md:max-h-full w-full object-contain" 
            />
          ) : (
            <div className="text-gray-400 flex flex-col items-center">
                <span className="text-sm">No Image Available</span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col h-full bg-white">
          
          {/* Header */}
          <div className="p-4 border-b flex justify-between items-start shrink-0">
            <div className="flex items-center gap-3">
               <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${isFB ? 'bg-blue-600' : 'bg-pink-600'}`}>
                  {isFB ? 'FB' : 'IG'}
               </div>
               <div>
                 <h3 className="font-bold text-gray-900 text-sm">{isFB ? 'Facebook Post' : 'Instagram Media'}</h3>
                 <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar size={12} /> {date}
                 </p>
               </div>
            </div>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900"
            >
              <X size={24} />
            </button>
          </div>

          {/* Body (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6 min-h-0">
             <div>
                <p className="text-gray-800 text-base leading-relaxed whitespace-pre-wrap">
                    {message || <span className="italic text-gray-400">No caption/message</span>}
                </p>
             </div>

             {/* Metrics Cards */}
             <div className="grid grid-cols-3 gap-3">
                 <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <ThumbsUp className="w-5 h-5 mx-auto text-blue-500 mb-1" />
                    <span className="block font-bold text-gray-900">{likes}</span>
                    <span className="text-xs text-gray-500">Likes</span>
                 </div>
                 <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <MessageCircle className="w-5 h-5 mx-auto text-green-500 mb-1" />
                    <span className="block font-bold text-gray-900">{commentsCount}</span>
                    <span className="text-xs text-gray-500">Comments</span>
                 </div>
                 {isFB && (
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                        <Share2 className="w-5 h-5 mx-auto text-orange-500 mb-1" />
                        <span className="block font-bold text-gray-900">{fbPost?.shares?.count || 0}</span>
                        <span className="text-xs text-gray-500">Shares</span>
                    </div>
                 )}
             </div>

             {/* Recent Comments Preview */}
             {commentsList && commentsList.length > 0 && (
                 <div className="border-t pt-4">
                     <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900 text-sm">Recent Comments</h4>
                        {isAnalyzing && (
                            <div className="flex items-center gap-1 text-xs text-blue-600 animate-pulse">
                                <Activity size={14} />
                                <span>Analyzing sentiments...</span>
                            </div>
                        )}
                     </div>
                     <div className="space-y-4">
                         {commentsList.map((comment: Comment) => {
                             const analysis = analysisResults[comment.id];
                             return (
                             <div key={comment.id} className="flex gap-3 items-start">
                                 <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                                     <User size={14} className="text-gray-500" />
                                 </div>
                                 <div className="bg-gray-50 p-3 rounded-lg rounded-tl-none flex-1">
                                     <div className="flex justify-between items-baseline mb-1">
                                         <span className="font-semibold text-xs text-gray-900">{comment.from?.name || 'User'}</span>
                                         <span className="text-[10px] text-gray-400">{new Date(comment.created_time).toLocaleDateString()}</span>
                                     </div>
                                     <p className="text-sm text-gray-700">{comment.message}</p>
                                     
                                     {/* Analysis Result Badge */}
                                     {analysis && (
                                         <div className="mt-2 text-[10px] flex items-center gap-2 border-t border-gray-200 pt-2">
                                             <span className={`px-2 py-0.5 rounded-full font-medium ${
                                                 analysis.category.includes('Negativ') ? 'bg-red-100 text-red-700' : 
                                                 analysis.category.includes('Constructiv') ? 'bg-blue-100 text-blue-700' :
                                                 analysis.category.includes('Positiv') ? 'bg-green-100 text-green-700' :
                                                 'bg-gray-100 text-gray-700'
                                             }`}>
                                                 {analysis.category}
                                             </span>
                                             <span className="text-gray-400">
                                                 {(analysis.confidence * 100).toFixed(0)}% confidence
                                             </span>
                                         </div>
                                     )}
                                 </div>
                             </div>
                         )})}
                     </div>
                 </div>
             )}
          </div>

          {/* Footer actions */}
          <div className="p-4 border-t bg-gray-50 flex justify-end shrink-0">
              <a 
                href={isFB ? fbPost?.permalink_url : igPost?.permalink}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
              >
                View on {isFB ? 'Facebook' : 'Instagram'} &rarr;
              </a>
          </div>

        </div>
      </div>
    </div>
  );
};
