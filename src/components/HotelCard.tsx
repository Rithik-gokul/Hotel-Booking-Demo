import { Card, CardContent, CardMedia, Typography, Box, Chip, Button } from '@mui/material';
import { Hotel } from '../types/hotel';
import { Star } from '@mui/icons-material';

interface HotelCardProps {
  hotel: Hotel;
  onBook: (hotel: Hotel) => void;
}

const HotelCard = ({ hotel, onBook }: HotelCardProps) => {
  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="240"
          image={hotel.image}
          alt={hotel.name}
          sx={{
            objectFit: 'cover',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            bgcolor: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
            px: 1.5,
            py: 0.5,
            borderRadius: 2,
          }}
        >
          <Star sx={{ color: '#FFD700', fontSize: 20 }} />
          <Typography variant="subtitle2" fontWeight="bold">
            {hotel.rating}
          </Typography>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            bgcolor: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
            px: 1.5,
            py: 0.5,
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          <Typography variant="subtitle2" fontWeight="bold">
            ${hotel.price}
          </Typography>
          <Typography variant="body2">/night</Typography>
        </Box>
      </Box>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2, p: 3 }}>
        <Box>
          <Typography variant="h6" component="h2" gutterBottom fontWeight="600">
            {hotel.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {hotel.location}
          </Typography>
        </Box>
        
        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
          {hotel.description}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {hotel.amenities.map((amenity) => (
            <Chip
              key={amenity}
              label={amenity}
              size="small"
              sx={{
                borderRadius: 1,
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'rgba(37, 99, 235, 0.2)',
                },
              }}
            />
          ))}
        </Box>

        <Button
          variant="contained"
          fullWidth
          onClick={() => onBook(hotel)}
          sx={{
            mt: 'auto',
            py: 1.5,
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 'bold',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            '&:hover': {
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            },
          }}
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default HotelCard; 