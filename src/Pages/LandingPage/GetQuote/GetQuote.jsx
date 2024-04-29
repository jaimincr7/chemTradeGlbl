import React, { useState } from 'react';
import { Button, Row } from 'antd';

const GetQuote = () => {


  return (
    <>
      <div className="container-get-quote">
        <br />
        <div style={{ fontSize: '40px' }}>
          <span style={{ color: 'white' }}>Get a </span><span style={{ color: '#FBC311' }}>Quote Today</span>
        </div>
        <p style={{ color: 'white', width: '35%' }}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece old.
        </p>
        <div>
          <Button shape="round" style={{ borderWidth: '0.5px', width: '140px' }}>Inquire Now</Button>
        </div>
        <br />
        <br />
      </div>
    </>
  )
}

export default GetQuote