import React from 'react';
import headerIcon from '../../Assets/images/CTLogo.png';
import { Col, Row, Menu, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: 'Home',
      key: 'home',
      url: '/landing'
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
                        <Button shape="round" onClick={() => { navigate(item.url) }} style={{ borderWidth: '0.5px', borderColor: 'black', width: '158px' }}>Get in Touch</Button>
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
    </>
  )
}

export default Header