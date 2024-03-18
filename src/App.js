import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ComingSoon from './Pages/ComingSoon/ComingSoon';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ComingSoon />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
