import React from 'react';
import { Box, Grid } from '@mui/material';
import HotelCard from './HotelCard';
import { Hotel } from '../types/hotel';

interface HotelListProps {
  hotels: Hotel[];
}

const HotelList: React.FC<HotelListProps> = ({ hotels }) => {
  const handleBook = (hotel: Hotel) => {
    // TODO: Implement booking functionality
    console.log('Booking hotel:', hotel);
  };

  return (
    <Box sx={{ 
      display: 'grid', 
      gridTemplateColumns: {
        xs: '1fr',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)'
      },
      gap: { xs: 2, sm: 3 },
    }}>
      {hotels.map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel} onBook={handleBook} />
      ))}
    </Box>
  );
};

export default HotelList; 