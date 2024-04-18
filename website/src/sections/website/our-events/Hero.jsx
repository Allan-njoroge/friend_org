import React from 'react'
import Image from '@/images/banner.jpg'

import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { Button } from '@/components/ui/button';

import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="max-w-[1440px] flex justify-center mx-auto py-10 md:py-14 lg:py-20">
        <div className="mx-5 lg:mx-10 w-full">
            <h1 className="text-3xl lg:text-4xl text-left font-semibold ml-3 md:ml-0 mb-10" data-aos="fade-up" data-aos-duration="1000">Upcoming Events</h1>
            {/* Event Details */}
            <div className="bg-muted-foreground mx-5" data-aos="fade-up" data-aos-duration="1000">
            <div className="flex flex-col md:flex-row gap-10 p-6 border bg-secondary border-black -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 transition-all ease-in-out duration-500 hover:bg-primary">
              {/* Image */}
              <div className="w-[200px] md:w-[1000px] my-auto mx-auto h-full">
                <img src={ Image } alt="" className="rounded-full w-full h-full" />
              </div>
              {/* Text Details */}
              <div className="lg:flex-9">
                {/* time, date and location */}
                <div className="md:flex gap-10 text-sm">
                  <p className="flex gap-2 my-auto text-muted-foreground"><FaCalendarAlt className="my-auto" /> APR-10-2022</p>
                  <p className="flex gap-2 my-auto text-muted-foreground"><FaLocationDot className="my-auto" /> Virtual</p>
                  <p className="flex gap-2 my-auto text-muted-foreground"><IoTime className="my-auto" /> 8:00AM-10:00PM</p>
                </div>
                {/* Title */}
                <Link to={'events/single-event'}>
                <h3 className="my-5 text-md md:text-xl uppercase font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, similique.</h3>
                </Link>
                {/* Paragraph Details */}
                <p className="mb-5 text-muted-foreground overflow-hidden text-overflow-ellipsis line-clamp-3 box-orient-vertical text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt debitis, reprehenderit assumenda quaerat pariatur temporibus perferendis perspiciatis cum eos alias. Ipsum suscipit sit blanditiis voluptates veritatis laborum, dolorem ad dolor minima quibusdam, placeat aut esse tempora quia harum soluta illo quaerat. Itaque voluptatem praesentium veniam in dicta consequatur numquam soluta vero tempore! Eos quas, fugiat ipsum mollitia aperiam ad nemo, exercitationem aliquid reiciendis veritatis beatae tempore nulla incidunt tenetur similique commodi necessitatibus nihil delectus quis atque recusandae cumque dolores nesciunt? Amet, velit eum aut ipsum a officia? Tempore, culpa deserunt eligendi et temporibus suscipit velit, nihil dolorum voluptates ducimus distinctio?
                </p>
                <Link to={`/events/single-event`}>
                <Button className="rounded-none border border-black hover:bg-secondary transition-all ease-in-out duration-500">View Details</Button>
                </Link>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Header;