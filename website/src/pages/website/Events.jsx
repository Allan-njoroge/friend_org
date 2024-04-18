import { useEffect } from 'react'
import Navbar from '@/components/major/Navbar'
import Footer from '@/components/major/Footer'
import Header from '@/sections/website/our-events/Hero'


const Events = () => {

  useEffect(() => {
    document.title = "Events - Raikistry TLC"
  },[])

  return (
    <div className="bg-secondary" id="events">
      <Navbar />
      <div className="mt-14 lg:mt-20">
        <Header />
        <Footer />
      </div>
    </div>
  )
}

export default Events