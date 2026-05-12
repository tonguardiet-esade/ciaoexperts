import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import PortfolioIndex from './PortfolioIndex.tsx';
import DesignProHero from './pages/DesignProHero.tsx';
import './index.css';
import './i18n/i18n';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/designpro" element={<DesignProHero />} />
      <Route path="/portfolio" element={<PortfolioIndex />} />
      <Route path="/*" element={<App />} />
    </Routes>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
);
