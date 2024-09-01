// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <Router>
      <App />
    </Router>
  </ChakraProvider>
);

