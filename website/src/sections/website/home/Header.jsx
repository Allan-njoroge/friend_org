import React from "react";
import Image from "@/images/banner.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="max-w-[1440px] flex justify-center w-full mx-auto items-center">
      <div className="mx-5 lg:mx-10 py-20">
        {/* Who are We */}
        <div className="grid md:flex justify-evenly">
          <div
            className="my-auto md:pr-6 lg:pr-14"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="mb-8 text-left font-semibold text-3xl lg:text-5xl text-black">
              Welcome To Rafikistry
            </h1>

            <p className="text-left text-muted-foreground text-xl">
              Engaging, equipping and envisioning generations of{" "}
              <b>competent, confident</b> and <b> content</b> teens and young
              adults
            </p>

            <Link to={"/about-us"} className="hidden md:block">
              <Button
                className="my-10 text-left rounded-none bg-black flex p-0 hover:bg-black"
              >
                <div className="flex w-full h-full bg-primary p-4 items-center -translate-x-1 -translate-y-1 border border-black hover:translate-x-0 hover:translate-y-0 transition-all ease-in-out duration-300">
                  Learn More
                </div>
              </Button>
            </Link>
          </div>

          {/* Image Section */}
          <div
            className="w-full lg:w-[45%] h-[400px] lg:h-[500px] mt-20 lg:mt-0 bg-black mx-auto flex justify-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img
              src={Image}
              alt=""
              className="mx-auto w-full h-full border-2 border-black -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 trasition-all ease-in- out duration-500"
            />
          </div>

          <Link className="md:hidden mx-auto">
            <Button
              className="my-10 text-left rounded-none bg-black flex p-0 hover:bg-black"
            >
              <div className="flex w-full h-full bg-primary p-4 items-center -translate-x-1 -translate-y-1 border border-black hover:translate-x-0 hover:translate-y-0 transition-all ease-in-out duration-300">
                Learn More
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
