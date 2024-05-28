import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import headerIcon from '../../Assets/images/CTLogo.png';
import { Col, Row, Menu, Button, Modal, Form, Space, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
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
    //This is random comment
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

  const items = [
    {
      label: 'Home',
      key: 'home',
      url: '/'
    },
    {
      label: 'About',
      key: 'about',
      url: '/about-us',
    },
    {
      label: 'Products',
      key: 'products',
      url: '/products',
    },
    {
      label: 'Industries',
      key: 'industry',
      url: '/industry',
    },
    {
      label: 'Contacts',
      key: 'contacts',
      url: '/contact-us'
    },
    {
      label: 'Get in Touch',
      key: 'get_in_touch',
      button: true

    }
  ]

  return (
    <>
      <div className="">
        <Row align="middle">
          <Col span={8}>
            <div className=" App">
              <img className='header-icon' src={headerIcon} alt="Sample" style={{ paddingTop: '6px', paddingBottom: '2px' }} />
            </div>
          </Col>
          <Col span={5}>
          </Col>
          <Col span={10}>
            <div className="header-menus">
              <Menu mode="horizontal" >
                {items.map(item => {
                  if (item.button) {
                    return (
                      <Menu.Item key={item.key} >
                        <Button shape="round" onClick={() => { showModal() }} style={{ borderWidth: '0.5px', borderColor: 'black', width: '158px' }}>Get in Touch</Button>
                      </Menu.Item>
                    );
                  } else {
                    return (
                      <Menu.Item key={item.key} onClick={() => { navigate(item.url) }}>
                        {item.label}
                      </Menu.Item>
                    );
                  }
                })}
              </Menu>
            </div>
          </Col>
        </Row>
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

export default Header