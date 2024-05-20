import React from 'react';
import headerIcon from '../../Assets/images/headerIcon.png';
import { Col, Row, Menu, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { EnvironmentOutlined, MailOutlined, LinkedinFilled } from '@ant-design/icons';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-footer">
        <br />
        <br />
        <Row justify="space-around">
          <Col xs={{ span: 18 }} lg={{ span: 7 }}>
            <div className='App footer-small' style={{ backgroundColor: 'white' }} onClick={() => window.scrollTo(0, 0)}>
              <img src={headerIcon} alt="Sample" style={{ maxWidth: '50%', height: 'auto', maxHeight: '100px' }} />
            </div>
            <p style={{ wordWrap: 'break-word', color: 'white', fontSize: '15px', fontWeight:'400' }}>At Chemtrade Global Impex LLP we are dedicated to meeting all our customers' chemical and solvent needs promptly and efficiently.</p>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 5 }}>
            <div className='App' >
              <ul style={{ color: 'white', fontWeight: '400', fontSize: '18px' }} onClick={() => window.scrollTo(0, 0)}>
                <p onClick={() => { navigate('/landing') }}>Home</p>
                <p onClick={() => { navigate('/about-us') }}>About</p>
                <p onClick={() => { navigate('/products') }}>Products</p>
                <p onClick={() => { navigate('/industry') }}>Industries</p>
                <p onClick={() => { navigate('/contact-us') }}>Contact</p>
              </ul>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 5 }}>
            <div>
              <ul className='chotu-letters-footers' style={{ wordWrap: 'break-word', color: 'white' }}>
                <h3 style={{ fontWeight: '700', fontSize: '20px' }}>Follow Us:  &nbsp;&nbsp;<LinkedinFilled /></h3>
                <h3 style={{ fontWeight: '700', fontSize: '20px' }}>Contact Us </h3>
                <p><EnvironmentOutlined /> Sawali Society, Laxmi Nagar, <br /> Ghatkopar East, Mumbai, <br /> Maharashtra 400075</p>
                <p><MailOutlined /> info@cgil.com </p>
              </ul>
            </div>
          </Col>
        </Row>
        <br />
      </div>
      <div className='line-footer '>
        <Row justify="space-around">
          <Col xs={{ span:14 }} lg={{ span: 4 }} className='App'>
            <p style={{ wordWrap: 'break-word', color: 'white', fontFamily: 'Quicksand', fontWeight: '500', }}>© 2024 All Rights Reserved </p>
          </Col>
          <Col xs={{ span: 12 }} lg={{ span: 10 }} style={{ position: 'relative'}}>
            <p style={{ wordWrap: 'break-word', color: 'white', fontFamily: 'Quicksand', fontWeight: '500', }} className='footer-text'>Chemtrade Global Impex LLP</p>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Footer