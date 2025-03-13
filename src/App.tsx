import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Router>
      <div className={isDark ? 'dark' : ''}>
        <div className="min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-gray-100">
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/competences" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App