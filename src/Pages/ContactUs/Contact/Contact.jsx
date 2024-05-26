import React from 'react';
import { Button, Row, Col, Card, Form, } from 'antd';
import location from '../../../Assets/images/location.png';
import phone from '../../../Assets/images/phone.png';
import email from '../../../Assets/images/email.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    emailjs
      .send('service_bq6wuhh', 'template_xslubdk', values, {
        publicKey: 'rRONxuEeNPdBVCGk0',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    //This is random comment
    form.resetFields();
  };

  return (
    <>
      <div className="container-contact-us">
        <span className="highlight-ab big-texts about-small-para" style={{ fontFamily: 'Open Sans, Arial, sans-serif', fontWeight: '800', fontSize: '64px' }}>Contact Us</span>
        <br />
      </div>
      <div style={{ backgroundColor: '#F5F5F5' }}>
        <br />
        <h1 className='App'>
          Contact <span style={{ color: '#FBC311' }}>Us</span>
        </h1>
        <br />
        <div className='App'>
          <Row justify='center'>
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <img src={location} alt="Sample" style={{ maxHeight: '68px' }} />
              <h3>
                Address
              </h3>
              <p className='adres' style={{ lineHeight: '1px', fontWeight: '500' }} >
                DAMJI SHAMJI CORPORATE SQUARE
              </p>
              <p>
                Sawali Society, Laxmi Nagar,<br /> Ghatkopar East, Mumbai,<br /> Maharashtra 400075
              </p>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <img src={phone} alt="Sample" style={{ maxHeight: '68px' }} />
              <h3>
                Contact
              </h3>
              <p>
                +91 2249568800
              </p>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <img src={email} alt="Sample" style={{ maxHeight: '68px' }} />
              <h3>
                Email Id
              </h3>
              <p>
                info@cgil.com
              </p>
            </Col>
          </Row>
        </div>
        <br />
      </div>
      <br />
      <br />
      <br />
      <div className='App centeredCard'>
        <Card className='cards' style={{ backgroundColor: '#F5F5F5', }}>
          <h3>Get in <span style={{ color: '#FBC311' }}>Touch</span></h3>
          <Form
            form={form}
            name="control-hooks"
            onFinish={onFinish}
          >
            <Form.Item name="name" rules={[{ required: true }]}>
              <input type='text' placeholder='Name' className='custom-input' />
            </Form.Item>
            <Form.Item name="company" rules={[{ required: true }]}>
              <input type='text' placeholder='Company' className='custom-input' />
            </Form.Item>
            <Form.Item name="contact_email" rules={[{ required: true }]}>
              <input type='text' placeholder='Email ID' className='custom-input' />
            </Form.Item>
            <Form.Item name="contact_number" >
              <input type='text' placeholder='Contact Number' className='custom-input' />
            </Form.Item>
            <Form.Item name="message" >
              <input type='text' placeholder='Message' className='custom-input' />
            </Form.Item>
            <Form.Item >
              <Button shape="round" htmlType="submit" style={{ borderColor: '#FBC311' }}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
      <br />
      <br />
      <br />
      <div className='App' style={{ lineHeight: '1px' }}>
        <Row justify="center" gutter={[0, 16]}>
          <Col xs={{ span: 15, offset: 2 }} lg={{ span: 6, }}>
            <Card style={{ width: '85%', backgroundColor: '#F5F5F5', borderRadius: '15px' }}
              onClick={() => { window.open('https://maps.app.goo.gl/RCzbLNoqiAsaSokn6?g_st=iw', '_blank'); }}
              className='location-card'>
              <div className='App'>
                <h2>Mumbai</h2>
                <p>A-902 Damji Shamji Corporate Square, Laxmi Nagar, Ghatkopar East, Mumbai, Maharashtra - 400075</p>
              </div>
            </Card>
          </Col>
          <Col xs={{ span: 15, offset: 2 }} lg={{ span: 6, }}>
            <Card style={{ width: '85%', backgroundColor: '#F5F5F5', borderRadius: '15px' }}
              className='location-card'
              onClick={() => { window.open('https://maps.app.goo.gl/N3H7DsRaj4S1MC288?g_st=iw', '_blank'); }}>
              <div className='App'>
                <h2>Hyderabad</h2>
                <p>CFV8+F3H, Old Patigadda, Chikoti Gardens, Begumpet, Hyderabad, Telangana 500016</p>
              </div>
            </Card>
          </Col>
          <Col xs={{ span: 15, offset: 2 }} lg={{ span: 6, }}>
            <Card style={{ width: '85%', backgroundColor: '#F5F5F5', borderRadius: '15px' }}
              onClick={() => { window.open('https://maps.app.goo.gl/VcbWvwVRbm61t5Qd7?g_st=iw', '_blank'); }}
              className='location-card'>
              <div className='App'>
                <h2>Gujarat</h2>
                <p>Third Floor, Corporate Park, Corporate Park, Sector 8, Gandhidham, Gujarat 370203</p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <br />
    </>
  )
}

export default Contact