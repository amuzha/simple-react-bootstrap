import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './layouts/Header';
import Footer from './layouts/Footer';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

import Config from './Config';

function App() {
  const siteName = Config.siteName;

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem('mode', newMode);
    document.documentElement.setAttribute('data-bs-theme', newMode);
  };
  
  const loadModeFromLocalStorage = () => {
    const storedMode = localStorage.getItem('mode');
    if (storedMode) {
      setMode(storedMode);
      document.documentElement.setAttribute('data-bs-theme', storedMode);
    }
  };
  
  useEffect(() => {
    loadModeFromLocalStorage();
  }, []);
  
  return (
    <div className="app d-flex flex-column min-vh-100">
      <Header
        siteName={siteName}
        mode={mode}
        toggleMode={toggleMode}
      />
      <Routes>
        <Route path="/" element={<Home siteName={siteName} mode={mode} exact />} />
        <Route path="/about" element={<About siteName={siteName} mode={mode} />} />
        <Route path="/gallery" element={<Gallery siteName={siteName} mode={mode} />} />
        <Route path="/projects" element={<Projects siteName={siteName} mode={mode} />} />
        <Route path="/contact" element={<Contact siteName={siteName} mode={mode} />} />
      </Routes>
      <Footer siteName={siteName} />
    </div>
  )
}


export default App;