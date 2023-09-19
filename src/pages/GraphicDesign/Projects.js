import React from "react";

const Projects = () => {
  return (
    <>
      <section className="graphic-desgin-grid">
        <figure className="graphic-desgin-figure">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/graphic-design/desktop/image-change.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="graphic-desgin-figcaption">
            <h1 className="graphic-desgin-figcaption-title">
             Tim Brown
            </h1>
            <p>A book cover designed for Tim Brown's new release, Change</p>
          </figcaption>
        </figure>
       
        <figure className="graphic-desgin-figure">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/graphic-design/desktop/image-boxed-water.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="graphic-desgin-figcaption">
            <h1 className="graphic-desgin-figcaption-title">
             Boxed Water
            </h1>
            <p>A simple packaging concept made for Boxed Water</p>
          </figcaption>
        </figure>
        
        <figure className="graphic-desgin-figure">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/graphic-design/desktop/image-science.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="graphic-desgin-figcaption">
            <h1 className="graphic-desgin-figcaption-title">
             Science
            </h1>
            <p>A poster made in collaboration with the Federal Art Project</p>
          </figcaption>
        </figure>     
      </section>
    </>
  );
};

export default Projects;
