import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ComingSoon from './Pages/ComingSoon/ComingSoon';
import LandingPage from './Pages/LandingPage/LandingPage';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Products from './Pages/Products/Products';
import Industries from './Pages/Industries/Industries';

function App() {


  return (
    <Router >
      <Suspense fallback={<div>Loading...</div>}>
        <Routes >
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/coming" element={<ComingSoon/>} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/industry" element={<Industries />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
