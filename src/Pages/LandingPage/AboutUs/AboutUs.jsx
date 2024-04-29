import React from 'react';
import smallAboutUs from '../../../Assets/images/smallAboutUs.jpg'
import { Col, Row, Button } from 'antd';

const AboutUs = () => {

  return (
    <>
      <div className='AboutUs App' style={{ marginTop: '20px', marginBottom: '20px' }}>
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
          <span style={{ color: '#00ff01', fontSize: '3em', WebkitTextStroke: '5px black' }}>since 1998</span>
        </div>
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Row>
            <Col span={2}>
            </Col>
            <Col span={8}>
              <div className='App'>
                <span style={{ fontWeight: 'normal', fontSize: '20px', color: '#A2328E' }}> Chemtrade Global </span>
                <span style={{ fontWeight: 'normal', fontSize: '20px', color: '#FBC311' }}>  Impex LLP </span>
                <br />
                <div style={{ marginTop: '10px' }}>
                  At Chemtrade Global Impex LLP we are dedicated to meeting all our customers' chemical and solvent needs promptly and efficiently. Our exceptional logistics and comprehensive range of services in the chemical industry guarantee our dependability and efficiency.
                </div>
                <div style={{ marginTop: '15px' }}>
                  <Button shape="round" style={{ borderWidth: '0.5px', borderColor: '#FBC311', width: '140px' }}>About Us</Button>
                </div>
              </div>
            </Col>
            <Col span={2}>
            </Col>
            <Col span={8}>
              <div className='AboutUsPic' style={{ backgroundColor: 'grey', margin: '25px' }}>
                <img src={smallAboutUs} alt="Sample" />
              </div>
            </Col>
            <Col span={2}>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default AboutUs