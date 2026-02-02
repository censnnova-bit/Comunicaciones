export interface TwitterUser {
    data: {
      id: string;
      name: string;
      username: string;
      profile_image_url?: string;
      public_metrics: {
        followers_count: number;
        following_count: number;
        tweet_count: number;
        listed_count: number;
      };
    };
  }
  
  export interface TwitterTweet {
    id: string;
    text: string;
    created_at: string;
    public_metrics: {
      retweet_count: number;
      reply_count: number;
      like_count: number;
      quote_count: number;
      impression_count: number;
      bookmark_count: number;
    };
  }
  
  export interface TwitterData {
    user: TwitterUser['data'];
    tweets: TwitterTweet[];
    meta?: {
        result_count: number;
        newest_id?: string;
        oldest_id?: string;
        next_token?: string;
    };
  }
  