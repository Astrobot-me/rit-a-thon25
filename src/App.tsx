import React, { useState } from 'react'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import About from './components/About';
import EventDetails from './components/EventDetail';

function App(): React.ReactNode {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <section className='w-full h-auto' >
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}   />
        <Hero />
        <About />
        <EventDetails/>
      </section>
    </>


  )
}

export default App