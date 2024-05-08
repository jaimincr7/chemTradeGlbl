import React from 'react';
import Header from '../Header/Header';
import Industry from './Industry/Industry';
import Footer from '../Footer/Footer';

const Industries = () => {

  return (
    <>
      <div style={{ overflowX: 'hidden' }}>
        <Header />
        <Industry />
        <Footer />
      </div>
    </>
  )
}

export default Industries