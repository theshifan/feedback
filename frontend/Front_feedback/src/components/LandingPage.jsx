import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
} from '@mui/material';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

const LandingPage = () => {
  
  const [anchorEl, setAnchorEl] = useState(null);

  
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{
            height: '100vh',               
            display: 'flex',
            flexDirection: 'column',    
            alignItems: 'center',        
            justifyContent: 'center',}}>
      {/* top head  */}
      <AppBar position="fixed" color="primary">
        <Toolbar>
        
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
          </Menu>

          {/* Optional App title */}
          <Typography variant="h6" sx={{ ml: 2 }}>
            My Feedback App
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Welcome Text */}
     
        <Typography variant="h3" fontWeight="bold">
    Welcome
  </Typography>

  <Button variant="contained" sx={{ mt: 2 }}>
    Get Started
  </Button>
    </Box>
  );
};

export default LandingPage;
