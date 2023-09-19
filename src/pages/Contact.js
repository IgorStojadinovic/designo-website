import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CA from "../assets/images/contact/mobile/ca.svg"
import AU from "../assets/images/contact/mobile/au.svg"
import UK from "../assets/images/contact/mobile/uk.svg"

const Contact = () => {
  return(
    <>
  <section  className='relative bg-peach flex flex-col items-center py-[72px] px-[24px] overflow-hidden md:mx-[40px] md:rounded-lg md:items-start md:px-[58px] 2xl:flex-row 2xl:mx-[256px]'>
      <div className='z-40 text-white text-center mb-[48px] md:text-left md:w-[70%] 2xl:w-[50%] 2xl:p-[40px]'>
        <h1 className='text-3xl  mb-[24px] md:font-medium md:text-4xl'>Contact Us</h1>
        <p className='leading-[25px] font-light text-[16px] md:text-[16px] '>Ready to take it to the next level? Let's talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that's relatable to your users, drop us a line.</p>
      </div>
    <form className='flex flex-col items-center  text-white w-full 2xl:w-[50%] 2xl:p-[40px]'>
      <input name="name"type="text" placeholder='Name' className='form-input '/>
      <input name="email" type="email" placeholder='Email' className='form-input '/>
      <input name="phone" type="text" placeholder='Phone Number' className='form-input '/>
      <textarea rows={5} placeholder='Your Message' className='form-input-textarea '> 
      </textarea>
      <Button type="light" text="Submit" />
    </form>
    <div className='oval'></div>
  </section>
   <div className='grid grid-cols-1 gap-10 my-[150px] md:grid-cols-3 md:mx-[24px] 2xl:mx-[256px] '>
      <div className='flex flex-col items-center'>
        <img src={CA} alt='ca-icon'/>
        <h1 className='my-12 uppercase text-2xl'>Canada</h1>
        <Link to="/locations">
          <Button type="dark" text="See Location" />
        </Link>
      </div>
      <div className='flex flex-col items-center'>
        <img src={AU} alt='au-icon'/>
        <h1 className='my-12 uppercase text-2xl'>Australia</h1>
        <Link to="/locations">
          <Button type="dark" text="See Location" />
        </Link>
      </div>
      <div className='flex flex-col items-center'>
        <img src={UK} alt='uk-icon'/>
        <h1 className='my-12 uppercase text-2xl'>United Kingdom</h1>
        <Link to="/locations">
          <Button type="dark" text="See Location" />
        </Link>
      </div>
    </div>
 </>
  ) 
  
};

export default Contact;
