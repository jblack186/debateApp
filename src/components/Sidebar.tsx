import React, { useState } from 'react'
import { Container, Image, Box, Link } from '@chakra-ui/react'

export default function Sidebar() {


  const LinkStyle = {
    marginTop: '20px'
  }

  return (
    <Container bg='pink' height='100%' w='100%' display='flex' flexDir='column' alignItems='center' justifyContent='center'>
      <Image w='30%' borderRadius='100px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
      <Box display='flex' flexDir='column' h="40%">
        <Link style={LinkStyle}>Home</Link>
        <Link style={LinkStyle}>Profile</Link>
        <Link style={LinkStyle}>Logout</Link>
      </Box>
    </Container>
  )
}