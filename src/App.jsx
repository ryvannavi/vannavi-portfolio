import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const PAGES = {
  home: { title: 'Vannavi Ry — Web Developer & Designer' },
  about: { title: 'About — Vannavi Ry' },
  skills: { title: 'Skills — Vannavi Ry' },
  project: { title: 'Projects — Vannavi Ry' },
  experience: { title: 'Experience — Vannavi Ry' },
  contact: { title: 'Contact — Vannavi Ry' },
};

function readHash() {
  const raw = window.location.hash.replace('#', '').trim();

  if (raw === 'certification') {
    return { page: 'experience', tab: 'certification' };
  }

  if (PAGES[raw]) {
    return { page: raw, tab: raw === 'experience' ? 'resume' : null };
  }

  return { page: 'home', tab: null };
}

function App() {
  const initial = readHash();
  const [currentPage, setCurrentPage] = useState(initial.page);
  const [experienceTab, setExperienceTab] = useState(initial.tab || 'resume');

  useEffect(() => {
    const syncFromHash = () => {
      const { page, tab } = readHash();
      setCurrentPage(page);
      if (tab) setExperienceTab(tab);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  useEffect(() => {
    document.title = PAGES[currentPage] ? PAGES[currentPage].title : PAGES.home.title;
  }, [currentPage]);

  const handleNavigate = (page, tab = null) => {
    const hash = tab === 'certification' ? 'certification' : page;

    if (window.location.hash.replace('#', '') === hash) {
      setCurrentPage(page);
      if (tab) setExperienceTab(tab);
      window.scrollTo(0, 0);
      return;
    }

    window.location.hash = hash;
  };

  const handleTabChange = (tab) => {
    setExperienceTab(tab);
    const hash = tab === 'certification' ? 'certification' : 'experience';
    if (window.location.hash.replace('#', '') !== hash) {
      window.history.replaceState(null, '', '#' + hash);
    }
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
        return <Experience initialTab={experienceTab} onTabChange={handleTabChange} />;
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
