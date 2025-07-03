import React from 'react';
import './App.css'
import LandingPage from './components/LandingPage';
import { Box } from '@mui/material';

function App() {
 

  return (
    <>
   <Box component="main" sx={{ flexGrow: 1 }}>
  <LandingPage />
</Box>

    </>
  )
}

export default App
