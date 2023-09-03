import React from "react";
import bgPattern from "../../assets/images/web-design/desktop/bg-pattern-intro-web.svg"
const Header = () => {
  return (
    <>
  
      <section className="px-6 py-[105px] bg-peach relative md:mx-10 md:rounded-lg overflow-hidden xl:mx-[164px] 2xl:mx-[256px]">
        <article className="z-10 text-center text-white relative">
          <h1 className="text-sm leading-8 mb-6 md:text-[48px] md:leading-[48px] ">
            Web Design
          </h1>
          <p className="leading-[25px] font-light text-[15px] md:text-[16px] md:px-32">
          We build websites that serve as powerful marketing tools and bring memorable brand experiences.
          </p>
        </article>
        <img src={bgPattern} alt="bg-pattern" className="absolute top-0 scale-[2] right-0 md:scale-150 md:top-[-100px] 2xl:scale-125"/>
      </section>
    </>
  );
};

export default Header;
