export interface PaginationResponse {
    data: (Post | InstagramMedia)[];
    paging?: Paging;
    error?: { message: string };
}

export interface Paging {
  cursors: {
    before: string;
    after: string;
  };
  next?: string;
  previous?: string;
}

export interface InstagramData {
    username: string;
    followers_count: number;
    media: {
      data: InstagramMedia[];
      paging?: Paging;
    };
}

export interface FacebookData {
  id: string;
  name: string;
  about?: string;
  fan_count?: number;
  likes?: {
    followers_count: number;
  };
  posts?: {
    data: Post[];
    paging?: Paging;
  };
  instagram_business_account?: {
    id: string;
  };
  instagram_data?: InstagramData;
}

export interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  like_count: number;
  comments_count: number;
  insights?: {
    data: Insight[];
  };
}

export interface Reaction {
  id: string;
  pic?: string;
  type: string;
}

export interface Comment {
  id: string;
  message: string;
  created_time: string;
  from?: {
    name: string;
    id: string;
  };
  comment_count?: number;
}

export interface Post {
  id: string;
  message?: string;
  story?: string;
  created_time: string;
  permalink_url?: string;
  full_picture?: string; // Note: Facebook images expire, so standard Image optimization might be tricky without whitelisting domains
  status_type?: string;
  shares?: {
    count: number;
  };
  reactions?: {
    data: Reaction[];
    summary?: {
      total_count: number;
    };
  };
  comments?: {
    data: Comment[]; // simplified
    summary?: {
      total_count: number;
    };
  };
  insights?: {
    data: Insight[];
  };
}

export interface Insight {
  id: string;
  name: string;
  values: { value: number }[];
}

export interface FacebookLoginResponse {
  authResponse?: {
    accessToken: string;
    userID: string;
    expiresIn: number;
    signedRequest: string;
  };
  status: 'connected' | 'not_authorized' | 'unknown';
}

export interface FacebookPage {
    id: string;
    name: string;
    access_token: string;
    category?: string;
}

export interface AccountsResponse {
    data: FacebookPage[];
}

export interface FacebookApiError {
  error: {
    message: string;
    type: string;
    code: number;
    error_subcode?: number;
  };
}
