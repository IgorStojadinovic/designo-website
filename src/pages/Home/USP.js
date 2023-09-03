import React from "react";
import IMG01 from "../../assets/images/shared/mobile/usp-img-01.svg";
import IMG02 from "../../assets/images/shared/mobile/usp-img-02.svg";
import IMG03 from "../../assets/images/shared/mobile/usp-img-03.svg";

const USP = () => {
  return (
    <section className="px-6 mb-[100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3  gap-20 lg:gap-16   md:px-10  lg:px-[82px] xl:px-[164px] 2xl:px-[256px]">
      <figure className="flex flex-col justify-center items-center md:flex-row md:h-[200px] lg:flex-col lg:h-[400px]">
        <picture className="mb-12 md:w-[25%] md:mb-0 lg:w-full lg:mb-12">
          <img
            src={IMG01}
            alt="illustraion of a man that is working with tablet"
            className="lg:m-auto"
          />
        </picture>
        <figcaption className="text-center md:w-[75%] md:text-left md:ml-12  lg:text-center lg:ml-0 lg:w-full">
          <h1 className="text-[20px] uppercase tracking-[5px] font-medium text-black ">
            Passionate
          </h1>
          <p className="leading-6">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </figcaption>
      </figure>
      <figure className="flex flex-col justify-center items-center md:flex-row md:h-[200px] lg:flex-col lg:h-[400px]">
        <picture className="mb-12 md:w-[25%] md:mb-0 lg:w-full lg:mb-12">
          <img
            src={IMG02}
            alt="illustraion of a man that is working with tablet"
            className="lg:m-auto"
          />
        </picture>
        <figcaption className="text-center md:w-[75%] md:text-left md:ml-12 lg:text-center lg:ml-0 lg:w-full">
          <h1 className="text-[20px] uppercase tracking-[5px] font-medium text-black ">
            Passionate
          </h1>
          <p className="leading-6">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </figcaption>
      </figure>
      <figure className="flex flex-col justify-center items-center md:flex-row md:h-[200px] lg:flex-col lg:h-[400px]">
        <picture className="mb-12 md:w-[25%] md:mb-0 lg:w-full lg:mb-12 ">
          <img
            src={IMG03}
            alt="illustraion of a man that is working with tablet"
            className="lg:m-auto"
          />
        </picture>
        <figcaption className="text-center md:w-[75%] md:text-left md:ml-12 lg:text-center lg:ml-0 lg:w-full">
          <h1 className="text-[20px] uppercase tracking-[5px] font-medium text-black ">
            Passionate
          </h1>
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
