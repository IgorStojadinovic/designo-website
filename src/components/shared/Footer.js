import React from "react";
import Button from "../Button";
import FooterLogo from "../../assets/images/shared/mobile/logo-light.png";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section className="footer-gradient px-6 py-16  md:px-10 md:py-20 lg:px-[82px] xl:px-[164px] 2xl:px-[256px]">
        <article className="bg-peach rounded-lg px-6 py-16 text-white text-center md:px-24 lg:flex lg:justify-between lg:items-center lg:px-24">
          <div className="lg:w-1/2 lg:text-left ">
            <h1 className="text-sm px-10 mb-2 lg:px-0">
              Let's talk about your project
            </h1>
            <p className="mb-8">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <Button type="light" text="get in touch" className="" />
        </article>
      </section>
      <section className="bg-black flex flex-col justify-center items-center text-light-grey px-6 pb-16 md:px-10 md:pb-20 lg:px-[82px] xl:px-[164px] 2xl:px-[256px]">
        <div className="grid w-full   grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2  md:relative ">
          <img
            src={FooterLogo}
            alt="company logo"
            className="mb-8 h-[27px] self-center m-auto xl:m-0"
          />
          <div className="border-t-[1px] border-t-light-gray w-full mb-8 md:absolute  md:bottom-0 md:mb-0"></div>
          <ul className="flex flex-col justify-center items-center  md:flex-row md:justify-between">
            <li className="mt-8 md:mt-0">
              <Link to="company" className="hover:text-light-peach">
                OUR COMPANY
              </Link>
            </li>
            <li className="my-8">
              <Link to="locations" className="hover:text-light-peach">
                LOCATIONS
              </Link>
            </li>
            <li>
              <Link to="contact" className="hover:text-light-peach">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>

        <div className="grid  w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 ">
          <address className="text-center my-12 not-italic md:my-0 md:mt-8">
            <p className="font-bold leading-7	">Designo Central Office</p>
            <p className="leading-7	">3886 Wellington Street</p>
            <p className="leading-7	">Toronto Ontario M9C 3JP</p>
          </address>
          <ul className="mb-12 text-center md:mt-8">
            <li className="font-bold leading-7">Contact Us (Central Office)</li>
            <li className="leading-7	">P : +1 253-863-8967</li>
            <li className="leading-7	">M : contact@design.co</li>
          </ul>
          <ul className="flex justify-between items-center  w-full px-16 md:px-0 lg:px-0 ">
            <li className="transition-all duration-75 rounded-full border-solid border-2 p-2 border-transparent hover:border-light-peach">
              <Link>
                <AiFillFacebook size={24} color="#E7816B" />
              </Link>
            </li>
            <li className="transition-all duration-75 rounded-full border-solid border-2 p-2 border-transparent hover:border-light-peach">
              <Link>
                <FaYoutubeSquare size={24} color="#E7816B" />
              </Link>
            </li>
            <li className="transition-all duration-75 rounded-full border-solid border-2 p-2 border-transparent hover:border-light-peach">
              <Link>
                <AiOutlineTwitter size={24} color="#E7816B" />
              </Link>
            </li>
            <li className="transition-all duration-75 rounded-full border-solid border-2 p-2 border-transparent hover:border-light-peach">
              <Link>
                <BsPinterest size={24} color="#E7816B" />
              </Link>
            </li>
            <li className=" transition-all duration-75 rounded-full border-solid border-2 p-2 border-transparent hover:border-light-peach">
              <Link>
                <AiOutlineInstagram size={24} color="#E7816B" />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
