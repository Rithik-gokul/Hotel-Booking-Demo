import { Hotel } from '../types/hotel';

export const hotels: Hotel[] = [
  {
    id: 1,
    name: 'Grand Luxury Resort',
    location: 'Miami Beach, FL',
    price: 299,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    amenities: ['Pool', 'Spa', 'Restaurant', 'Gym', 'Beach Access'],
    description: 'Luxurious beachfront resort with stunning ocean views and world-class amenities.',
    reviews: [
      {
        id: 1,
        author: 'John Smith',
        rating: 5,
        comment: 'Amazing experience! The staff was incredibly attentive.',
        date: '2024-03-15'
      },
      {
        id: 2,
        author: 'Sarah Johnson',
        rating: 4,
        comment: 'Beautiful property with great amenities.',
        date: '2024-03-10'
      }
    ]
  },
  {
    id: 2,
    name: 'Urban Boutique Hotel',
    location: 'New York, NY',
    price: 199,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    amenities: ['Restaurant', 'Bar', 'Business Center', 'Free WiFi'],
    description: 'Stylish boutique hotel in the heart of Manhattan, perfect for business and leisure travelers.',
    reviews: [
      {
        id: 3,
        author: 'Michael Brown',
        rating: 4,
        comment: 'Great location and modern design.',
        date: '2024-03-12'
      }
    ]
  },
  {
    id: 3,
    name: 'Mountain View Lodge',
    location: 'Denver, CO',
    price: 149,
    rating: 4.0,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    amenities: ['Ski Storage', 'Restaurant', 'Hot Tub', 'Free Parking'],
    description: 'Cozy mountain retreat with breathtaking views and easy access to ski slopes.',
    reviews: [
      {
        id: 4,
        author: 'Emily Davis',
        rating: 4,
        comment: 'Perfect for winter sports enthusiasts!',
        date: '2024-03-08'
      }
    ]
  },
  {
    id: 4,
    name: 'Seaside Inn',
    location: 'San Diego, CA',
    price: 179,
    rating: 3.5,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    amenities: ['Beach Access', 'Pool', 'Restaurant', 'Free WiFi'],
    description: 'Charming beachfront hotel with comfortable rooms and ocean views.',
    reviews: [
      {
        id: 5,
        author: 'David Wilson',
        rating: 3,
        comment: 'Good location but rooms need updating.',
        date: '2024-03-05'
      }
    ]
  },
  {
    id: 5,
    name: 'City Center Hotel',
    location: 'Chicago, IL',
    price: 159,
    rating: 3.0,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    amenities: ['Business Center', 'Restaurant', 'Gym', 'Free WiFi'],
    description: 'Convenient downtown location with modern amenities and comfortable rooms.',
    reviews: [
      {
        id: 6,
        author: 'Lisa Anderson',
        rating: 3,
        comment: 'Basic amenities but good value for money.',
        date: '2024-03-01'
      }
    ]
  },
  {
    id: 6,
    name: 'Desert Oasis Resort',
    location: 'Phoenix, AZ',
    price: 229,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    amenities: ['Pool', 'Spa', 'Golf Course', 'Restaurant', 'Tennis Courts'],
    description: 'Luxurious desert resort with stunning views and extensive recreational facilities.',
    reviews: [
      {
        id: 7,
        author: 'Robert Taylor',
        rating: 5,
        comment: 'Excellent facilities and service!',
        date: '2024-03-18'
      }
    ]
  },
  {
    id: 7,
    name: 'Historic Downtown Inn',
    location: 'Boston, MA',
    price: 189,
    rating: 3.8,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    amenities: ['Restaurant', 'Bar', 'Business Center', 'Free WiFi'],
    description: 'Charming historic hotel in the heart of downtown, close to major attractions.',
    reviews: [
      {
        id: 8,
        author: 'Jennifer White',
        rating: 4,
        comment: 'Beautiful historic building with modern comforts.',
        date: '2024-03-14'
      }
    ]
  },
  {
    id: 8,
    name: 'Lakeside Retreat',
    location: 'Seattle, WA',
    price: 169,
    rating: 3.5,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    amenities: ['Lake View', 'Restaurant', 'Kayak Rental', 'Free WiFi'],
    description: 'Peaceful lakeside hotel with beautiful views and outdoor activities.',
    reviews: [
      {
        id: 9,
        author: 'Thomas Clark',
        rating: 3,
        comment: 'Nice views but limited dining options.',
        date: '2024-03-07'
      }
    ]
  },
  {
    id: 9,
    name: 'Business Hotel',
    location: 'Houston, TX',
    price: 139,
    rating: 3.0,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    amenities: ['Business Center', 'Restaurant', 'Gym', 'Free WiFi'],
    description: 'Practical hotel for business travelers with essential amenities.',
    reviews: [
      {
        id: 10,
        author: 'Patricia Lee',
        rating: 3,
        comment: 'Good for business trips, basic but functional.',
        date: '2024-03-03'
      }
    ]
  },
  {
    id: 10,
    name: 'Family Resort',
    location: 'Orlando, FL',
    price: 249,
    rating: 4.1,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    amenities: ['Water Park', 'Kids Club', 'Restaurant', 'Pool', 'Entertainment'],
    description: 'Family-friendly resort with activities for all ages and easy access to theme parks.',
    reviews: [
      {
        id: 11,
        author: 'James Wilson',
        rating: 4,
        comment: 'Great for families with kids!',
        date: '2024-03-16'
      }
    ]
  }
]; 