import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './Layout.jsx';
import { HashRouter } from 'react-router-dom';  // <- Add this

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Layout />
    </HashRouter>
  </StrictMode>
)