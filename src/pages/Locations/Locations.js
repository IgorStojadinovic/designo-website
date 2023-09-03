import React from 'react'

const Locations = () => {
  return (
    <section className='md:mx-[40px] 2xl:mx-[256px]'>
        <figure className=" text-center mb-8 overflow-hidden flex flex-col lg:flex-row-reverse justify-between md:mb-0 ">
          <picture className="md:mb-8 md:h-[300px] rounded-lg lg:w-[28%]">
            <img
              src={require("../../assets/images/locations/desktop/image-map-canada.png")}
              alt="card"
              className="h-full w-full rounded-lg md:object-cover lg:object-cover"
            />
          </picture>
          <figcaption className="bg-figure items-center rounded-lg flex flex-col justify-evenly py-[80px] px-[24px] w-full md:flex md:py-[24px] md:w-full md:h-[300px] flex-col  md:w-1/2 lg:w-[70%] lg:items-start ">
            <h1 className="text-[20px] font-medium uppercase tracking-[5px]	 text-peach lg:text-4xl ">
             Canada
            </h1>
            <div className='lg:flex flex-row items-center justify-start w-full'>
              <div className='my-4 lg:mr-5'>
                  <p className='font-semibold'>Designo AU Office</p>
                  <p>3886 Wellington Street</p>
                  <p>Toronto, Ontario M9C 3J5</p>
              </div>
              <div>
                  <p className='font-semibold'>Contact</p>
                  <p>Contact P : +1 253-863-8967</p>
                  <p>M : contact@designo.co</p>
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className=" text-center mb-8 overflow-hidden flex flex-col lg:flex-row justify-between md:mb-0 ">
          <picture className="md:mb-8 md:h-[300px] rounded-lg lg:w-[28%]">
            <img
              src={require("../../assets/images/locations/desktop/image-map-australia.png")}
              alt="card"
              className="h-full w-full rounded-lg md:object-cover lg:object-cover"
            />
          </picture>
          <figcaption className="bg-figure items-center rounded-lg flex flex-col justify-evenly py-[80px] px-[24px] w-full md:flex md:py-[24px] md:w-full md:h-[300px] flex-col  md:w-1/2 lg:w-[70%] lg:items-start ">
            <h1 className="text-[20px] font-medium uppercase tracking-[5px]	 text-peach lg:text-4xl ">
            Australia
            </h1>
            <div className='lg:flex flex-row items-center justify-start w-full'>
              <div className='my-4 lg:mr-5'>
                  <p className='font-semibold'>Designo AU Office</p>
                  <p>19 Balonne Street</p>
                  <p>New South Wales 2443</p>
              </div>
              <div>
                  <p className='font-semibold'>Contact</p>
                  <p>Contact P : +1 253-863-8967</p>
                  <p>M : contact@designo.co</p>
              </div>
            </div>
          </figcaption>
        </figure> 
        <figure className=" text-center mb-8 overflow-hidden flex flex-col lg:flex-row-reverse justify-between md:mb-[160px] ">
          <picture className="md:mb-8 md:h-[300px] rounded-lg lg:w-[28%]">
            <img
              src={require("../../assets/images/locations/desktop/image-map-united-kingdom.png")}
              alt="card"
              className="h-full w-full rounded-lg md:object-cover lg:object-cover"
            />
          </picture>
          <figcaption className="bg-figure items-center rounded-lg flex flex-col justify-evenly py-[80px] px-[24px] w-full md:flex md:py-[24px] md:w-full md:h-[300px] flex-col  md:w-1/2 lg:w-[70%] lg:items-start ">
            <h1 className="text-[20px] font-medium uppercase tracking-[5px]	 text-peach lg:text-4xl ">
            United Kingdom
            </h1>
            <div className='lg:flex flex-row items-center justify-start w-full'>
              <div className='my-4 lg:mr-5'>
                  <p className='font-semibold'>Designo UK Office</p>
                  <p>13 Colorado Way</p>
                  <p>Rhyd-y-fro SA8 9GA</p>
              </div>
              <div>
                  <p className='font-semibold'>Contact</p>
                  <p>P : 078 3115 1400</p>
                  <p>M : contact@designo.uk</p>
              </div>
            </div>
          </figcaption>
        </figure> 
    </section>
  )
}

export default Locations