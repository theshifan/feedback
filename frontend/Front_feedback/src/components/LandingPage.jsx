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
      {/*----------- top head ----------- */}
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
          
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
             <a href="/feedback" style={{ textDecoration: 'none', color: 'inherit' }}>
             <MenuItem onClick={handleMenuClose}>Give Your Feedback</MenuItem>
             </a>
             <a href="/Index" style={{ textDecoration: 'none', color: 'inherit' }}>
             <MenuItem onClick={handleMenuClose}>Index</MenuItem>
             </a>
        </Menu>

          {/*  App title */}
          <Typography variant="h6" sx={{ ml: 2 }}>
            Feedback App
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Welcome Text */}
     
        <Typography variant="h3" fontWeight="bold">
    Welcome
  </Typography>
  <a href="/feedback">
  <Button variant="contained" sx={{ mt: 2 }}>
    give your feed back
  </Button>
  </a>
  <p>your feed back is important to us, so let us server you better next time</p>
    </Box>
  );
};

export default LandingPage;
