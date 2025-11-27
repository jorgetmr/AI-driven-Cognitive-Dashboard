import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Index from './pages/Index';
import Puzzles from './pages/Puzzles';
import Learn from './pages/Learn';
import Reflection from './pages/Reflection';
import Wellness from './pages/Wellness';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/puzzles" element={<Puzzles />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/reflection" element={<Reflection />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;