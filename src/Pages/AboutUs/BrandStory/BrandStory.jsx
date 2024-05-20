import React from 'react';
import { Row, Col, Card } from 'antd';
import abtUs from '../../../Assets/images/AboutPage1.png';

const BrandStory = () => {

  return (
    <>
      <div className="container-about-us">
        <span className="highlight-ab big-texts" style={{ fontFamily: 'Open Sans, Arial, sans-serif', fontWeight: '800', fontSize: '68px' }}>Brand Story</span>
        <br />
      </div>
      <br />
      <div>
        <br />
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={{ span: 24 }} lg={{ span: 6 }}>
            <div className='App'>
              <img src={abtUs} alt="Sample" style={{ maxHeight: '350px' }} />

            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 6, offset: 1 }}>
            <div className='App'>
              <h2 style={{ fontFamily: 'Open Sans, Arial, sans-serif', fontWeight: '600' }}>
                From around the <span style={{ color: '#FBC311', fontWeight: '800' }}>World</span> to your <span style={{ color: '#FBC311', fontWeight: '800' }}> Doorstep</span> 
              </h2>
              <p className='about-small-para' style={{ fontSize: 'small', }}>
                With a long-standing experience of over 30 years, Mr. Ashish K. Shah the founding partner, along with the efforts of his professionally specialised team, started this organization with a vision to establish the largest supply chain in order to cater to the wide range of industries both domestically and internationally.
                Starting from a small business, involved in supply of chemical ingredients and solvents to a single market; Chemtrade Global Impex LLP has presently grown into a successful service provider to the industry of chemicals
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <br />
      <div className='continer-about-us-landing'>
        <p className='glbl-prsc' style={{ color: 'white', fontFamily: 'Open Sans, Arial, sans-serif', lineHeight: '0.1' }}>Global
          <span style={{ color: '#FBC311', fontWeight: '700'}}> Presence</span>
        </p>
        <p style={{ color: 'white', fontFamily: 'Open Sans, Arial, sans-serif', fontSize: '16px', width: '75%', fontWeight: '400' }}>
          We have laid a unique footprint with operations across the Indian Subcontinent and in over 15 countries. Our operations are handled by an entrepreneurial team of well trained, dedicated employees who are driven by a sense of commitment and professionalism. With our head office based in Mumbai and branch offices in Hyderabad, Gujarat, Delhi, Kolkata, we have a broader reach to meet the requirements of our clients than any other supplier currently.
        </p>
      </div>
      <div className="container-about-us-small App">
        <h1 className="highlight-ab big-texts" style={{ color: 'black' }}>Brand <span style={{ color: '#FBC311' }}>Story</span></h1>
        <br />
      </div>
      <div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 20, offset: 2 }} lg={{ span: 8, offset: 3 }}>
            <Card style={{ backgroundColor: '#EFEFEF' }}>
              <h3 className='App'>Mission</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s.
              </p>
            </Card>
          </Col>
          <Col xs={{ span: 20, offset: 2 }} lg={{ span: 8, offset: 3 }}>
            <Card style={{ backgroundColor: '#EFEFEF' }}>
              <h3 className='App'>Vision</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s.
              </p>
            </Card>
          </Col>
        </Row>
      </div>
      <br />
      <br />
    </>
  )
}

export default BrandStory