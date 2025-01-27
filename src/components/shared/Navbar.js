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
      <nav className="navbar">
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
              ? "menu-active"
              : "menu-closed"
          }
        >
          <div className=" bg-black w-full h-full flex flex-col items-center justify-center">
            <li className="">
              {" "}
              <Link
                  to="https://designo-seo.netlify.app/"
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
                  rel="canonical"
                  to="/locations"
                className="text-2xl font-semibold hover:text-light-peach"
              >
                Locations
              </Link>
            </li>
            <li>
              {" "}
              <Link
                  rel="canonical"
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
            <Link to="/" rel="canonical" >Our Company</Link>
            <div className="link-bar"></div>
          </li>
          <li className="transition-all duration-100 uppercase text-black nav-link">
            {" "}
            <Link to="/locations" rel="canonical" >Locations</Link>
            <div className="link-bar"></div>
          </li>
          <li className="transition-all duration-100 uppercase text-black nav-link">
            {" "}
            <Link to="/contact" rel="canonical" >Contact</Link>
            <div className="link-bar"></div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
