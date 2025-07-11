import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
  TextField,
  Button,
  MenuItem as MuiMenuItem,
  Rating,
  Paper,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios'
const Feedback = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product_id: '',
    category_id: '',
    feedback: '',
    rating: 0,
  });

  useEffect(() => {
    // API calls here
    setProducts([
      { id: 1, name: 'Donut Bun' },
      { id: 2, name: 'Burger' },
    ]);

    setCategories([
      { id: 1, name: 'Quality' },
      { id: 2, name: 'Delivery' },
    ]);
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [product,setProduct] = useState([])
  const getproduct =() =>{
    axios.get('http://127.0.0.1:8000/main/products/')
    .then ((response) =>{
      console.log(response.data)
      setProduct(response.data)
    })
    .catch((error) =>{
      console.log(error)
    })

  }

   const [categorie,setCategorie] = useState([])
  const getcategory =() =>{
    axios.get('http://127.0.0.1:8000/main/categories/')
    .then ((response) =>{
      console.log(response.data)
      setCategorie(response.data)
    })
    .catch((error) =>{
      console.log(error)
    })

  }
  useEffect(() =>{
    getproduct()
    getcategory()
  },[])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (_, value) => {
    setFormData({ ...formData, rating: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    axios.post('http://127.0.0.1:8000/main/feedback/',formData)
    .then ((response) =>{
      console.log(response.data)
    })
    .catch((error) =>{
      console.log(error)
    })

    // send this data to your backend
  };

  return (
    <Box sx={{ height: '100vh' }}>
      {/*-------------- Top App Bar -------------*/}
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
      {/* -------top bar ends-------- */}

      {/*------------ Main Content-------------- */}
      <Box
        sx={{
          pt: 12,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: 500 }}>
          <Typography variant="h5" fontWeight="bold" align="center" gutterBottom>
            Submit Your Feedback
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              fullWidth
              margin="normal"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              label="Email"
              name="email"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleChange}
            />
            
            <TextField
              label="Product"
              name="product_id"
              fullWidth
              select
              margin="normal"
              value={formData.product_id}
              onChange={handleChange}
            >
              {product.map((pdt) => (
                <MuiMenuItem key={pdt.id} value={pdt.id}>
                  {pdt.name}
                </MuiMenuItem>
              ))}
            </TextField>

            <TextField
              label="Category"
              name="category_id"
              fullWidth
              select
              margin="normal"
              value={formData.category_id}
              onChange={handleChange}
            >
              {categorie.map((cat) => (
                <MuiMenuItem key={cat.id} value={cat.id}>
                  {cat.name}
                </MuiMenuItem>
              ))}
            </TextField>

            <TextField
              label="Feedback"
              name="feedback"
              fullWidth
              multiline
              rows={4}
              margin="normal"
              value={formData.feedback}
              onChange={handleChange}
            />
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography>Rating</Typography>
              <Rating value={formData.rating} onChange={handleRatingChange} />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3 }} 
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Box>
      {/* -----------main content ends-------------- */}
    </Box>
  );
};

export default Feedback;
