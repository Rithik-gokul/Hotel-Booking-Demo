export interface Hotel {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  amenities: string[];
  description: string;
  reviews: Review[];
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FilterOptions {
  priceRange: [number, number];
  rating: number | null;
  amenities: string[];
  searchQuery: string;
} 