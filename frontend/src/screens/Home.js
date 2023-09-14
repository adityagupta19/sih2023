import React from 'react'
import { Hero } from '../components/Hero'
import Eventslist from '../components/Eventslist'
import About from '../components/About'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Eventslist/>
        <About/>
    </div>
  )
}

export default Home