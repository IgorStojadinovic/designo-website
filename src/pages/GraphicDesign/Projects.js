import React from "react";

const Projects = () => {
  return (
    <>
      <section className="grid grid-cols-1 gap-10 px-6 mt-24 md:mt-[120px] md:px-10 lg:grid-cols-3 2xl:px-[164px] 2xl:grid-cols-3 xl:px-[164px] 2xl:px-[256px] 2xl:my-[160px]">
        <figure className="text-center flex flex-col md:flex-row md:h-auto lg:flex-col rounded-lg overflow-hidden">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/graphic-design/desktop/image-change.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="bg-figure py-8 px-7 w-full md:flex flex-col justify-center md:w-1/2 lg:w-full 2xl:w-full ">
            <h1 className="text-[20px] font-medium uppercase tracking-[5px]	 text-peach mb-4">
             Tim Brown
            </h1>
            <p>A book cover designed for Tim Brown’s new release, ‘Change’</p>
          </figcaption>
        </figure>
       
        <figure className="text-center flex flex-col md:flex-row md:h-auto lg:flex-col rounded-lg overflow-hidden">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/graphic-design/desktop/image-boxed-water.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="bg-figure py-8 px-7 w-full md:flex flex-col justify-center md:w-1/2 lg:w-full 2xl:w-full ">
            <h1 className="text-[20px] font-medium uppercase tracking-[5px]	 text-peach mb-4">
             Boxed Water
            </h1>
            <p>A simple packaging concept made for Boxed Water</p>
          </figcaption>
        </figure>
        
        <figure className="text-center flex flex-col md:flex-row md:h-auto lg:flex-col rounded-lg overflow-hidden">
          <picture className="md:w-[50%] lg:w-full">
            <img
              src={require("../../assets/images/graphic-design/desktop/image-science.jpg")}
              alt="card"
              className="h-full w-full"
            />
          </picture>
          <figcaption className="bg-figure py-8 px-7 w-full md:flex flex-col justify-center md:w-1/2 lg:w-full 2xl:w-full ">
            <h1 className="text-[20px] font-medium uppercase tracking-[5px]	 text-peach mb-4">
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
