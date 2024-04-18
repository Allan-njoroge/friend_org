import React from 'react'
import About from '@/images/banner.jpg'

const header = () => {
  return (
    <div className="max-w-[1440px] flex justify-center w-full mx-auto items-center">
        <div className="mx-5 lg:mx-10 py-10">
            {/* Who are We */}
            <div className="grid lg:flex justify-evenly">
                <div className="my-auto lg:pr-14" data-aos="fade-right" data-aos-duration="1200">
                    <h1 className="mb-10 text-center lg:text-left font-semibold text-3xl">Who are We?</h1>
                    <p>
                        As the name suggests, Rafikistry TLC is all about Friendships! <b>‘Rafiki’</b> is the Kiswahili word for <b>‘friend’</b>. A friend is one who gives help and support.
                        <br/><br/>
                        We exist to provide and increase information and skills on physical, mental, social, sexual and reproductive health as components of holistic wellbeing.
                        <br/><br/>
                        For more than 10 years, Rafikistry has continued to provide services in a confidential and non-judgemental environment free from discrimination, coercion and violence.
                    </p>
                </div>
                
                {/* Image Section */}
                <div className="w-full lg:w-[45%] h-[400px] lg:h-[500px] mt-10 lg:mt-0 bg-black" data-aos="fade-left" data-aos-duration="1200">
                <img src={ About } alt="" className="mx-auto w-full h-full border-2 border-black -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 trasition-all ease-in- out duration-500" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default header