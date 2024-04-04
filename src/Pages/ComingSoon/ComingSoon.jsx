import React, { useState } from 'react';
import logo from '../../Assets/images/CTLogo.png';
import { Button, Modal, Form, Space, Input, } from 'antd';
import emailjs from '@emailjs/browser';

const ComingSoon = () => {
  const [form] = Form.useForm();

  const [openGetInTouch, setOpenGetInTouch] = useState(false);

  //For the form part
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

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
      
    form.resetFields();
    setOpenGetInTouch(false);
  };

  //This is for the Modal for get in Touch 
  const showModal = () => {
    setOpenGetInTouch(true);
  };

  const handleCancel = () => {
    setOpenGetInTouch(false);
  };

  return (
    <>
      <div>
        <div className="container">
          <div >
            <div className="center-text">
              <img src={logo} alt="Sample" style={{ width: '250px', height: 'auto' }} />
            </div>
            <h1 className="heading">
              Coming <span className="highlight">Soon!</span>
            </h1>
            <p className="description center-text">
              Our Website is Under maintenance <br />
              <span style={{ color: '#FFFFFF', fontWeight: 700 }}>
                Stay Tuned!
              </span>
            </p>
            <div style={{ margin: '0 auto', width: '198px', textAlign: 'center' }}>
              <Button shape="round" onClick={showModal}>Get in Touch</Button>

            </div>
          </div>
        </div>
      </div>
      <Modal
        open={openGetInTouch}
        title="Get in touch"
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          {...layout}
          form={form}
          name="control-hooks"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
        >
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="contact_number" label="Contact Number" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="contact_email" label="Contact Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="company" label="Company" >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description" >
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </>

  )
}

export default ComingSoon