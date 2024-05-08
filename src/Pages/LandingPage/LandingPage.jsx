import React, { useState } from 'react';
import Home from './Home/Home';
import Header from '../Header/Header';
import AboutUs from './AboutUs/AboutUs';
import Products from './Products/Products';
import Stats from './Stats/Stats';
import Chemicals from './Chemicals/Chemicals';
import GetQuote from './GetQuote/GetQuote';
import Footer from '../Footer/Footer';

const LandingPage = () => {
  

  return (
    <>
      <Header/>
      <Home/>
      <AboutUs/>
      <Products/>
      <Stats />
      <Chemicals />
      <GetQuote />
      <Footer />
    </>
  )
}

export default LandingPage