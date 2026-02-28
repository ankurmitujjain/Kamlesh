import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import Patients from './pages/Patients';
import Thyroid from './pages/services/Thyroid';
import Vascular from './pages/services/Vascular';
import Stroke from './pages/services/Stroke';
import Venous from './pages/services/Venous';
import Fibroid from './pages/services/Fibroid';
import Prostate from './pages/services/Prostate';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="patients" element={<Patients />} />
            <Route path="services/thyroid" element={<Thyroid />} />
            <Route path="services/vascular" element={<Vascular />} />
            <Route path="services/stroke" element={<Stroke />} />
            <Route path="services/venous" element={<Venous />} />
            <Route path="services/fibroid" element={<Fibroid />} />
            <Route path="services/prostate" element={<Prostate />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
