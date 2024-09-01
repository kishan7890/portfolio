import React from 'react';
import { Box, Heading, Text,Button,ButtonGroup,Flex,Spacer } from '@chakra-ui/react';

function Home() {
  return (
    <Box p={4} w="75%" m="auto" >
      {/* /intro section start */}
      <Box marginBottom="80px">
        <Box textAlign="center" marginBottom="40px">
          <Heading >Welcome to My Portfolio</Heading>
        </Box>
        <Box display="flex" justifyContent="center" marginBottom="50px">
          <img src="https://th.bing.com/th/id/OIP.t8Q4tkOk9KtyG75YP5M8swHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
        </Box>
        <Box textAlign="center">
          <Text fontSize="35px">Hello , I'am</Text>
          <Text fontSize="50" fontStyle="initial">Kishan Kumar Sahu</Text>
          <Text fontSize="30px">Frontend Developer .</Text>
          <ButtonGroup gap='4'>
            <Button colorScheme='whiteAlpha' > See My Resume </Button>
          </ButtonGroup>
        </Box>
      </Box>
      {/* intro section end */}
      
      {/* about me start */}
      <Box >
        <Flex >
          <Box p={3}>
            <img src="https://i0.wp.com/www.inventiva.co.in/wp-content/uploads/2021/02/download.jpg" alt="" />
          </Box>
          <Spacer />
          <Box p={3} textAlign="center">
            <Heading>About me</Heading>
            <Text>Hello! Myself Kishan Kumar Sahu and I enjoy creating things that live on the internet.
              Enjoys working on dynamic web projects and writing easy-to-read code.

              Fast Forwarding to today, I built several web applications and major projects. Learned a great deal about teamwork, leadership, and communication. After months of rigorous experiences, I’m currently open for a new job opportunity.

              Apart from coding, some other activities that I love to do!   
              <ul>
                <li>Reading Books</li>
              </ul>
              </Text>
          </Box>
        </Flex>
      </Box>
      {/* about me end */}
    </Box>
  );
}

export default Home;