import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import VisaServices from './pages/services/VisaServices';
import WorkPermits from './pages/services/WorkPermits';
import BusinessSetup from './pages/services/BusinessSetup';
import TravelServices from './pages/services/TravelServices';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/visa" element={<VisaServices />} />
          <Route path="/services/work-permits" element={<WorkPermits />} />
          <Route path="/services/business-setup" element={<BusinessSetup />} />
          <Route path="/services/travel" element={<TravelServices />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;