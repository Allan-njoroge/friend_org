import React, { useState, useEffect } from "react";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Rafiki from "../../images/rafiki.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  //This are the links of the website
  const Links = [
    { name: "Home", link: "/" },
    { name: "Events", link: "/events" },
    { name: "About", link: "/about-us" },
    { name: "Work", link: "/our-work" },
    { name: "Blog", link: "/blogs" },
    { name: "Contact", link: "/contact" },
  ];

  const handleClick = () => {
    setMenuOpen(false);
    window.scrollTo(0,0);
  };

  return (
    <div className="bg-secondary text-black lg:h-20 h-14 fixed top-0 left-0 w-full z-10 shadow-sm shadow-muted-foreground">
      <nav className="flex justify-between items-center h-full max-w-[1440px] mx-auto px-5 lg:px-10">
        {/* Logo */}
        <div className="w-[35%]">
          <Link to={`/`} className="p-1">
            <img
              src={Rafiki}
              alt="Rafikistry Logo"
              className="w-[70%] lg:w-[35%] bg-black border-4 border-black rounded-sm"
            />
          </Link>
        </div>

        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl absolute right-7 top-2 cursor-pointer md:hidden transiton-all ease-in duration-300 p-1 border border-black text-black"
        >
          {menuOpen ? <RiCloseFill /> : <RiMenuFill />}
        </div>

        {/* Navbar Links */}
        <ul
          className={`md:flex gap-2 md:items-center md:pb-0 py-12 md:py-0 absolute md:static md:bg-transparent bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all ease-in duration-500 ${
            menuOpen ? "top-14" : "top-[-490px] opacity-0 md:opacity-100"
          }`}
        >
          {Links.map((Links) => (
            <li
              key={Links.name}
              className="px-2 py-2 text-primary md:text-black md:border-b-4 border-secondary hover:border-black hover:font-bold hover:transform hover:scale-110 transition-all ease-in-out duration-300"
            >
              <Link
                to={Links.link}
                onClick={handleClick}
              >
                {Links.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
