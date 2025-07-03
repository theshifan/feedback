import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const ProductList = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace this with API call if needed
    const tempProducts = [
      { id: 1, name: 'Donut Bun' },
      { id: 2, name: 'Burger' },
      { id: 3, name: 'Pizza Slice' },
    ];
    setProducts(tempProducts);
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ height: '100vh' }}>
      {/* ----------------Top App Bar------------*/}
       <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>

          
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <a href="/Index" style={{ textDecoration: 'none', color: 'inherit' }}>
           <MenuItem onClick={handleMenuClose}>Index</MenuItem>
          </a>
          <a href="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem onClick={handleMenuClose}>List of Products</MenuItem>
          </a>
          <a href="/feedback" style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem onClick={handleMenuClose}>Give Your Feedback</MenuItem>
          </a>
          <a href="/feedbacks" style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem onClick={handleMenuClose}>feedbacks</MenuItem>
          </a>
            </Menu>

          <Typography variant="h6" sx={{ ml: 2 }}>
            Feedback App
          </Typography>
        </Toolbar>
      </AppBar>
      {/* -------------top bar-------------- */}

      {/* --------------Main Content--------- */}
      <Box
        sx={{
          pt: 12,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Product List
        </Typography>

        <Paper elevation={3} sx={{ p: 2, width: 400 }}>
          <List>
            {products.map((product) => (
              <ListItem key={product.id}>
                <ListItemText primary={product.name} secondary={`ID: ${product.id}`} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
      {/*------------- main container ends -----------------*/}
    </Box>
  );
};

export default ProductList;
