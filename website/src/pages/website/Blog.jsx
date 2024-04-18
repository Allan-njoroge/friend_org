import React, { useEffect } from 'react'
import Navbar from '@/components/major/Navbar'
import Footer from '@/components/major/Footer'
import BlogDetails from '@/sections/website/blog/BlogDetails'


const Blog = () => {

  useEffect(() => {
    document.title = "Blogs - Rafikistry TLC"
  }, [])

  return (
    <div className="bg-secondary" id="blogs">
      <Navbar />
      <div className="mt-14 lg:mt-20">
        <BlogDetails />
        <Footer />
      </div>
    </div>
  )
}

export default Blog