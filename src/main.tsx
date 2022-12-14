import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './style.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider>
    <BrowserRouter>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </BrowserRouter>
  </ChakraProvider>
)
