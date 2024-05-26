import React from 'react';
import { Button, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

const GetQuote = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-get-quote">
        <br />
        <div style={{ fontSize: '40px', fontFamily: 'Open Sans, Arial, sans-serif' }}>
          <span style={{ color: 'white' }}>Get a </span><span style={{ color: '#FBC311', fontWeight: '700' }}>Quote Today</span>
        </div>
        <br />
        <br />
        <div>
          <Button shape="round" onClick={() => {navigate('/contact-us')}} style={{ borderWidth: '1.5px', width: '140px', borderColor: '#FBC311' }}>Inquire Now</Button>
        </div>
        <br />
        <br />
      </div>
    </>
  )
}

export default GetQuote