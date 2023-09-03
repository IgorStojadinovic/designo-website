import React from "react";
import bgPattern from "../../assets/images/web-design/desktop/bg-pattern-intro-web.svg"
const Header = () => {
  return (
    <>
      <section className="px-6 py-[105px] bg-peach relative md:mx-10 md:rounded-lg overflow-hidden xl:mx-[164px] 2xl:mx-[256px]">
        <article className="z-10 text-center text-white relative">
          <h1 className="text-sm leading-8 mb-6 md:text-[48px] md:leading-[48px] ">
          Graphic Design
          </h1>
          <p className="leading-[25px] font-light text-[15px] md:text-[16px] md:px-32">
          We deliver eye-catching branding materials that are tailored to meet your business objectives.          </p>
        </article>
        <img src={bgPattern} alt="bg-pattern" className="absolute top-0 right-[-100px] scale-[2] lg:top-[-100px] lg:left-[-100px] "/>
      </section>
    </>
  );
};

export default Header;
