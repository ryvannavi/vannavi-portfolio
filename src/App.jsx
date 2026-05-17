import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [experienceTab, setExperienceTab] = useState('resume');

  const handleNavigate = (page, tab = null) => {
    setCurrentPage(page);
    if (tab) {
      setExperienceTab(tab);
    }
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'project':
        return <Project />;
      case 'experience':
        return <Experience initialTab={experienceTab} onTabChange={setExperienceTab} />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="app">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
