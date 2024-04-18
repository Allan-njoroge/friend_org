import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "@/images/banner.jpg";

import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { Input } from "@/components/ui/input";

const Event = () => {
  return (
    <div
      className="max-w-[1440px] flex justify-center mx-auto"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="w-full mx-5 lg:w-3/4 lg:mx-0 my-10 md:my-14 lg:my-20">
        {/* Event Image */}
        <div className="w-full bg-cover">
          <img
            src={Image}
            alt=""
            className="w-full h-[300px] object-cover rounded-sm"
          />
        </div>
        {/* Event Details */}
        <div className="flex flex-col gap-5 py-10 px-5">
          <h1 className="uppercase text-md md:text-xl lg:text-2xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, in.
          </h1>
          <div>
            <p className="flex gap-2 my-auto text-muted-foreground text-sm md:text-md">
              <FaCalendarAlt className="my-auto" /> April 6 2024
            </p>
            <p className="flex gap-2 my-auto text-muted-foreground text-sm md:text-md">
              <FaLocationDot className="my-auto" /> Virtual
            </p>
            <p className="flex gap-2 my-auto text-muted-foreground text-sm md:text-md">
              <IoTime className="my-auto" /> 8:00AM - 10:00AM
            </p>
          </div>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quam
            mollitia harum amet autem, recusandae eos iste quas? Deserunt culpa
            eaque atque autem sequi iste quae ad in error delectus cum vel
            ducimus ea quibusdam labore facilis nisi fugit nulla, enim ex
            quisquam tenetur laborum adipisci! Quo numquam explicabo aut!
          </p>

          <Dialog>
            <DialogTrigger>
              <Button className="w-1/2 md:w-1/4 mx-auto mt-2 rounded-none border border-black hover:bg-transparent transiton-all ease-in-out duration-500">
                Register
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>REGISTRATION FORM</DialogTitle>
                <DialogDescription>
                  <form action="" className="flex flex-col gap-10 my-10">
                    <div className="relative">
                        <label className="absolute -top-[10px] left-3 bg-secondary text-black" for="name">Full Name</label>
                        <Input id="name" required />
                    </div>
                    <div className="relative">
                        <label className="absolute -top-[10px] left-3 bg-secondary text-black" for="name">Email Address</label>
                        <Input id="name" required />
                    </div>
                    <div className="relative">
                        <label className="absolute -top-[10px] left-3 bg-secondary text-black" for="name">Phone Number</label>
                        <Input id="name" required />
                    </div>
                    <Button type="submit" className="w-1/2 md:w-1/4 mx-auto rounded-none border border-black hover:bg-transparent transiton-all ease-in-out duration-500">Submit</Button>
                  </form>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Event;
