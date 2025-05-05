import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';


import Testimonials from './components/Testimonials';
import ServicesSection from './components/ServicesSection';


function App() {
  return (
    <div style={{ fontFamily: "'League Spartan', sans-serif" }} className=''>
      <Header/>
      <Home/>
      <About/>
      <ServicesSection/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;