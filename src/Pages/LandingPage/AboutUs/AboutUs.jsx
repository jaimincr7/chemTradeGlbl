import React from 'react';
import smallAboutUs from '../../../Assets/images/HomePage1.png'
import { Col, Row, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='AboutUs' style={{ marginTop: '20px', marginBottom: '20px', }}>
        <div className='App' style={{ marginTop: '20px', marginBottom: '20px' }}>
          <span style={{ color: '#00ff01', fontSize: '3em', WebkitTextStroke: '5px black' }}>since 1998</span>
        </div>
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Row >
            <Col xs={{ span: 24 }} lg={{ span: 9, offset: 3 }}>
              <br />
              <br />
              <div className='sm-about-us' >
                <div className='App'>
                  <span style={{ fontWeight: 'normal', fontSize: '30px', color: '#A2328E' }}> Chemtrade Global </span>
                  <span style={{ fontWeight: 'normal', fontSize: '30px', color: '#FBC311', fontWeight: 'bold' }}>  Impex LLP </span>
                </div>
                <br />
                <div style={{ marginTop: '10px' }}>
                  At Chemtrade Global Impex LLP we are dedicated to meeting all our customers' chemical and solvent needs promptly and efficiently. Our exceptional logistics and comprehensive range of services in the chemical industry guarantee our dependability and efficiency.
                </div>
                <div style={{ marginTop: '15px' }} className='App'>
                  <Button
                    shape="round"
                    onClick={() => { navigate('/about-us') }}
                    style={{ borderWidth: '0.5px', borderColor: '#FBC311', width: '140px' }}
                  >About Us</Button>
                </div>
              </div>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 8, offset: 4 }}>
              <div className='AboutUsPic' style={{ backgroundColor: 'grey', width: '60%' }}>
                <img src={smallAboutUs} alt="Sample" style={{ maxWidth: '100%', maxHeight: '70%', width: 'auto', height: 'auto' }} />
              </div>
            </Col>
          </Row>
        </div>
      </div >
    </>
  )
}

export default AboutUs