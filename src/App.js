import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newletter from './components/Newletter';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Marry from './components/Marry';
import Step from './components/Step';



function App() {
  return(
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Marry/>
      <Step/>
      <Newletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;