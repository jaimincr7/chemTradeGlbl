import React from 'react';
import { Button, Row, Col, Card, Form, } from 'antd';

const Product = () => {

  return (
    <>
      <div className="container-product">
        <span className="highlight-ab big-texts">Our Products</span>
        <br />
      </div>
      <br />
      <div className='App'>
        <h3 >
          <span style={{ fontWeight: 'lighter' }}>We work with multiple industries</span><br />
          <span style={{ color: '#FBC311' }}>
            to cater range of categories such as
          </span>
        </h3>
      </div>
      <br />
      <br />
      <div className='App'>
        <Row justify="space-evenly">
          <Col span={5} style={{ backgroundColor: '#A2328E', borderRadius: '8px' }}>
            <h3>
              Solvents
            </h3>
          </Col>
          <Col span={5} style={{ backgroundColor: '#A2328E', borderRadius: '8px' }}>
            <h3>
              Pharmaceuticals
            </h3>
          </Col>
          <Col span={5} style={{ backgroundColor: '#A2328E', borderRadius: '8px' }}>
            <h3>
              Neutraceuticals
            </h3>
          </Col>
        </Row>
        <br/>
        <br/>
        <Row justify="space-evenly">
          <Col span={5} style={{ backgroundColor: '#A2328E', borderRadius: '8px' }}>
            <h3>
              Neutraceuticals
            </h3>
          </Col>
          <Col span={5} style={{ backgroundColor: '#A2328E', borderRadius: '8px' }}>
            <h3>
              Neutraceuticals
            </h3>
          </Col>
          <Col span={5} style={{ backgroundColor: '#A2328E', borderRadius: '8px' }}>
            <h3>
              Neutraceuticals
            </h3>
          </Col>
        </Row>
      </div>


    </>
  )
}

export default Product