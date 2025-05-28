import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import NotFoundPage from './layouts/404Page';

import Home from './pages/Home';
import About from './pages/About';
import ServiceRates from './pages/Services_Rates';
import Login from './components/Login';
import BacktestPage from './pages/Backtest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service-rates" element={<ServiceRates />} />
          <Route path="/backtest" element={<BacktestPage />} /> {/* ✅ Này phải có */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
