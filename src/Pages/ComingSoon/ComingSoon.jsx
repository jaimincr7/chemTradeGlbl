import React from 'react';
import logo from '../../Assets/images/CTLogo.png';
import { Button } from 'antd';

const ComingSoon = () => {
  return (
    <div>
      <div className="container">
        <div >
          <div className="center-text">
            <img src={logo} alt="Sample" style={{ width: '250px', height: 'auto' }}/>
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
            <Button shape="round">Get in Touch</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon