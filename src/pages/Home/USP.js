import React from "react";
import IMG01 from "../../assets/images/shared/mobile/usp-img-01.svg";
import IMG02 from "../../assets/images/shared/mobile/usp-img-02.svg";
import IMG03 from "../../assets/images/shared/mobile/usp-img-03.svg";


const USP = () => {
  return (
    <section className="home-usp-gird">
      <figure className="home-usp-figure">
        <picture className="home-usp-picture">
          <img
            src={IMG01}
            alt="illustraion of a man that is working with tablet"
            className="lg:m-auto"
          />
        </picture>
        <figcaption className="home-usp-figcaption">
          <p className="home-usp-figcaption-title ">
            Passionate
          </p>
          <p className="leading-6">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </figcaption>
      </figure>
      <figure className="home-usp-figure">
        <picture className="home-usp-picture">
          <img
            src={IMG02}
            alt="illustraion of a man that is working with tablet"
            className="lg:m-auto"
          />
        </picture>
        <figcaption className="home-usp-figcaption">
          <p className="home-usp-figcaption-title">
            Passionate
          </p>
          <p className="leading-6">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </figcaption>
      </figure>
      <figure className="home-usp-figure">
        <picture className="home-usp-picture">
          <img
            src={IMG03}
            alt="illustraion of a man that is working with tablet"
            className="lg:m-auto"
          />
        </picture>
        <figcaption className="home-usp-figcaption">
          <p className="home-usp-figcaption-title">
            Passionate
          </p>
          <p className="leading-6">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </figcaption>
      </figure>
    </section>
  );
};

export default USP;
