import React from "react";
import bgPattern from "../../assets/images/web-design/desktop/bg-pattern-intro-web.svg"


const Header = () => {
  return (
    <>
      <section className="app-design-section">
        <article className="app-design-article">
          <p className="app-desgin-title">
            App Design
          </p>
          <p className="app-design-text">
          Our mobile designs bring intuitive digital solutions
          to your customers right at their fingertips.
          </p>
        </article>
        <img src={bgPattern} alt="bg-pattern" className="absolute top-0 left-[-150px] scale-[2] right-0 md:scale-150 md:top-[-100px] "/>
      </section>
    </>
  );
};

export default Header;
