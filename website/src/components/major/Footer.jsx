import React from 'react'
import Rafiki from '../../images/rafiki.png'

import { MdPhone, MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

import { Link } from 'react-router-dom';


const Footer = () => {

  const contact = [
    { icon: MdPhone , info: '+254 712 625 626' },
    { icon: MdEmail , info: 'info@rafikistry.org' },
  ]

  const contactUs = contact.map((item, index) => {
    return(
      <Link key={index} className="cursor-pointer text-muted-foreground hover:underline flex gap-2">
        <item.icon className="my-auto" />
        <div>{item.info}</div>
      </Link>
    );
  })

  const SocialMedia = [
    { icon: FaInstagram, link: 'https://instagram.com/rafikistry' },
    { icon: FaLinkedin, link: 'https://www.linkedin.com/company/rafikistry/' },
    { icon: FaFacebookF, link: 'https://www.facebook.com/profile.php?id=100064561427086' },
    { icon: FaXTwitter , link: 'https://twitter.com/rafikistry'},
  ]

  const socials = SocialMedia.map((item, index) => {
    return(
      <Link key={index} to={item.link} target="_blank"> <item.icon className="hover:text-muted-foreground"/> </Link>
    )
  })

  return (
    <div className="bg-primary w-full">
        <div className="max-w-[1440px] grid lg:flex gap-10 px-10 py-10 justify-between mx-auto">

          <div className="w-[60%] lg:w-[20%] border-2 border-solid border-black">
            <img src={Rafiki} alt="rafikistry logo" className="w-full h-full border-4 bg-black border-black -translate-x-1 -translate-y-1 md:-translate-x-2 md:-translate-y-2 hover:translate-x-0 hover:translate-y-0 transition-all ease-in-out duration-300" />
          </div>

          <div>
            <h5 className="text-2xl font-semibold">Contact Us</h5>

            <div className="my-3">{contactUs}</div>
          </div>

          <div className="text-3xl flex gap-3 my-auto">{socials}</div>
        </div>
    </div>
  )
}

export default Footer