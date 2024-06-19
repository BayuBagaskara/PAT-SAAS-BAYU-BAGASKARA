import React from 'react';
import Header from './components/Header';
import HeroVideoSection from './components/HeroVideoSection';
import ContentSection from './components/ContentSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Card from './components/Card';
import './App.css';
// import from 'react-bootstrap';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroVideoSection />
      <ContentSection />
      <Card/>
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
