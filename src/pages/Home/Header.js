import React from "react";
import Button from "../../components/Button";
import Phone from "../../assets/images/home/mobile/phone.svg";

import PhoneDesktop from "../../assets/images/home/desktop/phone.svg";
const Header = () => {
  return (
    <section className="bg-peach overflow-hidden relative  text-white flex flex-col justify-center items-center px-6 pt-20   md:mx-10 md:rounded-xl  xl:flex-row xl:mx-[164px] xl:px-24 xl:pt-0 xl:h-[664px] xl:justify-between 2xl:mx-[256px]">
      <article className="h-[50%] mb-20 z-40 overflow-hidden flex flex-col justify-start items-center text-center    md:h-[50%]  md:justify-center    xl:w-1/2 xl:items-start xl:h-full">
        <h1 className="text-sm leading-8 mb-[14px]   md:text-[48px] md:leading-[48px] md:px-16   xl:px-0 xl:pr-10 xl:text-left">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="mb-[14px] leading-[25px] font-light   md:px-32 xl:px-0   xl:text-left xl:mb-12">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button type="light" text="learn more" />
      </article>{" "}
      <div className="h-[640px]  w-[640px] absolute rounded-[50%] oval left-0 top-[185px]  md:top-[150px] md:left-auto md:right-[-180px] md:w-[850px]  md:h-[850px] xl:top-0"></div>
      <picture className="h-[50%] flex justify-center items-center  xl:w-[50%] xl:h-[100%] xl:mb-0 ">
        <source media="(min-width:640px)" srcSet={Phone} />

        <source media="(min-width:768px)" srcSet={PhoneDesktop} />
        <source media="(min-width:1280px)" srcSet={PhoneDesktop} />
        <source media="(min-width:1024px)" srcSet={PhoneDesktop} />

        <img
          src={Phone}
          className="w-full h-full z-20 md:h-full  lg:w-full xl:w-1/2  "
          alt="phone"
        />
      </picture>
    </section>
  );
};

export default Header;
