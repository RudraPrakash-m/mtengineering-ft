import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './i18n/LanguageContext';
import AppRoutes from './routes/AppRoutes';
import ArchitecturalLoader from './components/shared/ArchitecturalLoader';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <LanguageProvider>
          <ArchitecturalLoader />
          <AppRoutes />
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

