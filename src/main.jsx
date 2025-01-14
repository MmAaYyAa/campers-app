import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from './styles/globalStyles.js';
import App from './components/App.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <GlobalStyles />
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
);
