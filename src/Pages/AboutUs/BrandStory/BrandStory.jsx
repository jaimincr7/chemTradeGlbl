import React, { useState } from 'react';
import { Button, Row, Col, Card } from 'antd';

const BrandStory = () => {


  return (
    <>
      <div className="container-about-us">
        <span className="highlight-ab big-texts">Brand Story</span>
        <br />
      </div>
      <div>
        <Row>
          <Col span={4}>
          </Col>
          <Col span={8}>
            <div className='App'>
              {/* <img src={} alt="Sample" style={{ maxHeight: '128px' }} /> */}

            </div>
          </Col>
          <Col span={8}>
            <div className='App'>
              <h2>
                From around the <span style={{ color: '#FBC311' }}>World</span> to your Doorstep
              </h2>
              <p style={{ fontSize: 'small' }}>
                With a long-standing experience of over 30 years, Mr. Ashish K. Shah the founding partner, along with the efforts of his professionally specialised team, started this organization with a vision to establish the largest supply chain in order to cater to the wide range of industries both domestically and internationally.
                Starting from a small business, involved in supply of chemical ingredients and solvents to a single market; Chemtrade Global Impex LLP has presently grown into a successful service provider to the industry of chemicals
              </p>
            </div>
          </Col>
          <Col span={4}>
          </Col>
        </Row>
      </div>
      <br />
      <div className="container-about-us-small">
        <h1 className="highlight-ab big-texts">Brand <span style={{ color: '#FBC311' }}>Story</span></h1>
        <br />
      </div>
      <br />
      <br />
      <div>
        <Row>
          <Col span={4}>
          </Col>
          <Col span={7}>
            <Card style={{ backgroundColor: '#EFEFEF' }}>
              <h3 className='App'>Mission</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s.
              </p>
            </Card>
          </Col>
          <Col span={2}>
          </Col>
          <Col span={7}>
            <Card style={{ backgroundColor: '#EFEFEF' }}>
              <h3 className='App'>Vision</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s.
              </p>
            </Card>
          </Col>
          <Col span={4}>
          </Col>
        </Row>
      </div>
      <br />
      <br />
    </>
  )
}

export default BrandStory