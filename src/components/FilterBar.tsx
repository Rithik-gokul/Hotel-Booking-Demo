import React from 'react';
import { 
  Paper, 
  Typography, 
  TextField, 
  Slider, 
  Rating, 
  Box, 
  Chip,
  InputAdornment,
  Divider,
} from '@mui/material';
import { Search as SearchIcon, AttachMoney, Star } from '@mui/icons-material';
import { FilterOptions } from '../types/hotel';

interface FilterBarProps {
  filterOptions: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const amenities = [
  'WiFi',
  'Pool',
  'Spa',
  'Gym',
  'Restaurant',
  'Parking',
  'Air Conditioning',
  'Breakfast',
];

const FilterBar = ({ filterOptions, onFilterChange }: FilterBarProps) => {
  const handlePriceChange = (_event: Event, newValue: number | number[]) => {
    onFilterChange({
      ...filterOptions,
      priceRange: newValue as [number, number],
    });
  };

  const handleRatingChange = (_event: Event, newValue: number | number[]) => {
    onFilterChange({
      ...filterOptions,
      minRating: newValue as number,
    });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({
      ...filterOptions,
      searchQuery: event.target.value,
    });
  };

  const handleAmenityToggle = (amenity: string) => {
    const newAmenities = filterOptions.selectedAmenities.includes(amenity)
      ? filterOptions.selectedAmenities.filter(a => a !== amenity)
      : [...filterOptions.selectedAmenities, amenity];
    
    onFilterChange({
      ...filterOptions,
      selectedAmenities: newAmenities,
    });
  };

  return (
    <Paper 
      elevation={0}
      sx={{ 
        p: 3,
        borderRadius: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h6" gutterBottom fontWeight="600">
        Filters
      </Typography>

      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
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
              borderRadius: 2,
              backgroundColor: 'background.paper',
            },
          }}
        />
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom fontWeight="600">
          Price Range
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <AttachMoney color="primary" />
          <Slider
            value={filterOptions.priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
            sx={{
              color: 'primary.main',
              '& .MuiSlider-thumb': {
                width: 16,
                height: 16,
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: '0 0 0 8px rgba(37, 99, 235, 0.16)',
                },
              },
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" color="text.secondary">
            ${filterOptions.priceRange[0]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${filterOptions.priceRange[1]}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom fontWeight="600">
          Minimum Rating
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Star color="primary" />
          <Rating
            value={filterOptions.minRating}
            onChange={handleRatingChange}
            precision={0.5}
            sx={{
              '& .MuiRating-iconFilled': {
                color: 'primary.main',
              },
            }}
          />
        </Box>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box>
        <Typography variant="subtitle2" gutterBottom fontWeight="600">
          Amenities
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {amenities.map((amenity) => (
            <Chip
              key={amenity}
              label={amenity}
              onClick={() => handleAmenityToggle(amenity)}
              color={filterOptions.selectedAmenities.includes(amenity) ? 'primary' : 'default'}
              sx={{
                borderRadius: 1,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: filterOptions.selectedAmenities.includes(amenity)
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