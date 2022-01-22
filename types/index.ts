export interface Artwork {
  id: string;
  createdAt: string;
  name: string;
  artworksUrl: string;
  currentBid: string;
  bid_starts: string;
  bid_ends: string;
  bar: string;
}

export interface Artist {
  createdAt: string;
  name: string;
  avatar: string;
  username: string;
  id: string;
}

export interface Activity {
  createdAt: string;
  name: string;
  avatar: string;
  message: string;
  id: string;
}
