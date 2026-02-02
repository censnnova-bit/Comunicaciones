'use client';

import { useState, useEffect, useCallback } from 'react';
import { FacebookData, FacebookLoginResponse, AccountsResponse, FacebookPage, Post, InstagramMedia, InstagramData, PaginationResponse } from '@/types/social';

const FACEBOOK_POST_FIELDS = 'id,message,story,created_time,permalink_url,full_picture,shares,reactions.summary(true),comments.summary(true).limit(5){message,created_time,from},insights.metric(post_impressions_unique,post_engagements)';
const INSTAGRAM_MEDIA_FIELDS = 'caption,media_type,media_url,permalink,timestamp,like_count,comments_count';

// Función para no saturar la API (Rate Limiting)
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const useFacebook = () => {
    const [data, setData] = useState<FacebookData | null>(null);
    const [loading, setLoading] = useState(false);
    const [isSdkLoaded, setIsSdkLoaded] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    // Store credentials for pagination
    const [pageAccessToken, setPageAccessToken] = useState<string | null>(null);
    const [pageId, setPageId] = useState<string | null>(null);
    const [instagramId, setInstagramId] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        if (typeof window !== 'undefined' && window.FB) {
             setTimeout(() => {
                 if (isMounted) setIsSdkLoaded(true);
             }, 0);
             return;
        }

        window.fbAsyncInit = function() {
            window.FB.init({
                appId      : process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '', 
                cookie     : true,
                xfbml      : true,
                version    : 'v18.0'
            });
            if (isMounted) setIsSdkLoaded(true);
        };

        const scriptId = 'facebook-jssdk';
        if (!document.getElementById(scriptId)) {
            const js = document.createElement('script');
            js.id = scriptId;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            const fjs = document.getElementsByTagName('script')[0];
            if (fjs && fjs.parentNode) {
                fjs.parentNode.insertBefore(js, fjs);
            }
        }

        return () => {
            isMounted = false;
        };
    }, []);

    // Helper para obtener fecha uniformemente
    const getDateFromPost = (post: any, type: 'facebook' | 'instagram') => {
        const dateStr = type === 'facebook' ? post.created_time : post.timestamp;
        return new Date(dateStr);
    };

    /**
     * Carga recursiva automática: Sigue pidiendo páginas hasta llegar a untilDate
     */
    const fetchPostsByDate = useCallback(async (type: 'facebook' | 'instagram', untilDate: Date) => {
        if (!process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || !pageAccessToken) return;
        
        const targetId = type === 'facebook' ? pageId : instagramId;
        if (!targetId) return;

        setLoading(true);
        let hasMore = true;
        
        // Empezamos desde el último cursor conocido para no re-descargar lo que ya tenemos
        let nextCursor: string | undefined = undefined;
        if (data) {
            const currentPaging = type === 'facebook' ? data.posts?.paging : data.instagram_data?.media?.paging;
            nextCursor = currentPaging?.cursors?.after;
        }

        const endpoint = `/${targetId}/${type === 'facebook' ? 'posts' : 'media'}`;
        const fields = type === 'facebook' ? FACEBOOK_POST_FIELDS : INSTAGRAM_MEDIA_FIELDS;
        
        let safetyCounter = 0; // Evitar bucles infinitos

        try {
            while (hasMore && safetyCounter < 20) { // Máximo 20 páginas seguidas (aprox 500 posts) por seguridad
                safetyCounter++;
                
                await new Promise<void>((resolve) => {
                    window.FB.api(
                        endpoint,
                        'GET',
                        {
                            access_token: pageAccessToken,
                            limit: 25, // Lote pequeño = Respuesta rápida y sin error
                            after: nextCursor,
                            fields: fields
                        },
                        (response: PaginationResponse) => {
                            if (!response || response.error) {
                                console.error("Error en fetch recursivo:", response);
                                hasMore = false;
                                resolve();
                                return;
                            }

                            const newItems = response.data;
                            if (!newItems || newItems.length === 0) {
                                hasMore = false;
                                resolve();
                                return;
                            }

                            // Chequeamos fechas
                            const lastItem = newItems[newItems.length - 1];
                            const lastDate = getDateFromPost(lastItem, type);

                            if (lastDate < untilDate) {
                                hasMore = false; // Ya llegamos a la fecha objetivo
                            }

                            // Actualizamos estado acumulando datos
                            setData(prevData => {
                                if (!prevData) return null;
                                const newData = { ...prevData };

                                if (type === 'facebook') {
                                    // Filtrar duplicados por si acaso
                                    const existingIds = new Set((newData.posts?.data || []).map(p => p.id));
                                    const uniqueNew = (newItems as Post[]).filter(p => !existingIds.has(p.id));
                                    
                                    newData.posts = {
                                        data: [...(newData.posts?.data || []), ...uniqueNew], // Spread operator para acumular
                                        paging: response.paging
                                    };
                                } else {
                                    if (!newData.instagram_data) return prevData;
                                    const existingIds = new Set((newData.instagram_data.media.data || []).map(p => p.id));
                                    const uniqueNew = (newItems as InstagramMedia[]).filter(p => !existingIds.has(p.id));

                                    newData.instagram_data = {
                                        ...newData.instagram_data,
                                        media: {
                                            data: [...(newData.instagram_data.media.data || []), ...uniqueNew],
                                            paging: response.paging
                                        }
                                    };
                                }
                                return newData;
                            });

                            nextCursor = response.paging?.cursors?.after;
                            if (!nextCursor) hasMore = false;
                            
                            resolve();
                        }
                    );
                });

                await sleep(300); // Pequeña pausa para ser amigable con la API
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [pageId, instagramId, pageAccessToken, data]);

    const fetchPageData = useCallback((pId: string, token: string) => {
        const fields = [
            'id',
            'name',
            'about',
            'followers_count',
            'fan_count',
            'instagram_business_account',
            `posts.limit(25){${FACEBOOK_POST_FIELDS}}`
        ].join(',');

        try {
            window.FB.api(
                `/${pId}`,
                'GET',
                { fields: fields, access_token: token },
                (response: FacebookData | { error?: { message: string } }) => {
                    if (!response || 'error' in response) {
                        const errRes = response as { error?: { message: string } };
                        console.error("Error fetching page details:", errRes?.error);
                        setError(errRes?.error?.message || 'Error fetching page data');
                        setLoading(false);
                        return;
                    }
                    
                    const fbResponse = response as FacebookData & { fan_count?: number };
                    
                    const formattedData: FacebookData = {
                        ...fbResponse,
                        likes: {
                            followers_count: fbResponse.likes?.followers_count || fbResponse.fan_count || 0
                        }
                    };

                    // Store basic info for pagination
                    setPageId(pId);
                    setPageAccessToken(token);

                    if (fbResponse.instagram_business_account && fbResponse.instagram_business_account.id) {
                        const igId = fbResponse.instagram_business_account.id;
                        setInstagramId(igId);
                        
                        const igFields = `username,followers_count,media.limit(50){${INSTAGRAM_MEDIA_FIELDS}}`;

                        try {
                            window.FB.api(
                                `/${igId}`,
                                'GET',
                                { fields: igFields, access_token: token },
                                (igResponse: InstagramData | { error?: { message: string } }) => {
                                    if (igResponse && !('error' in igResponse)) {
                                        formattedData.instagram_data = igResponse as InstagramData;
                                    }
                                    setData(formattedData);
                                    setLoading(false);
                                }
                            );
                        } catch (igErr) {
                             console.warn("FB.api (IG) failed over HTTP.", igErr);
                             setData(formattedData);
                             setLoading(false);
                        }
                    } else {
                        setData(formattedData);
                        setLoading(false);
                    }
                }
            );
        } catch (err) {
             console.warn("FB.api (Page) failed. Ensure you are using HTTPS.", err);
             setLoading(false);
        }
    }, []);

    const handlePagination = useCallback((type: 'facebook' | 'instagram', direction: 'next' | 'prev') => {
        if (!data || !pageAccessToken) return;

        let cursor: string | undefined;
        let endpoint = '';
        let fields = '';

        if (type === 'facebook') {
            if (!pageId) return;
            const paging = data.posts?.paging;
            cursor = direction === 'next' ? paging?.cursors?.after : paging?.cursors?.before;
            if (!cursor) return; // No more pages

            endpoint = `/${pageId}/posts`;
            fields = FACEBOOK_POST_FIELDS;
        } else {
            if (!instagramId || !data.instagram_data?.media) return;
            const paging = data.instagram_data.media.paging;
            cursor = direction === 'next' ? paging?.cursors?.after : paging?.cursors?.before;
            if (!cursor) return;

            endpoint = `/${instagramId}/media`;
            fields = INSTAGRAM_MEDIA_FIELDS;
        }

        setLoading(true);
        window.FB.api(
            endpoint,
            'GET',
            { 
                access_token: pageAccessToken,
                limit: 25,
                [direction === 'next' ? 'after' : 'before']: cursor,
                fields: fields
            },
            (response: PaginationResponse) => {
                setLoading(false);
                if (!response || response.error) {
                    console.error("Pagination error:", response);
                    return;
                }

                setData(prevData => {
                    if (!prevData) return null;
                    const newData = { ...prevData };
                    
                    if (type === 'facebook') {
                        if (!newData.posts) newData.posts = { data: [] };
                        // Append new data to existing list instead of replacing
                        // Filter duplicates just in case
                        const existingIds = new Set(newData.posts.data.map((p: Post) => p.id));
                        const newPosts = response.data as Post[];
                        const uniqueNewPosts = newPosts.filter((p: Post) => !existingIds.has(p.id));
                        
                        newData.posts = {
                            data: [...newData.posts.data, ...uniqueNewPosts],
                            paging: response.paging
                        };
                    } else {
                         if (newData.instagram_data && newData.instagram_data.media) {
                             const existingIds = new Set(newData.instagram_data.media.data.map((p: InstagramMedia) => p.id));
                             const newMedia = response.data as InstagramMedia[];
                             const uniqueNewMedia = newMedia.filter((p: InstagramMedia) => !existingIds.has(p.id));

                             newData.instagram_data = {
                                 ...newData.instagram_data,
                                 media: {
                                    data: [...newData.instagram_data.media.data, ...uniqueNewMedia],
                                    paging: response.paging
                                 }
                             };
                         }
                    }
                    return newData;
                });
            }
        );

    }, [data, pageAccessToken, pageId, instagramId]);

    const fetchAccounts = useCallback(() => {
        window.FB.api('/me/accounts', 'GET', { fields: 'name,access_token,id,category' }, (accountsResponse: AccountsResponse) => {
            if(accountsResponse && accountsResponse.data && accountsResponse.data.length > 0) {
                const targetName = "CENS";
                const targetPage = accountsResponse.data.find((p: FacebookPage) => 
                    p.name.toUpperCase().includes(targetName)
                ) || accountsResponse.data[0];

                fetchPageData(targetPage.id, targetPage.access_token);
            } else {
                setError("No pages found associated with this account.");
                setLoading(false);
            }
        });
    }, [fetchPageData]);

    const loginAndFetch = useCallback(() => {
        if (!process.env.NEXT_PUBLIC_FACEBOOK_APP_ID) {
            setError("Facebook App ID is not configured in .env.local");
            return;
        }

        if (!window.FB) return;
        setLoading(true);
        setError(null);

        try {
            window.FB.login(function(response: FacebookLoginResponse) {
                if (response.authResponse) {
                    fetchAccounts();
                } else {
                    setError('User cancelled login or did not fully authorize.');
                    setLoading(false);
                }
            }, {
                scope: 'public_profile,pages_show_list,pages_read_engagement,pages_read_user_content,read_insights,instagram_basic,instagram_manage_insights'
            });
        } catch (err) {
            console.warn("FB.login failed. Ensure you are using HTTPS (npm run dev:https).", err);
            setLoading(false);
        }
    }, [fetchAccounts]);

    // Auto-login check when SDK loads
    useEffect(() => {
        let isMounted = true;
        
        if (isSdkLoaded && window.FB) {
             // Use minimal loading state or just background check
            try {
                window.FB.getLoginStatus((response: FacebookLoginResponse) => {
                    if (isMounted && response.status === 'connected') {
                        // User is already logged in and connected to the app
                        setLoading(true);
                        fetchAccounts();
                    }
                });
            } catch (e) {
                console.warn("FB.getLoginStatus failed. This method requires HTTPS. If you are developing locally, consider using 'npm run dev:https'.", e);
            }
        }
        
        return () => { isMounted = false; };
    }, [isSdkLoaded, fetchAccounts]);

    const fetchMoreData = useCallback((type: 'facebook' | 'instagram') => {
        handlePagination(type, 'next');
    }, [handlePagination]);

    return {
        data,
        loading,
        isSdkLoaded,
        error,
        loginAndFetch,
        handlePagination,
        fetchMoreData,
        fetchPostsByDate
    };
};
