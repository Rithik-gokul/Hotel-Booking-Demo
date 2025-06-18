import React, { useState } from 'react';
import { 
  Container, 
  Box, 
  CssBaseline, 
  ThemeProvider, 
  createTheme,
  useMediaQuery,
  useTheme
} from '@mui/material';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import HotelList from './components/HotelList';
import { hotels } from './data/hotels';
import { FilterOptions } from './types/hotel';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#0d47a1',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f5f5f5',
          minHeight: '100vh',
        },
      },
    },
  },
});

function App() {
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    priceRange: [0, 500],
    rating: null,
    amenities: [],
    searchQuery: '',
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const filteredHotels = hotels.filter(hotel => {
    const matchesPrice = hotel.price >= filterOptions.priceRange[0] && 
                        hotel.price <= filterOptions.priceRange[1];
    const matchesRating = !filterOptions.rating || hotel.rating >= filterOptions.rating;
    const matchesAmenities = filterOptions.amenities.length === 0 || 
                           filterOptions.amenities.every(amenity => 
                             hotel.amenities.includes(amenity));
    const matchesSearch = !filterOptions.searchQuery || 
                         hotel.name.toLowerCase().includes(filterOptions.searchQuery.toLowerCase()) ||
                         hotel.location.toLowerCase().includes(filterOptions.searchQuery.toLowerCase());

    return matchesPrice && matchesRating && matchesAmenities && matchesSearch;
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
      }}>
        <Header />
        <Box sx={{ 
          flex: 1,
          py: { xs: 2, sm: 3 },
          px: { xs: 1, sm: 2 },
          backgroundColor: '#f5f5f5',
        }}>
          <Container 
            maxWidth="lg" 
            sx={{ 
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 2, md: 3 },
              height: '100%',
            }}
          >
            <Box sx={{ 
              width: { xs: '100%', md: '300px' },
              flexShrink: 0,
              position: { xs: 'static', md: 'sticky' },
              top: { md: 24 },
              height: { xs: 'auto', md: 'fit-content' },
              alignSelf: { md: 'flex-start' },
            }}>
              <FilterBar 
                filterOptions={filterOptions}
                onFilterChange={setFilterOptions}
              />
            </Box>
            <Box sx={{ 
              flex: 1,
              minWidth: 0, // Prevents flex item from overflowing
            }}>
              <HotelList hotels={filteredHotels} />
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App; 