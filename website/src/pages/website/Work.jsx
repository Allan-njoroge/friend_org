import React, { useEffect } from "react";
import Header from "@/sections/website/work/Header";
import Navbar from "@/components/major/Navbar";
import Footer from "@/components/major/Footer";

const Work = () => {
  useEffect(() => {
    document.title = "Our Work - Rafikistry TLC";
  }, []);

  return (
    <div className="bg-secondary" id="our-work">
      <Navbar />
      <div className="mt-14 lg:mt-20">
        <Header />
        <Footer />
      </div>
    </div>
  );
};

export default Work;
