import React from 'react'

import { Link ,useLocation} from 'react-router-dom'
import Service02 from "../../assets/images/home/mobile/image-app-design.jpg";
import Service03 from "../../assets/images/home/mobile/image-graphic-design.jpg";
import ServiceTablet02 from "../../assets/images/home/tablet/image-app-design.jpg";
import ServiceTablet03 from "../../assets/images/home/tablet/image-graphic-design.jpg";

import ServiceDesktop02 from "../../assets/images/home/desktop/image-app-design.jpg";
import ServiceDesktop03 from "../../assets/images/home/desktop/image-graphic-design.jpg";
import { RiArrowRightSLine } from "react-icons/ri";
const Links = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const isActiveWebDesing = currentPath === '/web-design';
    const isActiveAppDesing = currentPath === '/app-design';
    const isActiveGraphicDesign = currentPath === '/graphic-design';
    
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
        });
      };
  return (
    <>
    {isActiveWebDesing && 
    <section className="grid grid-cols-1 gap-4 my-24 px-6 md:my-[120px] xl:grid-cols-2 xl:px-[164px] 2xl:px-[256px]">
        <Link to="/app-design " className="figure" onClick={scrollToTop}>
        <figure className="rounded-lg relative  md:h-[200px] xl:h-full ">
            <picture className="rounded-lg ">
            <source 
                media="(min-width:1440px)" 
                srcSet={require("../../assets/images/home/desktop/image-app-design.jpg")} />
            <source 
                media="(min-width:768px)"
                srcSet={require("../../assets/images/home/tablet/image-app-design.jpg")} />
            <source 
                media="(min-width:640px)"
                srcSet={require("../../assets/images/home/mobile/image-app-design.jpg")} />
            <img
                src={require("../../assets/images/home/mobile/image-app-design.jpg")}
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
        <Link to="graphic-design" className="figure" onClick={scrollToTop}>
        <figure className="rounded-lg relative  md:h-[200px] xl:h-full ">
            <picture className="rounded-lg ">
            <source media="(min-width:1440px)" srcSet={ServiceDesktop03} />
            <source media="(min-width:768px)" srcSet={ServiceTablet03} />
            <source media="(min-width:640px)" srcSet={Service03} />
            <img
                src={Service03}
                alt="web-design-service"
                className="w-[100%]  object-cover rounded-lg md:h-[100%]"
            />
            <div className="figure-overlay absolute top-0 left-0 right-0 bottom-0 rounded-lg"></div>
            <figcaption className="absolute top-0 left-0 right-0 bottom-0 inset-0 flex flex-col justify-center items-center text-white xl:h-full">
                <h1 className="text-3xl mb-2">GRAPHIC DESIGN</h1>
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
    </section>}
    {isActiveAppDesing &&
    <section className="grid grid-cols-1 gap-4 my-24 px-6 md:my-[120px] xl:grid-cols-2 xl:px-[164px] 2xl:px-[256px]">
    
    <Link to="/graphic-design" className="figure" onClick={scrollToTop}>
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
                <h1 className="text-3xl mb-2">GRAPHIC DESIGN</h1>
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
        <Link to="/web-design " className="figure" onClick={scrollToTop}>
        <figure className="rounded-lg relative  md:h-[200px] xl:h-full ">
            <picture className="rounded-lg ">
            <source media="(min-width:1440px)" srcSet={ServiceDesktop03} />
            <source media="(min-width:768px)" srcSet={ServiceTablet03} />
            <source media="(min-width:640px)" srcSet={Service03} />
            <img
                src={Service03}
                alt="web-design-service"
                className="w-[100%]  object-cover rounded-lg md:h-[100%]"
            />
            <div className="figure-overlay absolute top-0 left-0 right-0 bottom-0 rounded-lg"></div>
            <figcaption className="absolute top-0 left-0 right-0 bottom-0 inset-0 flex flex-col justify-center items-center text-white xl:h-full">
                <h1 className="text-3xl mb-2">WEB DESIGN</h1>
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
    </section>}

    {isActiveGraphicDesign &&
    <section className="grid grid-cols-1 gap-4 my-24 px-6 md:my-[120px] xl:grid-cols-2 xl:px-[164px] 2xl:px-[256px]">
    
    <Link to="/web-design" className="figure" onClick={scrollToTop}>
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
                <h1 className="text-3xl mb-2">WEB DESIGN</h1>
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
        <Link to="app-design" className="figure" onClick={scrollToTop}>
        <figure className="rounded-lg relative  md:h-[200px] xl:h-full ">
            <picture className="rounded-lg ">
            <source media="(min-width:1440px)" srcSet={ServiceDesktop03} />
            <source media="(min-width:768px)" srcSet={ServiceTablet03} />
            <source media="(min-width:640px)" srcSet={Service03} />
            <img
                src={Service03}
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
    </section>}
  </>
  )
}

export default Links