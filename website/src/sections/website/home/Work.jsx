import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const OurWork = () => {
  return (
    <div className="max-w-[1440px] flex w-full justify-center mx-auto">
      <div
        className="mx-5 my-8 py-14 md:py-28"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1 className="text-center font-semibold text-2xl md:text-3xl lg:text-3xl text-primary">
          What We Do
        </h1>
        <p
          className="my-8 lg:my-12 text-left lg:mx-32 text-sm text-gray-300"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          Rafiki Multipliers Of Information Initiative (Rafikistry) trains,
          equips, mentors and empowers teenagers and young adults between the
          ages of 12 and 21 years preparing and walking them through life’s
          crucial transitions. Through proper guidance and exemplary leadership,
          Rafikistry assists beneficiaries in developing character, life skills,
          healthy behaviour and having a sense of purpose.
          <br />
          <br />
          We believe in nurturing individual who are empowered to make a
          positive imapact in their communities and the world.In all that we do
          we strive to create a culture of inclusivity and empathy, where
          everyone feels valued and supported in their journey.
        </p>
        <Link
          to={"/our-work"}
          className="flex justify-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Button
            className="rounded-none bg-primary flex p-0 hover:bg-primary"
          >
            <div className="flex w-full h-full text-primary bg-black p-4 items-center -translate-x-1 -translate-y-1 border border-primary hover:translate-x-0 hover:translate-y-0 transition-all ease-in-out duration-300">
              Learn More
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OurWork;
