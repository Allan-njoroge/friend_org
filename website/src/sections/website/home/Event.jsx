import React, { useRef, useEffect } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Banner from "@/images/banner.jpg";
  

const EventSection = () => {

    const event = [
        {
            image: Banner,
            title: "Thanksgiving and Fundraising Gala",
            date: "10th Dec 2023",
            time: "8:00 AM - 5:00 PM",
            location: "ABC Place, Westlands",
            details: "What Were You Doing When You Were 14? RafikistryTLC Turns 14 This December… We’re #Off2HighSchool And Doing So In Style With A",
            link: "/",
        }, {
            image: Banner,
            title: "Thanksgiving and Fundraising Gala",
            date: "10th Dec 2023",
            time: "8:00 AM - 5:00 PM",
            location: "ABC Place, Westlands",
            details: "What Were You Doing When You Were 14? RafikistryTLC Turns 14 This December… We’re #Off2HighSchool And Doing So In Style With A",
            link: "/",
        }, {
            image: Banner,
            title: "Thanksgiving and Fundraising Gala",
            date: "10th Dec 2023",
            time: "8:00 AM - 5:00 PM",
            location: "ABC Place, Westlands",
            details: "What Were You Doing When You Were 14? RafikistryTLC Turns 14 This December… We’re #Off2HighSchool And Doing So In Style With A",
            link: "/",
        }
    ]

    const carouselRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            carouselRef.current.next();
        }, 1000)
        return () => clearInterval(intervalId);
    }, []);

    const eventCard = event.map((item, index) => {
        return(
            <div key={index}>
                <img src={Banner}/>
                <div className="m-3">
                    <h3>{item.title}</h3>
                    <p>{}</p>
                    <div>
                        <p className="flex gap-2 text-muted-foreground"><FaCalendarAlt />{item.date}</p>
                        <p className="flex gap-2 text-muted-foreground"><IoTime/>{item.time}</p>
                        <p className="flex gap-2 text-muted-foreground"><FaLocationDot />{item.location}</p>
                    </div>
                </div>
            </div>
        )
    })    

  return (
    <div className="max-w-[1440px] flex justify-center mx-auto">
        <div className="mx-10 py-14 md:py-28">
            <h1 className="mb-10 text-center font-semibold text-2xl md:text-3xl lg:text-3xl">Events</h1>
            <div className="grid lg:flex justify-evenly lg:py-10">{eventCard}</div>
            {/* Button Section */}
            <Link className="flex justify-center">
                <Button to={"events/"}>More Events</Button>
            </Link>
        </div>
    </div>
  )
}

export default EventSection