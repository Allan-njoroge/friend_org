import { useState } from "react";
// Images
import Image from "@/images/banner.jpg";
// Icons
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BlogDetails = () => {
  return (
    <div className="max-w-[1440px] flex justify-center mx-auto my-10">
      <div className="w-full">
        <div className="my-10 md:14 lg:my-20 text-2xl lg:text-3xl font-semibold">
          <h1 className="ml-5 md:ml-10" data-aos="fade-up" data-aos-duration="1000">Blogs</h1>
        </div>

        {/* Blogs Card Main Container */}
        <div className="mx-5 lg:mx-10 grid gap-10 justify-evenly grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
          {/* Blog Detaills */}
          <div className="bg-black" data-aos="fade-up" data-aos-duration="1000">
            <div className="border border-black -translate-y-2 -translate-x-2 hover:translate-x-0 hover:translate-y-0 bg-secondary hover:bg-primary transition-all ease-in-out duration-500">
              {/* Blog Image */}
              <div className="">
                <img src={Image} alt="" className="object-cover w-full h-[200px]" />
              </div>
              {/* Blog Text Details */}
              <div className="py-5 px-5">
                <p className="text-muted-foreground">
                  <b>Author:</b> Lorem Ipsum
                </p>
                <Link to={`/blogs/single-blog`}>
                  <h3 className="text-xl uppercase font-semibold hover:underline">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Porro, dolorum.
                  </h3>
                </Link>
                <p className="my-5 text-muted-foreground overflow-hidden text-overflow-ellipsis line-clamp-3 box-orient-vertical text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquam reiciendis iusto est porro perferendis mollitia
                  doloribus atque quibusdam. Recusandae quod saepe dolore eos
                  autem a velit. Nulla nemo nihil, quisquam labore tempora
                  beatae quo doloremque debitis earum expedita ab voluptatem
                  saepe fuga error. Pariatur quae adipisci sit culpa obcaecati
                  quis deserunt! Ad ab excepturi quis alias ratione illum
                  repudiandae blanditiis mollitia quasi hic, qui voluptates
                  facilis, dolorum tenetur rerum? Eum illo eligendi, sed eos
                  minus, incidunt doloribus accusamus ipsam ad nobis sequi saepe
                  aperiam sapiente dolor quibusdam voluptatum laboriosam est
                  itaque nam voluptas quaerat corrupti? Sit minus natus ipsa
                  molestias?
                </p>
                <Link to={`/blogs/single-blog`}>
                  <Button className="rounded-none border border-black hover:bg-black hover:text-primary transition-all ease-in-out duration-500">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Detaills */}
          <div className="bg-black" data-aos="fade-up" data-aos-duration="1000">
            <div className="border border-black -translate-y-2 -translate-x-2 hover:translate-x-0 hover:translate-y-0 bg-secondary hover:bg-primary transition-all ease-in-out duration-500">
              {/* Blog Image */}
              <div className="">
                <img src={Image} alt="" className="object-cover w-full h-[200px]" />
              </div>
              {/* Blog Text Details */}
              <div className="py-5 px-5">
                <p className="text-muted-foreground">
                  <b>Author:</b> Lorem Ipsum
                </p>
                <Link to={`/blogs/single-blog`}>
                  <h3 className="text-xl uppercase font-semibold hover:underline">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Porro, dolorum.
                  </h3>
                </Link>
                <p className="my-5 text-muted-foreground overflow-hidden text-overflow-ellipsis line-clamp-3 box-orient-vertical text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquam reiciendis iusto est porro perferendis mollitia
                  doloribus atque quibusdam. Recusandae quod saepe dolore eos
                  autem a velit. Nulla nemo nihil, quisquam labore tempora
                  beatae quo doloremque debitis earum expedita ab voluptatem
                  saepe fuga error. Pariatur quae adipisci sit culpa obcaecati
                  quis deserunt! Ad ab excepturi quis alias ratione illum
                  repudiandae blanditiis mollitia quasi hic, qui voluptates
                  facilis, dolorum tenetur rerum? Eum illo eligendi, sed eos
                  minus, incidunt doloribus accusamus ipsam ad nobis sequi saepe
                  aperiam sapiente dolor quibusdam voluptatum laboriosam est
                  itaque nam voluptas quaerat corrupti? Sit minus natus ipsa
                  molestias?
                </p>
                <Link to={`/blogs/single-blog`}>
                  <Button className="rounded-none border border-black hover:bg-black hover:text-primary transition-all ease-in-out duration-500">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Detaills */}
          <div className="bg-black" data-aos="fade-up" data-aos-duration="1000">
            <div className="border border-black -translate-y-2 -translate-x-2 hover:translate-x-0 hover:translate-y-0 bg-secondary hover:bg-primary transition-all ease-in-out duration-500">
              {/* Blog Image */}
              <div className="">
                <img src={Image} alt="" className="object-cover w-full h-[200px]" />
              </div>
              {/* Blog Text Details */}
              <div className="py-5 px-5">
                <p className="text-muted-foreground">
                  <b>Author:</b> Lorem Ipsum
                </p>
                <Link to={`/blogs/single-blog`}>
                  <h3 className="text-xl uppercase font-semibold hover:underline">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Porro, dolorum.
                  </h3>
                </Link>
                <p className="my-5 text-muted-foreground overflow-hidden text-overflow-ellipsis line-clamp-3 box-orient-vertical text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquam reiciendis iusto est porro perferendis mollitia
                  doloribus atque quibusdam. Recusandae quod saepe dolore eos
                  autem a velit. Nulla nemo nihil, quisquam labore tempora
                  beatae quo doloremque debitis earum expedita ab voluptatem
                  saepe fuga error. Pariatur quae adipisci sit culpa obcaecati
                  quis deserunt! Ad ab excepturi quis alias ratione illum
                  repudiandae blanditiis mollitia quasi hic, qui voluptates
                  facilis, dolorum tenetur rerum? Eum illo eligendi, sed eos
                  minus, incidunt doloribus accusamus ipsam ad nobis sequi saepe
                  aperiam sapiente dolor quibusdam voluptatum laboriosam est
                  itaque nam voluptas quaerat corrupti? Sit minus natus ipsa
                  molestias?
                </p>
                <Link to={`/blogs/single-blog`}>
                  <Button className="rounded-none border border-black hover:bg-black hover:text-primary transition-all ease-in-out duration-500">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
