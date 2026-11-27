import { BrowserRouter, Route, Routes } from 'react-router';
import ThemeProvider from './providers/ThemeProvider';
import FiltersProvider from './providers/FiltersProvider';
import AppLayout from './components/layout/AppLayout';
import HomePage from './pages/HomePage';
import EarthquakePage from './pages/EarthquakePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <FiltersProvider>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<HomePage />} />
              <Route path="earthquake/:id" element={<EarthquakePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </FiltersProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
