import React, { useEffect } from "react";
// Components
import Navbar from "@/components/major/Navbar";
// Sections
import Hero from "@/sections/website/home/Header";
import Cards from "@/sections/website/home/Card";
import OurWork from "@/sections/website/home/Work";
import EventSection from "@/sections/website/home/Event";
import Footer from "@/components/major/Footer";

const Home = () => {
  
  useEffect(() => {
    document.title = "Rafikisty TLC"
  }, []);

  return (
    <div className="bg-secondary" id="home">
      <Navbar />
      <div className="mt-14 lg:mt-20">
        <section>
          <div class="w-full bg-primary">
            <Hero />
          </div>
          <div class="custom-shape-divider-bottom-1712914644 rotate-180 fill-primary">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </section>

        <section>
          <Cards />
        </section>

        <section className="bg-black text-secondary">
          <div class="custom-shape-divider-bottom-1712914644 rotate-180 fill-secondary -mt-10">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
          <OurWork />
        </section>
        
        
        <Footer />
      </div>
    </div>
  );
};

export default Home;
