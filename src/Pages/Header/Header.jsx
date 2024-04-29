import React from 'react';
import headerIcon from '../../Assets/images/headerIcon.png';
import { Col, Row, Menu, Button } from 'antd';

const Header = () => {

  const items = [
    {
      label: 'Home',
      key: 'home',
    },
    {
      label: 'About',
      key: 'about',
    },
    {
      label: 'Products',
      key: 'products',
    },
    {
      label: 'Contacts',
      key: 'contacts',
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
            <div className="header-icon App">
              <img src={headerIcon} alt="Sample" style={{ maxHeight: '58px' }} />
            </div>
          </Col>
          <Col span={4}>
          </Col>
          <Col span={12}>
            <div className="header-menus">
              <Menu mode="horizontal" >
                {items.map(item => {
                  if (item.button) {
                    return (
                      <Menu.Item key={item.key}>
                        <Button shape="round" style={{ borderWidth: '0.5px',  borderColor: 'black', width: '160px' }}>Get in Touch</Button>
                      </Menu.Item>
                    );
                  } else {
                    return (
                      <Menu.Item key={item.key} icon={item.icon}>
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
    </>
  )
}

export default Header