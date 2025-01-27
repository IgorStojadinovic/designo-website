import React from "react";
import Button from "../Button";
import FooterLogo from "../../assets/images/shared/mobile/logo-light.png";
import FooterPattern from "../../assets/images/shared/desktop/bg-pattern-call-to-action.svg"
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
      <section className="footer-gradient footer-container">
        <article className="footer-article">
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
          <img src={FooterPattern} className="absolute right-0 -z-10" alt="footer-patter"/>
        </article>
      </section>
      <section className="footer-info-section">
        <div className="footer-links">
          <img
            src={FooterLogo}
            alt="company logo"
            className="mb-8 h-[27px] self-center m-auto xl:m-0"
          />
          <div className="footer-line border-t-light-gray "></div>
          <ul className="footer-ul">
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

        <div className="footer-contact-info">
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
          <ul className="footer-contact-info-ul">
            <li className="footer-contact-info-li">
              <Link to="www.facebook.com">
                <AiFillFacebook size={24} color="#E7816B" />
              </Link>
            </li>
            <li className="footer-contact-info-li">
              <Link to="www.youtube.com">
                <FaYoutubeSquare size={24} color="#E7816B" />
              </Link>
            </li>
            <li className="footer-contact-info-li">
              <Link to="www.twitter.com">
                <AiOutlineTwitter size={24} color="#E7816B" />
              </Link>
            </li>
            <li className="footer-contact-info-li">
              <Link to="www.pinterest.com">
                <BsPinterest size={24} color="#E7816B" />
              </Link>
            </li>
            <li className="footer-contact-info-li">
              <Link to="www.instagram.com">
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
