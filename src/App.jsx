import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Articles from './components/Articles/Articles';
import Talk from './components/Talk/Talk'
import Hero from './components/hero/Hero'
import './App.css';

function App() {
  

  return (
    <>
      <Navbar /> 
      <Hero />
      <About />
      <Articles />
      <Talk />
      <Footer />
    </>
  );
}

export default App;
