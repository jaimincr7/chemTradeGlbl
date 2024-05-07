import React from 'react';
import { Button, Row, Col, Card, Form, } from 'antd';
import location from '../../../Assets/images/location.png';
import phone from '../../../Assets/images/phone.png';
import email from '../../../Assets/images/email.png';
import map from '../../../Assets/images/map.png';

const Contact = () => {
  const [form] = Form.useForm();


  return (
    <>
      <div className="container-contact-us">
        <span className="highlight-ab big-texts">Contact Us</span>
        <br />
      </div>
      <div style={{ backgroundColor: '#F5F5F5' }}>
        <br />
        <h1 className='App'>
          Contact <span style={{ color: '#FBC311' }}>Us</span>
        </h1>
        <br />
        <div className='App'>
          <Row>
            <Col span={2}>
            </Col>
            <Col span={7}>
              <img src={location} alt="Sample" style={{ maxHeight: '68px' }} />
              <h3>
                Address
              </h3>
              <p className='adres' style={{ lineHeight: '1px' }} >
                Lorem Ipsum is simpl
              </p>
              <p>
                Mumbai - 123456
              </p>
            </Col>
            <Col span={7}>
              <img src={phone} alt="Sample" style={{ maxHeight: '68px' }} />
              <h3>
                Contact
              </h3>
              <p>
                +91 1234567890
              </p>
            </Col>
            <Col span={7}>
              <img src={email} alt="Sample" style={{ maxHeight: '68px' }} />
              <h3>
                Email Id
              </h3>
              <p>
                info@cgil.com
              </p>
            </Col>
            <Col span={1}>
            </Col>
          </Row>
        </div>
        <br />
      </div>
      <br />
      <br />
      <br />
      <div className='App centeredCard '>
        <Card style={{ backgroundColor: '#F5F5F5', width: '55%', borderRadius: '15px' }}>
          <h3>Get in <span style={{ color: '#FBC311' }}>Touch</span></h3>
          <Form
            form={form}
            name="control-hooks"
          // onFinish={onFinish}
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
              <input type='text' placeholder='Contact No.: +91 9988775566' className='custom-input' />
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
      <div className='App' style={{margin: '35px'}}>
        <img className='little-contact' src={map} alt="Sample"  style={{ maxHeight: '320px'}}/>
      </div>
      <br />
      <div className='App' style={{ lineHeight: '1px' }}>
        <h3>ChemTrade Global <span style={{ color: '#FBC311' }}>Impex LLP</span></h3>
        <p>typesetting industry, Mumbai, India - 123456</p>
      </div>
      <br />
    </>
  )
}

export default Contact