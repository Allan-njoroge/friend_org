import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card"

import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube  } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone, MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";


const ContactInfo = () => {
    const info = [
        { icon: IoLocationOutline, title: "Address", details: "Zimmerman, Nairobi", link: "" },
        { icon: MdOutlineLocalPhone, title: "Phone Number", details: "+254 712 625 626", link: "" },
        { icon: MdOutlineEmail, title: "Email", details: "info@rafikistry.org", link: "" },
        { icon: CiLinkedin, title: "LinkedIn", details: "Rafikistry TLC", link: "https://www.linkedin.com/company/rafikistry/" },
        { icon: FaInstagram, title: "Instagram", details: "rafikistry" , link: "https://www.instagram.com/rafikistry"},
        { icon: FaFacebookF, title: "Facebook", details: "rafikistry", link: "https://www.facebook.com/rafikistry" },
        { icon: FaXTwitter, title: "Twitter", details: "rafikistry", link: "https://twitter.com/rafikistry" },
        { icon: FaYoutube, title: "YouTube", details: "Rafikistry TLC", link: "https://www.youtube.com/@rafikistrytlc9134" },
    ]

    const infoCard = info.map((item, index) => {
        const Icon = item.icon;

        return(
            <div className="bg-black" data-aos="fade-up" data-aos-duration="1000">
                <Card key={index} className="flex pl-3 transition-all duration-300 rounded-none border-2 border-black -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 hover:bg-primary">
                    <Icon className="my-auto text-5xl" />
                    <div>
                        <CardHeader>
                            <CardTitle>{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <a href={item.link}className="text-gray-500 hover:underline" >{item.details}</a>
                        </CardContent>
                    </div>
                </Card>
            </div>
        )
    })

  return (
    <div className="max-w-[1440px] flex justify-center mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 lg:mx-5 my-10">{infoCard}</div>
    </div>
  )
}

export default ContactInfo