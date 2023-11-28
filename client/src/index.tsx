import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import enTranslation from 'locales/en.json';
import deTranslation from 'locales/de.json';
import configs from 'project.config.json';
import { store } from './store/store';
import App from './App';
import theme from './styles/theme';
import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    de: { translation: deTranslation },
  },
  lng: configs.DEFAULT_LANGUAGE_CODE_SHORT,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
