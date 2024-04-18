import React, { useEffect } from 'react'
import Navbar from '@/components/major/Navbar'
import Footer from "@/components/major/Footer"
import Header from '@/sections/website/contact/Hero'
import ContactInfo from '@/sections/website/contact/Info'


const Contact = () => {
    useEffect(() => {
      document.title = "Contact Us - Rafikistry TLC"
    }, []);

  return (
    <div className="bg-gray-100" id="contact">
      <Navbar />
      <div className="mt-14 lg:mt-20">
        <Header />
        <ContactInfo />
        <Footer />
      </div>
    </div>
  )
}

export default Contact