import React from 'react'
import About from '@/images/banner.jpg'

const WhyTLC = () => {
  return (
    <div className="max-w-[1440px] flex justify-center w-full mx-auto items-center py-10 lg:py-20">
        {/* Why TLC Section */}
        <div className="mx-5 lg:mx-10 py-10 flex flex-col-reverse lg:flex-row">
            {/* Image Section */}
          <div className="w-full lg:w-[45%] h-[400px] lg:h-[500px] mt-10 lg:mt-0 bg-black" data-aos="fade-right" data-aos-duration="1000">
            <img src={ About } alt="" className="w-full h-full -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 transition-all ease-in-out duration-300 border-2 border-black" />
          </div>

            <div className="lg:pl-10 my-auto" data-aos="fade-left" data-aos-duration="1000">
                <h1 className="mb-10 lg:text-left text-center font-semibold text-3xl">Why TLC?</h1>

                <p className="text-left">
                    Rafikistry is a Teen Life Centre with Tender Loving Care, where we Trounce, Learn and Chillax!
                    <br/><br/>
                    At Rafikistry we <b>engage, equip</b> and <b>envision</b> generations of <b>competent, confident</b> and <b>content</b> individuals who are empowered to make a positive impact in their communities and the world
                </p>
            </div>
        </div>
    </div>
  )
}

export default WhyTLC