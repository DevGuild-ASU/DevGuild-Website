// @ts-check

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router';

import Nav from './pages/Nav.jsx';
import App from './App.jsx';
import Footer from './pages/Footer.jsx';

const root = document.getElementById('root');

if (root == null) throw new Error("`root` not present!");

createRoot(root).render(
  <StrictMode>
    <BrowserRouter basename='/my-app'>
      <Nav />
      <App />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
