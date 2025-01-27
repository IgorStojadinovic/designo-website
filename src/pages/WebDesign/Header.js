import React from "react";
import bgPattern from "../../assets/images/web-design/desktop/bg-pattern-intro-web.svg"
const Header = () => {
  return (
    <>
  
      <section className="web-design-section">
        <article className="web-design-article">
          <p className="web-desgin-title">
            Web Design
          </p>
          <p className="web-design-text">
          We build websites that serve as powerful marketing tools and bring memorable brand experiences.
          </p>
        </article>
        <img src={bgPattern} alt="bg-pattern" className="absolute top-0 scale-[2] right-0 md:scale-150 md:top-[-100px] 2xl:scale-125"/>
      </section>
    </>
  );
};

export default Header;
