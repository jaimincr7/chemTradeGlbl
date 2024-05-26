import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import icon1 from '../../../Assets/images/Group 15.png';
import icon2 from '../../../Assets/images/Group 16.png';
import icon3 from '../../../Assets/images/Group 17.png';
import icon4 from '../../../Assets/images/Group 18.png';
import icon5 from '../../../Assets/images/Group 19.png';
import icon6 from '../../../Assets/images/Group 20.png';
import icon7 from '../../../Assets/images/Group 21.png';
import icon8 from '../../../Assets/images/Group 22.png';
import icon9 from '../../../Assets/images/Group 23.png';
import icon10 from '../../../Assets/images/Group 24.png';
import icon11 from '../../../Assets/images/Group 25.png';
import icon12 from '../../../Assets/images/Group 26.png';
import icon13 from '../../../Assets/images/Group 27.png';
import icon14 from '../../../Assets/images/Group 28.png';
import icon15 from '../../../Assets/images/Group 29.png';
import { useNavigate } from 'react-router-dom';

const Industry = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-industry">
        <span className="highlight-ab big-texts" style={{ fontFamily: 'Open Sans, Arial, sans-serif', fontWeight: '800'}}>Industries</span>
        <br />
      </div>
      <br />
      <div className='App' >
        <h2 style={{ fontFamily: "Open Sans" }}>
          <span style={{ fontWeight: '400' }}>We cater to multiple </span>
          <span style={{ color: '#FBC311' }}> Chemical Industries</span>
        </h2>
        <p style={{ fontWeight: '400', fontSize: '15px', wordBreak: 'break-word' }}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece old.
        </p>
      </div>
      <br />
      <div className='App'>
        <Row justify="center" >
          <Col xs={{ span: 10 }} lg={{ span: 5, }}>
            <div className='App'>
              {/* <img src={} alt="Sample" style={{ maxHeight: '128px' }} /> */}
              <img src={icon1} alt="Sample" style={{ maxWidth: '30%', maxHeight: '30%', width: 'auto', height: 'auto' }} />
              <p style={{ fontSize: '13px' }}>Agro Chemicals</p>
            </div>
          </Col>
          <Col xs={{ span: 10 }} lg={{ span: 5, }}>
            <div className='App'>
              <img src={icon2} alt="Sample" style={{ maxWidth: '30%', maxHeight: '30%', width: 'auto', height: 'auto' }} />
              <p style={{ fontSize: '13px' }}>Construction</p>
            </div>
          </Col>
          <Col xs={{ span: 10 }} lg={{ span: 5, }}>
            <div className='App'>
              {/* <img src={} alt="Sample" style={{ maxHeight: '128px' }} /> */}
              <img src={icon3} alt="Sample" style={{ maxWidth: '30%', maxHeight: '30%', width: 'auto', height: 'auto' }} />
              <p style={{ fontSize: '13px' }}>Fiberglass</p>
            </div>
          </Col>
          <Col xs={{ span: 10 }} lg={{ span: 5, }}>
            <div className='App'>
              <img src={icon4} alt="Sample" style={{ maxWidth: '30%', maxHeight: '30%', width: 'auto', height: 'auto' }} />
              <p style={{ fontSize: '13px' }}>Flavours & Fragrances</p>
            </div>
          </Col>
          <Col xs={{ span: 10 }} lg={{ span: 5, }}>
            <div className='App'>
              {/* <img src={} alt="Sample" style={{ maxHeight: '128px' }} /> */}
              <img src={icon5} alt="Sample" style={{ maxWidth: '30%', maxHeight: '30%', width: 'auto', height: 'auto' }} />
              <p style={{ fontSize: '13px' }}>Food & Beverages</p>
            </div>
          </Col>
          <Col xs={{ span: 10 }} lg={{ span: 5, }}>
            <div className='App'>
              <img src={icon6} alt="Sample" style={{ maxWidth: '30%', maxHeight: '30%', width: 'auto', height: 'auto' }} />
              <p style={{ fontSize: '13px' }}>Laminates & Plywood</p>
            </div>
          </Col>
          <Col xs={{ span: 10 }} lg={{ span: 5, }}>
            <div className='App'>
              {/* <img src={} alt="Sample" style={{ maxHeight: '128px' }} /> */}
              <img src={icon7} alt="Sample" style={{ maxWidth: '30%', maxHeight: '30%', width: 'auto', height: 'auto' }} />
              <p style={{ fontSize: '13px' }}>Leather</p>
            </div>
          </Col>
          <Col xs={{ span: 10 }} lg={{ span: 5, }}>
            <div className='App'>
              <img src={icon8} alt="Sample" style={{ maxWidth: '30%', maxHeight: '30%', width: 'auto', height: 'auto' }} />
              <p style={{ fontSize: '13px' }}>Lubricants & Automobiles</p>
            </div>
          </Col>
          <Col xs={{ span: 10 }} lg={{ span: 5, }}>
            <div className='App'>
              {/* <img src={} alt="Sample" style={{ maxHeight: '128px' }} /> */}
              <img src={icon9} alt="Sample" style={{ maxWidth: '30%', maxHeight: '30%', width: 'auto', height: 'auto' }} />
              <p style={{ fontSize: '13px' }}>Oil & Gas</p>
            </div>
          </Col>
          <Col xs={{ span: 10 }} lg={{ span: 5, }}>
            <div className='App'>
              <img src={icon10} alt="Sample" style={{ maxWidth: '30%', maxHeight: '30%', width: 'auto', height: 'auto' }} />
              <p style={{ fontSize: '13px' }}>Paints & Coatings</p>
            </div>
          </Col>
          <Col xs={{ span: 10 }} lg={{ span: 5, }}>
            <div className='App'>
              {/* <img src={} alt="Sample" style={{ maxHeight: '128px' }} /> */}
              <img src={icon11} alt="Sample" style={{ maxWidth: '30%', maxHeight: '30%', width: 'auto', height: 'auto' }} />
              <p style={{ fontSize: '13px' }}>Printing Inks</p>
            </div>
          </Col>
          <Col xs={{ span: 10 }} lg={{ span: 5, }}>
            <div className='App'>
              <img src={icon12} alt="Sample" style={{ maxWidth: '30%', maxHeight: '30%', width: 'auto', height: 'auto' }} />
              <p style={{ fontSize: '13px' }}>Packaging</p>
            </div>
          </Col>
          <Col xs={{ span: 10 }} lg={{ span: 5, }}>
            <div className='App'>
              <img src={icon13} alt="Sample" style={{ maxWidth: '30%', maxHeight: '30%', width: 'auto', height: 'auto' }} />
              <p style={{ fontSize: '13px' }}>Paper</p>
            </div>
          </Col>
          <Col xs={{ span: 10 }} lg={{ span: 5, }}>
            <div className='App'>
              {/* <img src={} alt="Sample" style={{ maxHeight: '128px' }} /> */}
              <img src={icon14} alt="Sample" style={{ maxWidth: '30%', maxHeight: '30%', width: 'auto', height: 'auto' }} />
              <p style={{ fontSize: '13px' }}>Personal Care</p>
            </div>
          </Col>
          <Col xs={{ span: 10 }} lg={{ span: 5, }}>
            <div className='App'>
              <img src={icon15} alt="Sample" style={{ maxWidth: '30%', maxHeight: '30%', width: 'auto', height: 'auto' }} />
              <p style={{ fontSize: '13px' }}>Pharmaceuticals</p>
            </div>
          </Col>
          <Col xs={{ span: 10 }} lg={{ span: 5, }}>
            <div className='App'>
              <h3 style={{ fontSize: '22px', color: '#FBC311', whiteSpace: 'pre-wrap' }}>&amp; <br/> Many <br/>More</h3>
            </div>
          </Col>
        </Row>
      </div>
      <br />
      <div className='App' style={{ marginTop: '15px' }}>
        <Button 
        onClick={() => {navigate('/products')}}
        shape="round" 
        style={{ borderWidth: '0.5px', borderColor: '#FBC311', width: '140px' }}>View Products</Button>
      </div>
      <br />
      <br />

    </>
  )
}

export default Industry