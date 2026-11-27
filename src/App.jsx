import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router';
import { store } from './store';
import AppLayout from './components/layout/AppLayout';
import HomePage from './pages/HomePage';
import EarthquakePage from './pages/EarthquakePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="earthquake/:id" element={<EarthquakePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
