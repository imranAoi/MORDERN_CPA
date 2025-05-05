import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

import ServicesSlider from './components/ServiceSlider';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div style={{ fontFamily: "'League Spartan', sans-serif" }} className=''>
      <Header/>
      <Home/>
      <About/>
      <Testimonials/>
      <ServicesSlider/>
      <Footer/>
    </div>
  );
}

export default App;