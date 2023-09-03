import React from "react";
import Service01 from "../../assets/images/home/mobile/image-web-design.jpg";
import Service02 from "../../assets/images/home/mobile/image-app-design.jpg";
import Service03 from "../../assets/images/home/mobile/image-graphic-design.jpg";
import ServiceTablet01 from "../../assets/images/home/tablet/image-web-design.jpg";
import ServiceTablet02 from "../../assets/images/home/tablet/image-app-design.jpg";
import ServiceTablet03 from "../../assets/images/home/tablet/image-graphic-design.jpg";
import ServiceDesktop01 from "../../assets/images/home/desktop/image-web-design-large.jpg";
import ServiceDesktop02 from "../../assets/images/home/desktop/image-app-design.jpg";
import ServiceDesktop03 from "../../assets/images/home/desktop/image-graphic-design.jpg";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../../assets/styles/figures.css";
const Services = () => {
  return (
    <section className="grid grid-rows-3 sm:grid-rows-3 md:grid-rows-1 lg:grid-rows-1 xl:grid-cols-2 xl:grid-rows-2 gap-5 my-[120px] px-6 md:px-10 lg:px-[82px] xl:px-[164px] xl:h-[640px] 2xl:px-[256px]">
      <Link
        to="web-design"
        className=" relative xl:row-span-2 xl:h-full md:h-[200px] rounded-lg figure"
      >
        <figure className="rounded-lg  absolute top-0 left-0 right-0 bottom-0 -z-40 md:h-[full] xl:row-span-2 xl:h-full   ">
          <picture className="rounded-lg -z-10">
            <source media="(min-width:1440px)" srcSet={ServiceDesktop01} />
            <source media="(min-width:768px)" srcSet={ServiceTablet01} />
            <source media="(min-width:640px)" srcSet={Service01} />
            <img
              src={Service01}
              alt="web-design-service"
              className="w-[100%] object-cover rounded-lg md:h-[100%]  "
            />
            <div className="figure-overlay absolute top-0 left-0 right-0 bottom-0 rounded-lg"></div>
            <figcaption className="absolute top-0  inset-0  flex flex-col justify-center items-center text-white ">
              <h1 className="text-3xl mb-2 ">WEB DESIGN</h1>
              <Link
                to="web-design"
                className="flex justify-center items-center text-[15px] tracking-widest w-full "
              >
                VIEW PROJECTS{" "}
                <RiArrowRightSLine color="#E7816B" className="ml-2" />
              </Link>
            </figcaption>
          </picture>
        </figure>
      </Link>
      <Link to="app-design " className="figure">
        <figure className="rounded-lg relative  md:h-[200px] xl:h-full ">
          <picture className="rounded-lg ">
            <source media="(min-width:1440px)" srcSet={ServiceDesktop02} />
            <source media="(min-width:768px)" srcSet={ServiceTablet02} />
            <source media="(min-width:640px)" srcSet={Service02} />
            <img
              src={Service02}
              alt="web-design-service"
              className="w-[100%]  object-cover rounded-lg md:h-[100%]"
            />
            <div className="figure-overlay absolute top-0 left-0 right-0 bottom-0 rounded-lg"></div>
            <figcaption className="absolute top-0 left-0 right-0 bottom-0 inset-0 flex flex-col justify-center items-center text-white xl:h-full">
              <h1 className="text-3xl mb-2">APP DESIGN</h1>
              <Link
                to="app-design"
                className="flex justify-center items-center text-[15px] tracking-widest w-full "
              >
                VIEW PROJECTS{" "}
                <RiArrowRightSLine color="#E7816B" className="ml-2" />
              </Link>
            </figcaption>
          </picture>
        </figure>
      </Link>
      <Link to="graphic-design" className="figure">
        <figure className="rounded-lg relative md:h-[200px] xl:h-full ">
          <picture className="rounded-lg  ">
            <source media="(min-width:1440px)" srcSet={ServiceDesktop03} />
            <source media="(min-width:768px)" srcSet={ServiceTablet03} />
            <source media="(min-width:640px)" srcSet={Service03} />
            <img
              src={Service03}
              alt="web-design-service"
              className="w-[100%]  object-cover rounded-lg md:h-[100%] "
            />
            <div className=" figure-overlay absolute top-0 left-0 right-0 bottom-0  rounded-lg "></div>
            <figcaption className="absolute top-0 left-0 right-0 bottom-0 inset-0 flex flex-col justify-center items-center text-white">
              <h1 className="text-3xl mb-2">GRAPHIC DESIGN</h1>
              <Link
                to="graphic-design"
                className="flex justify-center items-center text-[15px] tracking-widest w-full "
              >
                VIEW PROJECTS{" "}
                <RiArrowRightSLine color="#E7816B" className="ml-2" />
              </Link>
            </figcaption>
          </picture>
        </figure>
      </Link>
    </section>
  );
};

export default Services;
