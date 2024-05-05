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
        <div className="description-md ">
          Our <span style={{ color: '#FBC311' }}>Services</span>
        </div>
        <h4 style={{ color: 'white', lineHeight: '0.3' }}>We exist to cater to all your chemical requirements.</h4>
        <h6 style={{ color: 'white', lineHeight: '0.3' }}>
          We offer a wide range of products and services, where chemicals are delivered to the precise specifications of the customer’s requirement; meeting the international standards.
        </h6>
        <div className='App'>
          <Row justify="space-evenly">
            <Col xs={{ span: 8 }} lg={{ span: 6, offset: 4 }} >
              <img src={img1} alt="Sample" style={{ width: '50%', height: 'auto', maxHeight: '125px', }} />
              <h3 style={{ color: '#FBC311', wordWrap: 'break-word', lineHeight: '0.9' }}>
                Import and Distribution
              </h3>
              <p style={{ color: 'white', wordWrap: 'break-word' }}>
                We have a global network which enables us to import products from various countries, and our efficient warehousing chain helps us to distribute them at effective cost.
              </p>
            </Col>
            <Col xs={{ span: 8 }} lg={{ span: 6, offset: 4 }} >
              <img src={img2} alt="Sample" style={{ width: '50%', height: 'auto', maxHeight: '125px', }} />
              <h3 style={{ color: '#FBC311', wordWrap: 'break-word', lineHeight: '0.9' }}>
                International Trade
              </h3>
              <p style={{ color: 'white', wordWrap: 'break-word' }}>
                With a strong backing in the domestic market we have been successful in making a mark in international trade as well. We operate regular trade with neighbouring countries and the european region.
              </p>
            </Col>
            <Col xs={{ span: 8 }} lg={{ span: 6, offset: 4 }} >
              <img src={img3} alt="Sample" style={{ width: '50%', height: 'auto', maxHeight: '125px', }} />
              <h3 style={{ color: '#FBC311', wordWrap: 'break-word', lineHeight: '0.9' }}>
                Indenting
              </h3>
              <p style={{ color: 'white', wordWrap: 'break-word' }}>
                We provide chemical indenting services and operate to connect manufacturers and users over the Indian and International market.
              </p>
            </Col>
            <Col xs={{ span: 8 }} lg={{ span: 6, offset: 4 }} >
              <img src={img4} alt="Sample" style={{ width: '50%', height: 'auto', maxHeight: '125px', }} />
              <h3 style={{ color: '#FBC311', wordWrap: 'break-word', lineHeight: '0.9' }}>
                Export
              </h3>
              <p style={{ color: 'white', wordWrap: 'break-word' }}>
                We have recently started enganging in the export business which mainly involves bulk export of Aromatic Ingredients and Food Chemicals to the international market.
              </p>
            </Col>
          </Row>
        </div>

      </div>
    </>
  )
}

export default Products