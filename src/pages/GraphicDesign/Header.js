import React from "react";
import bgPattern from "../../assets/images/web-design/desktop/bg-pattern-intro-web.svg"
const Header = () => {
  return (
    <>
      <section className="graphics-design-section">
        <article className="graphic-design-article">
          <p className="graphic-desgin-title">
          Graphic Design
          </p>
          <p className="graphic-design-text">
          We deliver eye-catching branding materials that are tailored to meet your business objectives.          </p>
        </article>
        <img src={bgPattern} alt="bg-pattern" className="graphic-desgin-bg-pattern"/>
      </section>
    </>
  );
};

export default Header;
