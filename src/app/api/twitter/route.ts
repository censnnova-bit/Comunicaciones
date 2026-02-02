import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 });
  }

  const token = process.env.TWITTER_BEARER_TOKEN;

  if (!token) {
    return NextResponse.json({ error: 'Twitter Bearer Token not configured' }, { status: 500 });
  }

  try {
    // 1. Get User ID and Metrics
    const userRes = await fetch(
      `https://api.twitter.com/2/users/by/username/${username}?user.fields=public_metrics,profile_image_url`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!userRes.ok) {
        const errorText = await userRes.text();
        return NextResponse.json({ error: `Twitter API Error (User): ${errorText}` }, { status: userRes.status });
    }

    const userData = await userRes.json();

    if (!userData.data) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const userId = userData.data.id;

    // Parameters for tweets query
    const resultsLimit = searchParams.get('limit') || '100'; // Default to 100 to get more history
    const paginationToken = searchParams.get('pagination_token');
    const startTime = searchParams.get('start_time');
    const endTime = searchParams.get('end_time');

    let tweetsUrl = `https://api.twitter.com/2/users/${userId}/tweets?tweet.fields=created_at,public_metrics&max_results=${resultsLimit}&exclude=retweets,replies`;

    if (paginationToken) {
        tweetsUrl += `&pagination_token=${paginationToken}`;
    }
    if (startTime) {
        tweetsUrl += `&start_time=${startTime}`;
    }
    if (endTime) {
        tweetsUrl += `&end_time=${endTime}`;
    }

    // 2. Get User Tweets
    const tweetsRes = await fetch(
      tweetsUrl,
      {
        headers: {
            Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!tweetsRes.ok) {
        const errorText = await tweetsRes.text();
        return NextResponse.json({ error: `Twitter API Error (Tweets): ${errorText}` }, { status: tweetsRes.status });
    }

    const tweetsData = await tweetsRes.json();

    return NextResponse.json({
      user: userData.data,
      tweets: tweetsData.data || [],
      meta: tweetsData.meta
    });

  } catch (error) {
    console.error('Twitter API execution error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
