import React from "react";

const Projects = () => {
  return (
    <>
      <section className="grid grid-cols-1 gap-10 px-6 mt-24 md:mt-[120px] md:px-10 lg:grid-cols-3 2xl:px-[164px] 2xl:grid-cols-3 xl:px-[164px] 2xl:px-[256px] 2xl:my-[160px]">
        <figure className="text-center flex flex-col md:flex-row md:h-auto lg:flex-col rounded-lg overflow-hidden">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/app-design/desktop/image-airfilter.jpg")}
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
              src={require("../../assets/images/app-design/desktop/image-eyecam.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="bg-figure py-8 px-7 w-full md:flex flex-col justify-center md:w-1/2 lg:w-full 2xl:w-full ">
            <h1 className="text-[20px] font-medium uppercase tracking-[5px]	 text-peach mb-4">
             eyecam
            </h1>
            <p>Product that lets you edit your favorite photos and videos at any time</p>
          </figcaption>
        </figure>
        
        <figure className="text-center flex flex-col md:flex-row md:h-auto lg:flex-col rounded-lg overflow-hidden">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/app-design/desktop/image-faceit.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="bg-figure py-8 px-7 w-full md:flex flex-col justify-center md:w-1/2 lg:w-full 2xl:w-full ">
            <h1 className="text-[20px] font-medium uppercase tracking-[5px]	 text-peach mb-4">
             Faceit
            </h1>
            <p>Get to meet your favorite internet superstar with the faceit app</p>
          </figcaption>
        </figure>

        <figure className="text-center flex flex-col md:flex-row md:h-auto lg:flex-col rounded-lg overflow-hidden">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/app-design/desktop/image-todo.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="bg-figure py-8 px-7 w-full md:flex flex-col justify-center md:w-1/2 lg:w-full 2xl:w-full ">
            <h1 className="text-[20px] font-medium uppercase tracking-[5px]	 text-peach mb-4">
             Todo
            </h1>
            <p>A todo app that features cloud sync with light and dark mode</p>
          </figcaption>
        </figure>

        <figure className="text-center flex flex-col md:flex-row md:h-auto lg:flex-col rounded-lg overflow-hidden">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/app-design/desktop/image-loopstudios.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="bg-figure py-8 px-7 w-full md:flex flex-col justify-center md:w-1/2 lg:w-full 2xl:w-full ">
            <h1 className="text-[20px] font-medium uppercase tracking-[5px]	 text-peach mb-4">
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
