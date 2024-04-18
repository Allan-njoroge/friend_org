import Navbar from "@/components/major/Navbar";
import Event from "@/sections/website/SingleEvent/EventDet";
import Footer from "@/components/major/Footer";

const SoloEvent = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-14 lg:mt-20">
        <Event />
        <Footer />
      </div>
    </div>
  );
};

export default SoloEvent;