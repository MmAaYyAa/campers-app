import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store,  persistor} from './redux/store.js';
import GlobalStyles from './styles/globalStyles.js';
import App from './components/App.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
 <BrowserRouter >
    <GlobalStyles />
  <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </StrictMode>
  </BrowserRouter>
  </PersistGate>
  </Provider>
);
