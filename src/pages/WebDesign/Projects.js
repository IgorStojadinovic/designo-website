import React from "react";

const Projects = ({webdesign}) => {
  return (
    <>
      <section className="web-desgin-grid">
        <figure className="web-desgin-figure">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/web-design/desktop/image-express.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="web-desgin-figcaption ">
            <h1 className="web-desgin-figcaption-title">
             Express
            </h1>
            <p>A multi-carrier shipping website for ecommerce businesses</p>
          </figcaption>
        </figure>
       
        <figure className="web-desgin-figure">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/web-design/desktop/image-transfer.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="web-desgin-figcaption ">
            <h1 className="web-desgin-figcaption-title">
             Transfer
            </h1>
            <p>Site for low-cost money transfers and sending money within seconds</p>
          </figcaption>
        </figure>
        
        <figure className="web-desgin-figure">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/web-design/desktop/image-photon.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="web-desgin-figcaption ">
            <h1 className="web-desgin-figcaption-title">
             Photon
            </h1>
            <p>A state-of-the-art music player with high-resolution audio and DSP effects</p>
          </figcaption>
        </figure>

        <figure className="web-desgin-figure">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/web-design/desktop/image-builder.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="web-desgin-figcaption ">
            <h1 className="web-desgin-figcaption-title">
             Builder
            </h1>
            <p>Connects users with local contractors based on their location</p>
          </figcaption>
        </figure>

        <figure className="web-desgin-figure">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/web-design/desktop/image-blogr.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="web-desgin-figcaption ">
            <h1 className="web-desgin-figcaption-title">
             Blogr
            </h1>
            <p>Blogr is a platform for creating an online blog or publication</p>
          </figcaption>
        </figure>

        <figure className="web-desgin-figure">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/web-design/desktop/image-camp.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="web-desgin-figcaption  ">
            <h1 className="web-desgin-figcaption-title">
             Camp
            </h1>
            <p>Get expert training in coding, data, design, and digital marketing</p>
          </figcaption>
        </figure>
     
      </section>
    
  
 
      
    </>
  );
};

export default Projects;
