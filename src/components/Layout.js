import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import Links from './shared/Links';


export const Layout = () => {
 
  return (
    <>
      <Navbar />
      <Outlet />
      {}
      <Links/>
      <Footer />
    </>
  );
};
