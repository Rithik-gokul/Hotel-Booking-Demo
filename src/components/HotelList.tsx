import { Box, Grid, Typography } from '@mui/material';
import HotelCard from './HotelCard';
import { Hotel } from '../types/hotel';

interface HotelListProps {
  hotels: Hotel[];
  onBookHotel: (hotel: Hotel) => void;
}

const HotelList = ({ hotels, onBookHotel }: HotelListProps) => {
  if (hotels.length === 0) {
    return (
      <Box sx={{ 
        textAlign: 'center', 
        py: 8,
        px: 2,
      }}>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          No hotels found
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Try adjusting your filters to find more options
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {hotels.map((hotel) => (
        <Grid item xs={12} sm={6} md={4} key={hotel.id}>
          <HotelCard hotel={hotel} onBook={onBookHotel} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HotelList; 