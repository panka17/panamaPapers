import React from 'react'
import About from '../About/About';
import Header from '../Header/Header';
import Features from '../Features/Features';
import {Footer } from '../../components'

const Home = () => {
  return (
    <div>
        <Header />
        <About />
        <Features />
        <Footer />
        
    </div>
  )
}

export default Home