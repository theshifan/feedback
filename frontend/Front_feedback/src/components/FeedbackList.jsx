// FeedbackList.jsx
import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Rating,
  AppBar,
  Toolbar,
  IconButton,
  Menu
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const getfeedbacks =() =>{
    axios.get('http://127.0.0.1:8000/main/feedback/')
    .then ((response) =>{
      console.log(response.data)
      setFeedbacks(response.data)
    })
    .catch((error) =>{
      console.log(error)
    })

  }

  
   const getproduct =() =>{
    axios.get('http://127.0.0.1:8000/main/products/')
    .then ((response) =>{
      console.log(response.data)
      setProducts(response.data)
    })
    .catch((error) =>{
      console.log(error)
    })

  }

   
  const getcategory =() =>{
    axios.get('http://127.0.0.1:8000/main/categories/')
    .then ((response) =>{
      console.log(response.data)
      setCategories(response.data)
    })
    .catch((error) =>{
      console.log(error)
    })

  }
  useEffect(() =>{
    getproduct()
    getcategory()
    getfeedbacks()
  },[])

//   to filter the category 
  const filteredFeedbacks = selectedCategory
  ? feedbacks.filter((fb) => fb.category?.id === selectedCategory)
  : feedbacks;


// to get the catogary name from the id
  const getCategoryName = (id) => {
    const category = categories.find((cat) => cat.id === id);
    return category ? category.name : 'Unknown Category';
  };
//  to get the product name fro id
  const getProductName = (id) => {
    const product = products.find((prod) => prod.id === id);
    return product ? product.name : 'Unknown Product';
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      {/* -------------------Top Navigation Bar---------- */}
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>

          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <a href="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem onClick={handleMenuClose}>List of Products</MenuItem>
            </a>
            <a href="/feedback" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem onClick={handleMenuClose}>Give Your Feedback</MenuItem>
            </a>
            <a href="/Index" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem onClick={handleMenuClose}>Index</MenuItem>
            </a>
            <a href="/feedbacklist" style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem onClick={handleMenuClose}>feedbacks</MenuItem>
            </a>
          </Menu>

          <Typography variant="h6" sx={{ ml: 2 }}>
            Feedback App
          </Typography>
        </Toolbar>
      </AppBar>

      
      <Toolbar />

      {/*--------------- Category Filter part---------- */}
      <Box sx={{ m: 3, maxWidth: 300 }}>
        <FormControl fullWidth>
          <InputLabel id="category-filter-label">Filter by Category</InputLabel>
          <Select
            labelId="category-filter-label"
            value={selectedCategory}
            label="Filter by Category"
            onChange={(e) => setSelectedCategory(
              e.target.value === '' ? '' : parseInt(e.target.value)
            )}
          >
            <MenuItem value=''>All</MenuItem>
            {categories.map((cat) => (
              <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* ------------------Feedback List -------------*/}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, p: 3 }}>
        {filteredFeedbacks.map((fb) => (
          <Card key={fb.id} sx={{ width: 300 }}>
            <CardContent>
                {/*------------ content ------------- */}
              <Typography variant="h6">{fb.name}</Typography>
              <Typography variant="body2" color="text.secondary">{fb.email}</Typography>
              <Typography sx={{ my: 1 }}>{fb.feedback}</Typography>
              <Rating value={parseInt(fb.rating)} readOnly />
              <Typography variant="caption">Product: {fb.products?.name}</Typography><br />
              <Typography variant="caption">Category: {fb.category?.name}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default FeedbackList;
