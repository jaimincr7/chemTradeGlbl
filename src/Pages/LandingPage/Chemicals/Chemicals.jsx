import React from 'react';
import { Col, Row, Button } from 'antd';
import chemicals from '../../../Assets/images/chemicals.png';

const Chemicals = () => {

  return (
    <>
      <div className='Chemicals App' >
        <br />
        <div style={{ fontSize: '33px', fontFamily: 'Open Sans' }}>
          Speciality <span style={{ fontWeight: 'bold', color: '#FBC311' }}>Chemicals</span>
        </div>
        <br />
        <div style={{ marginTop: '20px', }}>
          <Row>
            <Col span={3}>
            </Col>
            <Col span={6}>
              <div className='App'>
                <img src={chemicals} alt="Sample" style={{ maxHeight: '128px' }} />
                <br />
                <span style={{ fontSize: '13px', fontWeight: 'bold' }}>Di Methyl Formamide</span>
              </div>
            </Col>
            <Col span={6}>
              <div className='App'>
                <img src={chemicals} alt="Sample" style={{ maxHeight: '128px' }} />
                <br />
                <span style={{ fontSize: '13px', fontWeight: 'bold' }}>Sodium Formate</span>
              </div>
            </Col>
            <Col span={6}>
              <div className='App'>
                <img src={chemicals} alt="Sample" style={{ maxHeight: '128px' }} />
                <br />
                <span style={{ fontSize: '13px', fontWeight: 'bold' }}>Pentaerythritol</span>
              </div>
            </Col>
            <Col span={1}>
            </Col>
          </Row>
          <Row>
            <Col span={4}>
            </Col>
            <Col span={8}>
              <div className='App'>
                <img src={chemicals} alt="Sample" style={{ maxHeight: '128px' }} />
                <br />
                <span style={{ fontSize: '13px', fontWeight: 'bold' }}>Solvent C-9</span>
              </div>
            </Col>
            <Col span={8}>
              <div className='App'>
                <img src={chemicals} alt="Sample" style={{ maxHeight: '128px' }} />
                <br />
                <span style={{ fontSize: '13px', fontWeight: 'bold' }}>Hexane</span>
              </div>
            </Col>
            <Col span={4}>
            </Col>
          </Row>
          <br />
          <div style={{ marginTop: '15px' }}>
            <Button shape="round" style={{ borderWidth: '0.5px', width: '140px' }}>View Products</Button>
          </div>
          <br />
        </div>
      </div>
    </>
  )
}

export default Chemicals