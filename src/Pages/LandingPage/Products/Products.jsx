import React, { useState } from 'react';
import { Button, Row, Col } from 'antd';
import img1 from '../../../Assets/images/Untitled-1-01.png';
import img2 from '../../../Assets/images/Untitled-1-02.png';
import img3 from '../../../Assets/images/Untitled-1-03.png';
import img4 from '../../../Assets/images/Untitled-1-04.png';

const Products = () => {

  return (
    <>
      <div className="container-products">
        <br />
        <div className="description-md " style={{ fontFamily: 'Open Sans, Arial, sans-serif' }}>
          Our <span style={{ color: '#FBC311', fontWeight: '600' }}>Services</span>
        </div>
        <p className='App' style={{ color: 'white', wordWrap: 'break-word', width: '65%' }}>
          <span style={{ fontWeight: '700'}}>We exist to cater to all your chemical requirements.</span>
          <br />
          We offer a wide range of products and services, where chemicals are delivered to the precise specifications of the customer’s requirement; meeting the international standards.
        </p>
        <br />
        <br />
        <div className='App industrialize' >
          <Row justify="center" gutter={[16,24]}>
            <Col xs={{ span: 24 }} lg={{ span: 8, offset: 1, }} >
              <img className='landing-image' src={img1} alt="Sample" style={{ width: '32%', height: 'auto', }} />
              <p style={{ color: '#FBC311', wordWrap: 'break-word', lineHeight: '0.9', fontFamily: 'Open Sans, sans-serif', fontSize: '27px' }}>
                <span style={{ fontWeight: '700', lineHeight: '1.2'}}>Import and Distribution </span><br/>
                <span style={{color: 'white', fontSize: '15px', }}>We have a global network which enables us to import products from various countries, and our efficient warehousing chain helps us to distribute them at effective cost. </span>
              </p>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 8, offset: 1 }} >
              <img src={img2} alt="Sample" style={{ width: '32%', height: 'auto', maxHeight: '125px', }} />
              <p style={{ color: '#FBC311', wordWrap: 'break-word', lineHeight: '0.9', fontFamily: 'Open Sans, sans-serif', fontSize: '27px' }}>
              <span style={{ fontWeight: '700', lineHeight: '1.2'}}>International Trade</span><br/>
              <span style={{color: 'white', fontSize: '15px', }}>With a strong backing in the domestic market we have been successful in making a mark in international trade as well. We operate regular trade with neighbouring countries and the european region.</span>
              </p>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 8, offset: 1 }} >
              <img src={img3} alt="Sample" style={{ width: '32%', height: 'auto', maxHeight: '125px', }} />
              <p style={{ color: '#FBC311', wordWrap: 'break-word', lineHeight: '0.9', fontFamily: 'Open Sans, sans-serif', fontSize: '27px' }}>
              <span style={{ fontWeight: '700', lineHeight: '1.2'}}>Indenting</span><br/>
              <span style={{color: 'white', fontSize: '15px', }}>We provide chemical indenting services and operate to connect manufacturers and users over the Indian and International market.</span>
              </p>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 8, offset: 1 }} >
              <img src={img4} alt="Sample" style={{ width: '32%', height: 'auto', maxHeight: '125px', }} />
              <p style={{ color: '#FBC311', wordWrap: 'break-word', lineHeight: '0.9', fontFamily: 'Open Sans, sans-serif', fontSize: '27px' }}>
              <span style={{ fontWeight: '700', lineHeight: '1.2'}}>Export</span><br/>
              <span style={{color: 'white', fontSize: '15px', }}>We have recently started enganging in the export business which mainly involves bulk export of Aromatic Ingredients and Food Chemicals to the international market.</span>
              </p>
            </Col>
          </Row>
          <br />
        </div>
        <br />
      </div>
    </>
  )
}

export default Products