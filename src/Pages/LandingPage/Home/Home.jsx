import React, { useState } from 'react';
import { Button, Row } from 'antd';

const Home = () => {


  return (
    <>
      <div className="container" style={{ fontFamily: 'Open Sans, Arial, sans-serif'}}>
        <span className="highlight-md big-texts" style={{ fontWeight: '700'}}>25 Years Strong</span>
        <div className="description-md center-text">
          Partnering for Success
        </div>
        <br />
        <div style={{ margin: '15px auto', width: '198px', textAlign: 'center' }}>
          <Button shape="round" >Know More</Button>
        </div>
      </div>
    </>
  )
}

export default Home