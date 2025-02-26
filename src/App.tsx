import React, { useState } from 'react'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import About from './components/About';
import EventDetails from './components/EventDetail';
import Categories from './components/Category';

function App(): React.ReactNode {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <section className='w-full h-auto' >
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}   />
        <Hero />
        <About />
        <EventDetails/>
        <Categories/>
      </section>
    </>


  )
}

export default App