import React from 'react';
import './App.css'
import LandingPage from './components/LandingPage';
import Feedback from './components/Feedback';
import ProductList from './components/ProductList';
import FeedbackList from './components/FeedbackList';
import { Box } from '@mui/material';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
  
    <>
    <BrowserRouter>
      <Routes>
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
