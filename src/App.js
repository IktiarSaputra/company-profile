import React from 'react'
import Featured from './components/featured/Featured'
import Best from './components/best/Best'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Service from './components/service/Service'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Best />
      <Service />
      <Footer />
    </>
  );
}

export default App;
