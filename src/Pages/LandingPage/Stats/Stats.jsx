import React from 'react';
import { Col, Row, Button } from 'antd';

const Stats = () => {

  return (
    <>
      <div className='Stats App' >
        <br />
        <div >
          <Row>
            <Col span={2}>
            </Col>
            <Col span={5}>
              <div className='App'>
                <span style={{ fontSize: '75px', fontWeight: 'bold', color: '#FBC311' }}>03</span>
                <br />
                <span style={{ fontSize: '20px' }}>Branches</span>
              </div>
            </Col>
            <Col span={5}>
              <div className='App'>
                <span style={{ fontSize: '75px', fontWeight: 'bold', color: '#FBC311' }}>25+</span>
                <br />
                <span style={{ fontSize: '20px' }}>Countries Connected</span>
              </div>
            </Col>
            <Col span={5}>
              <div className='App'>
                <span style={{ fontSize: '75px', fontWeight: 'bold', color: '#FBC311' }}>3k+ </span>
                <br />
                <span style={{ fontSize: '20px' }}>Clients</span>
              </div>
            </Col>
            <Col span={5}>
              <div className='App'>
                <span style={{ fontSize: '75px', fontWeight: 'bold', color: '#FBC311' }}>100+ </span>
                <br />
                <span style={{ fontSize: '20px' }}>Products</span>
              </div>
            </Col>
            <Col span={2}>
            </Col>
          </Row>
        </div>
        <br />
        <br />
      </div>
    </>
  )
}

export default Stats