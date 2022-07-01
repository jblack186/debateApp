import React from "react";
import { Input, Button, Link } from '@chakra-ui/react'
import { Container, Text, Box } from "@chakra-ui/layout";


const DashInfo = () => {

  return (
    <Container bg='blue' h='100%' w='30%' display='flex' flexDir='column' alignItems='center' justifyContent='space-around'>
      <Box h='10%'>
        <Text>Current Rooms</Text>
      </Box>
      <Box maxW='80%' display='flex' flexDir='column' alignItems='center' justifyContent='space-around' h='40%'>
        <Text w='100%' textAlign='left'>Debates</Text>
        <Input w='100%' maxH='40px' />
        <Link padding='10px' bg='white'>Roe V Wade: jblack186, johnDoe123, janeSmith324, .....</Link>
      </Box>

    </Container>
  )
}

export default DashInfo;