import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { FaRegEnvelope } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="max-w-[1440px] flex justify-center mx-auto">
        <div className="w-full mx-5 lg:mx-10" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="my-10 font-semibold text-3xl lg:text-4xl text-center">Reach Out To Us</h1>
            
            <p className="text-center text-xl my-10">
                The Home Of Real Friends Living A Reak Life While Helping Each Other Unleash The Real & Complete You.
            </p>

            <form action="" method="POST" className="md:w-[60%] mx-auto my-10">
                <div className="lg:flex gap-3 my-2">
                    <Input placeholder="Your Name" className="my-3 lg:my-0 border border-black rounded-none" /> 
                    <Input placeholder="Your Email" className="border border-black rounded-none" />
                </div>
                <Input placeholder="Subject" className="border border-black my-2 rounded-none" />
                <Textarea placeholder="Message" rows="10" className="border-black rounded-none mb-5" />
                <Button type="submit" className="my-3 mx-auto text-center rounded-none bg-black flex p-0 hover:bg-black">
                    <div className="flex w-full h-full bg-primary p-4 items-center -translate-x-1 -translate-y-1 border border-black hover:translate-x-0 hover:translate-y-0 transition-all ease-in-out duration-300">
                            <FaRegEnvelope className="text-xl mr-3" /> 
                            Send Message
                    </div>
                </Button>
            </form>
        </div>
    </div>
  )
}

export default Header