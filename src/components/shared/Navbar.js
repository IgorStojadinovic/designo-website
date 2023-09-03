import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/shared/mobile/logo-dark.png";
import MenuIcon from "../../assets/images/shared/mobile/icon-hamburger.svg";
import { Link } from "react-router-dom";
import "../../assets/styles/navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const trackScroll = () => {
      if (menu) {
        const scrolled = window.pageYOffset;
        if (scrolled > 0) {
          window.scrollTo(0, 0);
        }
      }

      if (window.innerWidth > 500) {
        setMenu(false);
      }
    };
    window.addEventListener("scroll", trackScroll);
    return () => window.removeEventListener("scroll", trackScroll);
  }, [menu]);
  return (
    <>
      {" "}
      <nav className=" px-6 py-8 bg-white z-50 relative flex justify-between md:px-10 md:py-16 lg:px-[82px] xl:px-[164px] 2xl:px-[256px]">
        <img
          src={Logo}
          className="h-100 w-2/4 sm:w-1/4 md:w-1/4 lg:w-2/12 "
          alt="logo"
        />
        <img
          src={MenuIcon}
          alt="menu-icon"
          className="h-5 md:hidden cursor-pointer"
          onClick={() => {
            handleMenu();
          }}
        />

        <ul
          className={
            menu
              ? "transition-all duration-300 ease-in-out m-0  absolute left-0   w-screen  h-screen top-[85px] bg-black/50  text-white uppercase  md:hidden 2xl:hidden"
              : "transition-all duration-500 ease-in-out m-0 absolute    w-screen  h-screen top-[85px] left-[-5000px] bg-black/50  text-white uppercase  "
          }
        >
          <div className=" bg-black w-full h-full flex flex-col items-center justify-center">
            <li className="">
              {" "}
              <Link
                to="/"
                className="hover:text-light-peach text-2xl font-semibold"
              >
                Our Company
              </Link>
            </li>
            <li
              className={
                menu
                  ? "tranistion-all  ease-in-out duration-500  my-10"
                  : "tranistion-all  ease-in-out duration-500  my-0"
              }
            >
              <Link
                to="/locations"
                className="text-2xl font-semibold hover:text-light-peach"
              >
                Locations
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="/contact"
                className="hover:text-light-peach text-2xl font-semibold"
              >
                Contact
              </Link>
            </li>
          </div>
        </ul>

        <ul className="hidden md:flex w-1/2 lg:w-1/3 justify-between">
          <li className="transition-all duration-100 uppercase text-black nav-link">
            <Link to="/">Our Company</Link>
            <div className="link-bar"></div>
          </li>
          <li className="transition-all duration-100 uppercase text-black nav-link">
            {" "}
            <Link to="/locations">Locations</Link>
            <div className="link-bar"></div>
          </li>
          <li className="transition-all duration-100 uppercase text-black nav-link">
            {" "}
            <Link to="/contact">Contact</Link>
            <div className="link-bar"></div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
