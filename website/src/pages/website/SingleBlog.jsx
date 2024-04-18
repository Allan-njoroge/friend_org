import Navbar from "@/components/major/Navbar";
import Blogpost from "@/sections/website/singleBlog/Blogpost";
import Feedback from "@/sections/website/singleBlog/Feedback";
import Footer from "@/components/major/Footer";

const SingleBlog = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-14 lg:mt-20">
        <Blogpost />
        <Feedback />
        <Footer />
      </div>
    </div>
  );
};

export default SingleBlog;
