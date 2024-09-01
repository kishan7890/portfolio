// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Button, useColorMode } from '@chakra-ui/react';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg="teal.500" p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
            <h1> Kishan</h1>
        </Box>
        <Box>
          <Link to="/">Home</Link>
        </Box>
        <Flex gap={4}>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
