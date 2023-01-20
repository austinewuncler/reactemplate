import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components';
import './index.css';

const rootEl = document.getElementById('root') as HTMLElement;
const root = createRoot(rootEl);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
