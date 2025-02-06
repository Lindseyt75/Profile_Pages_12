import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '.src/components/Header';
import Footer from '.src/components/Footer';
import AboutMe from '.src/pages/AboutMe';
import Portfolio from '.src/pages/Portfolio';
import Contact from '.src/pages/Contact';
import Resume from '.src/pages/Resume';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<AboutMe />} /> {/* Default route */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
