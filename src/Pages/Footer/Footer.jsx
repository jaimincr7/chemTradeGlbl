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
          <Col xs={{ span: 18 }} lg={{ span: 4 }}>
            <div className='App footer-small' style={{ backgroundColor: 'white' }} onClick={() => window.scrollTo(0, 0)}>
              <img src={headerIcon} alt="Sample" style={{ maxWidth: '50%', height: 'auto', maxHeight: '100px' }} />
            </div>
            <p style={{ wordWrap: 'break-word', color: 'white' }}>Two Liner will be places here behind the logo</p>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 5 }}>
            <div className='App' >
              <ul className='chotu-letters' style={{ wordWrap: 'break-word', color: 'white' }} onClick={() => window.scrollTo(0, 0)}>
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
              <ul className='chotu-letters' style={{ wordWrap: 'break-word', color: 'white' }}>
                <h3 style={{ fontWeight: '600' }}>Follow Us: <LinkedinFilled /></h3>
                <h3 style={{ fontWeight: '600' }}>Contact Us </h3>
                <p><EnvironmentOutlined /> Sawali Society, Laxmi Nagar, <br /> Ghatkopar East, Mumbai, <br /> Maharashtra 400075</p>
                <p><MailOutlined /> info@cgil.com </p>
              </ul>
            </div>
          </Col>
        </Row>
        <br />
      </div>
    </>
  )
}

export default Footer