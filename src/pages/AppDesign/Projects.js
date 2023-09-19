import React from "react";

const Projects = () => {
  return (
    <>
      <section className="app-desgin-grid">
        <figure className="app-desgin-figure">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/app-design/desktop/image-airfilter.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="app-desgin-figcaption">
            <h1 className="app-desgin-figcaption-title">
             Express
            </h1>
            <p>A multi-carrier shipping website for ecommerce businesses</p>
          </figcaption>
        </figure>
       
        <figure className="app-desgin-figure ">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/app-design/desktop/image-eyecam.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="app-desgin-figcaption">
            <h1 className="app-desgin-figcaption-title">
             eyecam
            </h1>
            <p>Product that lets you edit your favorite photos and videos at any time</p>
          </figcaption>
        </figure>
        
        <figure className="app-desgin-figure ">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/app-design/desktop/image-faceit.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="app-desgin-figcaption">
            <h1 className="app-desgin-figcaption-title">
             Faceit
            </h1>
            <p>Get to meet your favorite internet superstar with the faceit app</p>
          </figcaption>
        </figure>

        <figure className="app-desgin-figure ">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/app-design/desktop/image-todo.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="app-desgin-figcaption">
            <h1 className="app-desgin-figcaption-title">
             Todo
            </h1>
            <p>A todo app that features cloud sync with light and dark mode</p>
          </figcaption>
        </figure>

        <figure className="app-desgin-figure">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/app-design/desktop/image-loopstudios.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="app-desgin-figcaption">
            <h1 className="app-desgin-figcaption-title">
             Loopstudios
            </h1>
            <p>A VR experience app made for Loopstudios</p>
          </figcaption>
        </figure>

     
      </section>
    
  
 
      
    </>
  );
};

export default Projects;
