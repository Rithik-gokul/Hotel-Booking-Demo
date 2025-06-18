import React from 'react';
import { 
  Paper, 
  TextField, 
  Typography, 
  Slider, 
  Rating, 
  Box, 
  Chip,
  InputAdornment,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Search as SearchIcon, AttachMoney as MoneyIcon, Star as StarIcon } from '@mui/icons-material';
import { FilterOptions } from '../types/hotel';

interface FilterBarProps {
  filterOptions: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const amenities = [
  'Pool', 'Spa', 'Restaurant', 'Gym', 'Beach Access', 
  'Free WiFi', 'Business Center', 'Bar', 'Hot Tub'
];

const FilterBar: React.FC<FilterBarProps> = ({ filterOptions, onFilterChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handlePriceChange = (_event: Event, newValue: number | number[]) => {
    onFilterChange({
      ...filterOptions,
      priceRange: newValue as [number, number],
    });
  };

  const handleRatingChange = (_event: React.SyntheticEvent, newValue: number | null) => {
    onFilterChange({
      ...filterOptions,
      rating: newValue,
    });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({
      ...filterOptions,
      searchQuery: event.target.value,
    });
  };

  const handleAmenityToggle = (amenity: string) => {
    const newAmenities = filterOptions.amenities.includes(amenity)
      ? filterOptions.amenities.filter(a => a !== amenity)
      : [...filterOptions.amenities, amenity];
    
    onFilterChange({
      ...filterOptions,
      amenities: newAmenities,
    });
  };

  return (
    <Paper 
      elevation={0}
      sx={{ 
        p: { xs: 2, sm: 3 },
        backgroundColor: '#fff',
        border: '1px solid',
        borderColor: 'divider',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search hotels..."
        value={filterOptions.searchQuery}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 1,
          },
        }}
      />

      <Box>
        <Typography variant="subtitle1" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <MoneyIcon color="primary" />
          Price Range
        </Typography>
        <Slider
          value={filterOptions.priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={500}
          sx={{
            color: 'primary.main',
            '& .MuiSlider-thumb': {
              width: 16,
              height: 16,
            },
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Typography variant="body2" color="text.secondary">
            ${filterOptions.priceRange[0]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${filterOptions.priceRange[1]}
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography variant="subtitle1" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <StarIcon color="primary" />
          Minimum Rating
        </Typography>
        <Rating
          value={filterOptions.rating || 0}
          onChange={handleRatingChange}
          precision={0.5}
          sx={{
            '& .MuiRating-iconFilled': {
              color: 'primary.main',
            },
          }}
        />
      </Box>

      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Amenities
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 1,
          maxHeight: isMobile ? 'none' : '200px',
          overflowY: isMobile ? 'visible' : 'auto',
        }}>
          {amenities.map((amenity) => (
            <Chip
              key={amenity}
              label={amenity}
              onClick={() => handleAmenityToggle(amenity)}
              color={filterOptions.amenities.includes(amenity) ? 'primary' : 'default'}
              sx={{
                borderRadius: 1,
                '&:hover': {
                  backgroundColor: filterOptions.amenities.includes(amenity)
                    ? 'primary.dark'
                    : 'action.hover',
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default FilterBar; 