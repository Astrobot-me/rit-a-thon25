import React, { useState } from 'react'
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import About from './components/About';
import EventDetails from './components/EventDetail';
import Categories from './components/Category';
import Rules from './components/RulesSection';
import Judging from './components/JudgingCriteria';
import FaqSection from './components/FrequentQuestions';
import CarouselComponent from './components/CarouselComponent';
import Coordinators from './components/Cordinators';
import Contact from './components/ContactUs';
import Footer from './components/Footer';

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
        <Rules/>  
        <Judging/>
        <CarouselComponent/>
        <FaqSection/>
        <Coordinators/>
        <Contact/>
        <Footer/>
      </section>
    </>


  )
}

export default App