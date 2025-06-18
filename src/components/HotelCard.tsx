import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, Rating, Button, Stack } from '@mui/material';
import { Hotel } from '../types/hotel';
import { LocationOn, AttachMoney, Star } from '@mui/icons-material';

interface HotelCardProps {
  hotel: Hotel;
  onBook: (hotel: Hotel) => void;
}

const HotelCard = ({ hotel, onBook }: HotelCardProps) => {
  return (
    <Card sx={{ 
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="200"
          image={hotel.image}
          alt={hotel.name}
          sx={{
            objectFit: 'cover',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '50%',
              background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            bgcolor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: 2,
            px: 1,
            py: 0.5,
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          <Star sx={{ color: '#FFD700', fontSize: 20 }} />
          <Typography variant="subtitle1" fontWeight="bold">
            {hotel.rating}
          </Typography>
        </Box>
      </Box>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
          {hotel.name}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <LocationOn color="action" sx={{ fontSize: 20 }} />
          <Typography variant="body2" color="text.secondary">
            {hotel.location}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <AttachMoney color="primary" />
          <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
            {hotel.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            /night
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ 
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          mb: 1
        }}>
          {hotel.description}
        </Typography>
        <Stack direction="row" spacing={0.5} sx={{ flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
          {hotel.amenities.map((amenity, index) => (
            <Chip
              key={index}
              label={amenity}
              size="small"
              sx={{
                borderRadius: 1,
                backgroundColor: 'rgba(33, 150, 243, 0.1)',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'rgba(33, 150, 243, 0.2)',
                },
              }}
            />
          ))}
        </Stack>
        <Button
          variant="contained"
          fullWidth
          onClick={() => onBook(hotel)}
          sx={{
            mt: 'auto',
            py: 1,
          }}
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default HotelCard; 