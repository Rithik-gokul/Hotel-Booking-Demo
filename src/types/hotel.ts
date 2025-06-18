export interface Hotel {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  amenities: string[];
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
  minRating: number;
  searchQuery: string;
  selectedAmenities: string[];
} 