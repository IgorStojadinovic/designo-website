import React from "react";

const Projects = ({webdesign}) => {
  return (
    <>
      <section className="grid grid-cols-1 gap-10 px-6 mt-24 md:mt-[120px] md:px-10 lg:grid-cols-3 2xl:px-[164px] 2xl:grid-cols-3 xl:px-[164px] 2xl:px-[256px] 2xl:my-[160px]">
        <figure className="text-center flex flex-col md:flex-row md:h-auto lg:flex-col rounded-lg overflow-hidden">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/web-design/desktop/image-express.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="bg-figure py-8 px-7 w-full md:flex flex-col justify-center md:w-1/2 lg:w-full 2xl:w-full ">
            <h1 className="text-[20px] font-medium uppercase tracking-[5px]	 text-peach mb-4">
             Express
            </h1>
            <p>A multi-carrier shipping website for ecommerce businesses</p>
          </figcaption>
        </figure>
       
        <figure className="text-center flex flex-col md:flex-row md:h-auto lg:flex-col rounded-lg overflow-hidden">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/web-design/desktop/image-transfer.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="bg-figure py-8 px-7 w-full md:flex flex-col justify-center md:w-1/2 lg:w-full 2xl:w-full ">
            <h1 className="text-[20px] font-medium uppercase tracking-[5px]	 text-peach mb-4">
             Transfer
            </h1>
            <p>Site for low-cost money transfers and sending money within seconds</p>
          </figcaption>
        </figure>
        
        <figure className="text-center flex flex-col md:flex-row md:h-auto lg:flex-col rounded-lg overflow-hidden">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/web-design/desktop/image-photon.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="bg-figure py-8 px-7 w-full md:flex flex-col justify-center md:w-1/2 lg:w-full 2xl:w-full ">
            <h1 className="text-[20px] font-medium uppercase tracking-[5px]	 text-peach mb-4">
             Photon
            </h1>
            <p>A state-of-the-art music player with high-resolution audio and DSP effects</p>
          </figcaption>
        </figure>

        <figure className="text-center flex flex-col md:flex-row md:h-auto lg:flex-col rounded-lg overflow-hidden">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/web-design/desktop/image-builder.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="bg-figure py-8 px-7 w-full md:flex flex-col justify-center md:w-1/2 lg:w-full 2xl:w-full ">
            <h1 className="text-[20px] font-medium uppercase tracking-[5px]	 text-peach mb-4">
             Builder
            </h1>
            <p>Connects users with local contractors based on their location</p>
          </figcaption>
        </figure>

        <figure className="text-center flex flex-col md:flex-row md:h-auto lg:flex-col rounded-lg overflow-hidden">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/web-design/desktop/image-blogr.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="bg-figure py-8 px-7 w-full md:flex flex-col justify-center md:w-1/2 lg:w-full 2xl:w-full ">
            <h1 className="text-[20px] font-medium uppercase tracking-[5px]	 text-peach mb-4">
             Blogr
            </h1>
            <p>Blogr is a platform for creating an online blog or publication</p>
          </figcaption>
        </figure>

        <figure className="text-center flex flex-col md:flex-row md:h-auto lg:flex-col rounded-lg overflow-hidden">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/web-design/desktop/image-camp.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="bg-figure py-8 px-7 w-full md:flex flex-col justify-center md:w-1/2 lg:w-full 2xl:w-full  ">
            <h1 className="text-[20px] font-medium uppercase tracking-[5px]	 text-peach mb-4">
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
