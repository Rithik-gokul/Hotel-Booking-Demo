import { useState } from 'react';
import { 
  Container, 
  Box, 
  CssBaseline, 
  ThemeProvider, 
  useTheme,
  createTheme
} from '@mui/material';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import HotelList from './components/HotelList';
import { hotels } from './data/hotels';
import { FilterOptions } from './types/hotel';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
      light: '#60a5fa',
      dark: '#1e40af',
    },
    secondary: {
      main: '#0f172a',
      light: '#1e293b',
      dark: '#020617',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f8fafc',
          minHeight: '100vh',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          padding: '8px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          },
        },
      },
    },
  },
});

function App() {
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    priceRange: [0, 1000],
    minRating: 0,
    searchQuery: '',
    selectedAmenities: [],
  });

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilterOptions(newFilters);
  };

  const handleBookHotel = (hotel: any) => {
    console.log('Booking hotel:', hotel);
    // Implement booking logic here
  };

  const theme = useTheme();

  const filteredHotels = hotels.filter(hotel => {
    const matchesPrice = hotel.price >= filterOptions.priceRange[0] && 
                        hotel.price <= filterOptions.priceRange[1];
    const matchesRating = hotel.rating >= filterOptions.minRating;
    const matchesSearch = hotel.name.toLowerCase().includes(filterOptions.searchQuery.toLowerCase()) ||
                         hotel.location.toLowerCase().includes(filterOptions.searchQuery.toLowerCase());
    const matchesAmenities = filterOptions.selectedAmenities.length === 0 ||
                            filterOptions.selectedAmenities.every(amenity => 
                              hotel.amenities.includes(amenity));

    return matchesPrice && matchesRating && matchesSearch && matchesAmenities;
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      }}>
        <Header />
        <Container maxWidth="xl" sx={{ py: 4 }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', lg: 'row' },
            gap: 4,
            alignItems: { lg: 'flex-start' }
          }}>
            <Box sx={{ 
              width: { lg: '300px' },
              flexShrink: 0,
              position: { lg: 'sticky' },
              top: 24,
            }}>
              <FilterBar 
                filterOptions={filterOptions} 
                onFilterChange={handleFilterChange} 
              />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <HotelList 
                hotels={filteredHotels} 
                onBookHotel={handleBookHotel} 
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App; 