import React from 'react';
import { Col, Row, Button } from 'antd';

const Chemicals = () => {

  return (
    <>
      <div className='Chemicals App' >
        <br />
        <div style={{ fontSize: '33px', fontFamily: 'Open Sans, Arial, sans-serif' }}>
          Speciality <span style={{ fontWeight: 'bold', color: '#FBC311' }}>Chemicals</span>
        </div>
        <br />
        <div style={{ marginTop: '20px', overflowX: 'hidden', }}>
          <Row gutter={[16,38]}>
            <Col xs={{ span: 24 }} lg={{ span: 6, offset: 2 }} style={{ backgroundColor: '#A2328E', borderRadius: '8px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
              <h3 style={{ color: 'white', wordWrap: 'break-word' }}>
                Di Methyl Formamide
              </h3>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 6, offset: 2 }} style={{ backgroundColor: '#A2328E', borderRadius: '8px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
              <h3 style={{ color: 'white', wordWrap: 'break-word' }}>
                Sodium Formate
              </h3>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 6, offset: 1 }} style={{ backgroundColor: '#A2328E', borderRadius: '8px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
              <h3 style={{ color: 'white', wordWrap: 'break-word' }}>
                Pentaerythritol
              </h3>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 6, offset: 2 }} style={{ backgroundColor: '#A2328E', borderRadius: '8px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
              <h3 style={{ color: 'white', wordWrap: 'break-word' }}>
                Solvent C-9
              </h3>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 6, offset: 2 }} style={{ backgroundColor: '#A2328E', borderRadius: '8px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
              <h3 style={{ color: 'white', wordWrap: 'break-word' }}>
                Hexane
              </h3>
            </Col>
          </Row>
          <br />
          <div style={{ marginTop: '15px' }}>
            <Button shape="round" style={{ borderWidth: '1.5px', width: '140px', borderColor: '#FBC311', fontWeight: '500' }}>View Products</Button>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  )
}

export default Chemicals