'use client';

import React, { useState } from 'react';
import { Loader2, Facebook, Camera, FileText } from 'lucide-react';
import { useFacebook } from '@/hooks/useFacebook';
import { InstagramSection } from '@/components/dashboard/InstagramSection';
import { FacebookSection } from '@/components/dashboard/FacebookSection';
import { ReportSection } from '@/components/dashboard/ReportSection';
import { TwitterSection } from '@/components/dashboard/TwitterSection';
import { useTwitter } from '@/hooks/useTwitter';
import { Twitter } from 'lucide-react';

export default function SocialDashboard() {
  const { data, loading, isSdkLoaded, error, loginAndFetch, handlePagination, fetchMoreData } = useFacebook();
  const { data: twitterData, loading: twitterLoading, error: twitterError, fetchTwitterData } = useTwitter();
  const [activeTab, setActiveTab] = useState<'facebook' | 'instagram' | 'report' | 'twitter'>('facebook');
  const [twitterUsername, setTwitterUsername] = useState('CENSGrupoEPM');

  const handleTwitterFetch = () => {
    if (twitterUsername) fetchTwitterData(twitterUsername);
  };


  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Header / Navbar equivalent */}
      <div className="flex justify-between items-center bg-gradient-to-r from-blue-700 to-indigo-600 p-6 rounded-2xl shadow-lg text-white">
        <div>
          <h1 className="text-3xl font-bold">Social Insights Dashboard</h1>
          <p className="text-blue-100 opacity-90 mt-1">Facebook & Instagram Analytics</p>
        </div>
        {!data && (
           <div className="flex gap-2">
             <button
               onClick={loginAndFetch}
               disabled={!isSdkLoaded || loading}
               className="flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
             >
               {loading ? <Loader2 className="animate-spin" /> : <Facebook size={20} />}
               Connect Facebook
             </button>
             {/* Twitter integration disabled due to API credit limits
             <button
                onClick={() => { setActiveTab('twitter'); handleTwitterFetch(); }}
                className="flex items-center gap-2 bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-xl font-bold transition-all shadow-sm"
             >
                <Twitter size={20} />
                View X (Twitter)
             </button>
             */}
           </div>
        )}
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 shadow-sm flex items-center gap-2">
            <span className="font-bold">Facebook Error:</span> {error}
        </div>
      )}

      {/* 
      {twitterError && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 shadow-sm flex items-center gap-2">
            <span className="font-bold">Twitter Error:</span> {twitterError}
        </div>
      )} 
      */}

      {loading && data && (
         <div className="fixed bottom-8 right-8 z-50 bg-gray-900/90 backdrop-blur-sm text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 animate-slide-up">
            <Loader2 className="animate-spin text-blue-400" size={24} /> 
            <span className="font-medium">Fetching historical data...</span>
         </div>
      )}

      {data && (
        <div className="space-y-8">
            {/* Tabs Navigation */}
            <div className="flex bg-white p-2 rounded-2xl shadow-sm border border-gray-100 w-fit">
                <button
                    onClick={() => setActiveTab('facebook')}
                    className={`
                        flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300
                        ${activeTab === 'facebook' 
                            ? 'bg-blue-600 text-white shadow-md transform scale-105' 
                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}
                    `}
                >
                    <Facebook size={18} />
                    Facebook
                </button>
                
                {data && data.instagram_data && (
                    <button
                        onClick={() => setActiveTab('instagram')}
                        className={`
                            flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300
                            ${activeTab === 'instagram' 
                                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md transform scale-105' 
                                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}
                        `}
                    >
                        <Camera size={18} />
                        Instagram
                    </button>
                )}

                {/* 
                <button
                    onClick={() => setActiveTab('twitter')}
                    className={`
                        flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300
                        ${activeTab === 'twitter' 
                            ? 'bg-black text-white shadow-md transform scale-105' 
                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}
                    `}
                >
                    <Twitter size={18} />
                    X (Twitter)
                </button> 
                */}

                <button
                    onClick={() => setActiveTab('report')}
                    className={`
                        flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300
                        ${activeTab === 'report' 
                            ? 'bg-emerald-600 text-white shadow-md transform scale-105' 
                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}
                    `}
                >
                    <FileText size={18} />
                    Annual Report
                </button>
            </div>

            {/* Tab Content */}
            <div className="transition-opacity duration-200 ease-in-out">
                {activeTab === 'facebook' && data && (
                    <FacebookSection 
                        data={data} 
                        onNext={() => handlePagination('facebook', 'next')} 
                        onPrev={() => handlePagination('facebook', 'prev')}
                    />
                )}
                
                {activeTab === 'instagram' && data && data.instagram_data && (
                    <InstagramSection 
                        data={data.instagram_data}
                        onNext={() => handlePagination('instagram', 'next')} 
                        onPrev={() => handlePagination('instagram', 'prev')} 
                    />
                )}

                {/* Twitter integration disabled
                {activeTab === 'twitter' && (
                    <div className="space-y-6">
                        ...
                    </div>
                )} 
                */}

                {activeTab === 'report' && (
                    <ReportSection />
                )}
            </div>
        </div>
      )}
      {(activeTab === 'facebook' || activeTab === 'instagram') && data && (
        <div className="flex justify-center mt-8">
            <button 
                onClick={() => fetchMoreData(activeTab)}
                disabled={loading}
                className="btn btn-outline btn-wide"
            >
                {loading ? <Loader2 className="animate-spin mr-2" /> : null}
                Load More History (Analisis Comparativo)
            </button>
        </div>
      )}

    </div>
  );
}
