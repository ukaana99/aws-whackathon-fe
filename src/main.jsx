import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


import App from '@/App';
import { LayoutProvider } from '@/providers/Layout';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
          <LayoutProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </LayoutProvider>
  </React.StrictMode>,
);
