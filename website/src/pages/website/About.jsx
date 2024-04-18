import React, { useEffect } from 'react'
import Header from '@/sections/website/about/Header'
import Navbar from '@/components/major/Navbar'
import Footer from '@/components/major/Footer'
import WhyTLC from '@/sections/website/about/WhyTLC'

const About = () => {
  
  useEffect(() => {
    document.title = "About Us - Rafikistry TLC"
  }, [])

  return (
    <div className="bg-secondary" id="about-us">
      <Navbar />
      <div className="mt-14 lg:mt-20">
        <Header />
        <WhyTLC />
        <Footer />
      </div>
      
    </div>
  )
}

export default About