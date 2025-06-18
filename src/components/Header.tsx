import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container, 
  IconButton, 
  useTheme, 
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Avatar,
  Badge,
  alpha
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  Hotel as HotelIcon, 
  Menu as MenuIcon,
  Home as HomeIcon,
  Search as SearchIcon,
  Favorite as FavoriteIcon,
  Person as PersonIcon,
  Notifications as NotificationsIcon,
  Close as CloseIcon
} from '@mui/icons-material';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  borderBottom: `1px solid ${alpha('#fff', 0.1)}`,
  padding: theme.spacing(1, 0),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  padding: theme.spacing(1, 2),
  borderRadius: 0,
  position: 'relative',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    '&::after': {
      transform: 'scaleX(1)',
    },
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%) scaleX(0)',
    width: '80%',
    height: '2px',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease',
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: '#fff',
  padding: theme.spacing(1),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Search', icon: <SearchIcon /> },
    { text: 'Favorites', icon: <FavoriteIcon /> },
    { text: 'Profile', icon: <PersonIcon /> },
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box sx={{ width: 280 }} role="presentation">
      <Box sx={{ 
        p: 2, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
        color: '#fff'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <HotelIcon sx={{ color: '#fff' }} />
          <Typography variant="h6" fontWeight="bold">Hotel Booking</Typography>
        </Box>
        <IconButton onClick={toggleDrawer} sx={{ color: '#fff' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.text} 
            sx={{ 
              py: 1.5,
              '&:hover': {
                backgroundColor: 'rgba(26, 35, 126, 0.08)',
              }
            }}
          >
            <ListItemIcon sx={{ color: 'primary.main' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar sx={{ px: { xs: 1, sm: 2 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <HotelIcon sx={{ 
                fontSize: { xs: 28, sm: 32 },
                color: '#fff',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
              }} />
              <Typography
                variant="h5"
                component="div"
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  background: 'linear-gradient(45deg, #ffffff 30%, #e3f2fd 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                Hotel Booking
              </Typography>
            </Box>

            {isMobile ? (
              <StyledIconButton
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
                sx={{ ml: 'auto' }}
              >
                <MenuIcon />
              </StyledIconButton>
            ) : (
              <Box sx={{ 
                ml: 'auto',
                display: 'flex', 
                alignItems: 'center',
                gap: 2,
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  gap: 1,
                }}>
                  {menuItems.map((item) => (
                    <StyledButton key={item.text} startIcon={item.icon}>
                      {item.text}
                    </StyledButton>
                  ))}
                </Box>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  ml: 2,
                  pl: 2,
                  borderLeft: `1px solid ${alpha('#fff', 0.1)}`,
                }}>
                  <StyledIconButton>
                    <Badge badgeContent={3} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </StyledIconButton>
                  <Avatar 
                    sx={{ 
                      width: 32, 
                      height: 32,
                      bgcolor: 'primary.light',
                      cursor: 'pointer',
                      border: `2px solid ${alpha('#fff', 0.2)}`,
                    }}
                  >
                    <PersonIcon fontSize="small" />
                  </Avatar>
                </Box>
              </Box>
            )}
          </Toolbar>
        </Container>
      </StyledAppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header; 