// @ts-check

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom';

import './styles/variables.css';
import './styles/reset.css';

import App from './App.jsx';

const root = document.getElementById('root');

if (root == null) throw new Error("`root` not present!");

createRoot(root).render(
  <StrictMode>
    <BrowserRouter basename="/DevGuild-Website">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
