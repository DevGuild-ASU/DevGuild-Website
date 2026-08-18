// @ts-check

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router';

import Nav from './pages/Nav.jsx';
import App from './App.jsx';

const root = document.getElementById('root');

if (root == null) throw new Error("`root` not present!");

createRoot(root).render(
  <StrictMode>
    <BrowserRouter basename='/my-app'>
      <Nav />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
