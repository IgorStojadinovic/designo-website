import React from "react";
import Button from "../../components/Button";
import Phone from "../../assets/images/home/mobile/phone.svg";
import BgPttern from "../../assets/images/home/desktop/bg-pattern-hero-home.svg"
import PhoneDesktop from "../../assets/images/home/desktop/phone.svg";


const Header = () => {
  return (
    <section className="home-main-section">
      <article className="home-article">
        <h1 className="home-article-title">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="home-article-text">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button type="light" text="learn more" />
      </article>{" "}
      <img src={BgPttern} className="absolute right-0" alt="home-background-patter"/>
      <picture className="home-article-picture">
        <source media="(min-width:640px)" srcSet={Phone} />

        <source media="(min-width:768px)" srcSet={PhoneDesktop} />
        <source media="(min-width:1280px)" srcSet={PhoneDesktop} />
        <source media="(min-width:1024px)" srcSet={PhoneDesktop} />

        <img
          src={Phone}
          className="home-article-img"
          alt="phone"
        />
      </picture>
    </section>
  );
};

export default Header;
