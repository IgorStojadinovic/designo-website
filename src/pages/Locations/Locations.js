import React,{useEffect} from 'react'

const Locations = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  },[])

  return (
    <section className='location-section '>
        <figure className="location-figure-1">
          <picture className="location-figure-picture">
            <img
              src={require("../../assets/images/locations/desktop/image-map-canada.png")}
              alt="card"
              className="h-full w-full rounded-lg md:object-cover lg:object-cover"
            />
          </picture>
          <figcaption className="location-figure-figcaption">
            <h1 className="location-figure-title ">
             Canada
            </h1>
            <div className='lg:flex flex-row items-center justify-start w-full'>
              <div className='my-4 lg:mr-5  lg:text-left'>
                  <p className='font-semibold'>Designo AU Office</p>
                  <p>3886 Wellington Street</p>
                  <p>Toronto, Ontario M9C 3J5</p>
              </div>
              <div className='lg:text-left'>
                  <p className='font-semibold'>Contact</p>
                  <p>Contact P : +1 253-863-8967</p>
                  <p>M : contact@designo.co</p>
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="location-figure-2">
          <picture className="location-figure-picture">
            <img
              src={require("../../assets/images/locations/desktop/image-map-australia.png")}
              alt="card"
              className="h-full w-full rounded-lg md:object-cover lg:object-cover"
            />
          </picture>
          <figcaption className="location-figure-figcaption  lg:justify-end lg:items-end">
            <h1 className="location-figure-title justify-end  ">
            Australia
            </h1>
            <div className='lg:flex flex-row items-center  lg:justify-end w-full'>
              <div className='my-4 lg:mr-5 lg:text-right'>
                  <p className='font-semibold'>Designo AU Office</p>
                  <p>19 Balonne Street</p>
                  <p>New South Wales 2443</p>
              </div>
              <div className='lg:text-right'>
                  <p className='font-semibold'>Contact</p>
                  <p>Contact P : +1 253-863-8967</p>
                  <p>M : contact@designo.co</p>
              </div>
            </div>
          </figcaption>
        </figure> 
        <figure className="location-figure-3">
          <picture className="location-figure-picture">
            <img
              src={require("../../assets/images/locations/desktop/image-map-united-kingdom.png")}
              alt="card"
              className="h-full w-full rounded-lg md:object-cover lg:object-cover"
            />
          </picture>
          <figcaption className="location-figure-figcaption ">
            <h1 className="location-figure-title ">
            United Kingdom
            </h1>
            <div className='lg:flex flex-row items-center justify-start w-full'>
              <div className='my-4 lg:mr-5 lg:text-left'>
                  <p className='font-semibold'>Designo UK Office</p>
                  <p>13 Colorado Way</p>
                  <p>Rhyd-y-fro SA8 9GA</p>
              </div>
              <div className='lg:text-left'>
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