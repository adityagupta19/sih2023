import React from 'react'
import { Hero } from '../components/Hero'
import Eventslist from '../components/Eventslist'
import About from '../components/About'
import Sponsor from '../components/sponsor'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Eventslist/>
        <About/>
        <Testimonials/>
        <Sponsor/>
        <Footer/>
    </div>
  )
}

export default Home