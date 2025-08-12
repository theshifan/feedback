import React from 'react';
import './App.css'
import Signup from './components/Signup';
import Loging from './components/Loging';
import LandingPage from './components/LandingPage';
import Feedback from './components/Feedback';
import ProductList from './components/ProductList';
import FeedbackList from './components/FeedbackList';
import { Box } from '@mui/material';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import axios from 'axios';

const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

function App() {
  return (
  
    <>
    <BrowserRouter>
      <Routes>Signup
        <Route path='/singup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Loging></Loging>}></Route>
        <Route path='/index' element={<LandingPage></LandingPage>}></Route>
        <Route path='/feedback' element={<Feedback></Feedback>}></Route>
        <Route path='/products' element={<ProductList></ProductList>}></Route>
        <Route path='/feedbacklist' element={<FeedbackList></FeedbackList>}></Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
