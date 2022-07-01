import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Dashboard from './Pages/Dashboard';
import { Container, Image, Box, Link } from '@chakra-ui/react'
import Profile from './Pages/Profile';

function App() {
  return (
    <Container h='98vh' display='flex' justifyContent='center' alignItems='center'>
      <Box h='100%' w='20%'>
        <Sidebar />
      </Box>
      <Box bg='whitesmoke' w='80%' h='100%'>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default App;

