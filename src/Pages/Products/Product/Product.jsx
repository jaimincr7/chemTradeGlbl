import React from 'react';
import { Button, Row, Col, Card, Form, } from 'antd';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-product">
        <span className="highlight-ab big-texts" style={{ fontFamily: 'Open Sans, Arial, sans-serif', fontWeight: '800' }}>Our Products</span>
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
        <Row justify="center" gutter={[16, 20]}>
          <Col xs={{ span: 13 }} lg={{ span: 5, offset: 2 }} style={{ backgroundColor: '#A2328E', borderRadius: '8px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
            <h3 style={{ color: 'white', wordWrap: 'break-word' }}>
              Solvents
            </h3>
          </Col>
          <Col xs={{ span: 13 }} lg={{ span: 5, offset: 2 }} style={{ backgroundColor: '#A2328E', borderRadius: '8px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
            <h3 style={{ color: 'white', wordWrap: 'break-word' }}>
              Pharmaceuticals
            </h3>
          </Col>
          <Col xs={{ span: 13 }} lg={{ span: 5, offset: 2 }} style={{ backgroundColor: '#A2328E', borderRadius: '8px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
            <h3 style={{ color: 'white', wordWrap: 'break-word' }}>
              Neutraceuticals
            </h3>
          </Col>
          <Col xs={{ span: 13 }} lg={{ span: 5, offset: 2 }} style={{ backgroundColor: '#A2328E', borderRadius: '8px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
            <h3 style={{ color: 'white', wordWrap: 'break-word' }}>
              Polymers
            </h3>
          </Col>
          <Col xs={{ span: 13 }} lg={{ span: 5, offset: 2 }} style={{ backgroundColor: '#A2328E', borderRadius: '8px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
            <h3 style={{ color: 'white', wordWrap: 'break-word' }}>
              Speciality Chemicals
            </h3>
          </Col>
          <Col xs={{ span: 13 }} lg={{ span: 5, offset: 2 }} style={{ backgroundColor: '#A2328E', borderRadius: '8px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
            <h3 style={{ color: 'white', wordWrap: 'break-word' }}>
              Aromatic Ingredients
            </h3>
          </Col>
          <Col xs={{ span: 13 }} lg={{ span: 5, offset: 2 }} style={{ backgroundColor: '#A2328E', borderRadius: '8px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
            <h3 style={{ color: 'white', wordWrap: 'break-word' }}>
              Food Chemicals
            </h3>
          </Col>
        </Row>
        <br />
        <br />
      </div >
      <div style={{ backgroundColor: '#FAFAFA' }}>
        <div style={{ paddingTop: '5px', paddingBottom: '5px', }}>
          <h1 className='App'>
            <span style={{ fontWeight: 'lighter' }}>Our</span> <span style={{ color: '#FBC311' }}>Products</span>
          </h1>
          <Row justify="center" className='chottu-letters-product'>
            <Col xs={{ span: 11, offset: 2 }} lg={{ span: 5, offset: 3 }} >
              <h3 style={{ color: '#FBC311', textDecoration: 'underline', fontWeight: 'bold', wordWrap: 'break-word' }} className='chotu-letters'>
                Food Chemicals
              </h3>
              <ul className='chotu-letters' >
                <p>Mono-n-Butylamine</p>
                <p>Di-n-Butylamine</p>
                <p>Tri-n-Butylamine</p>
              </ul>
            </Col>
            <Col xs={{ span: 11, offset: 2 }} lg={{ span: 5, offset: 3 }}>
              <h3 style={{ color: '#FBC311', textDecoration: 'underline', fontWeight: 'bold', }}>
                CYCLOHEXYLAMINE
              </h3>
              <ul className='chotu-letters' style={{ wordWrap: 'break-word' }}>
                <p>Monocyclohexylamine</p>
                <p>Dicyclohexylamine</p>
              </ul>
            </Col>
            <Col xs={{ span: 11, offset: 2 }} lg={{ span: 5, offset: 3 }}>
              <h3 style={{ color: '#FBC311', textDecoration: 'underline', fontWeight: 'bold', }}>
                CYCLOHEXYLAMINE
              </h3>
              <ul className='chotu-letters' style={{ wordWrap: 'break-word' }}>
                <p>Monomethylamine</p>
                <p>Dimethylamine</p>
                <p>Trimethylamine</p>
              </ul>
            </Col>
            <Col xs={{ span: 11, offset: 2 }} lg={{ span: 5, offset: 3 }}>
              <h3 style={{ color: '#FBC311', textDecoration: 'underline', fontWeight: 'bold', wordWrap: 'break-word' }} className='chotu-letters'>
                ETHYLAMINE
              </h3>
              <ul className='chotu-letters' style={{ wordWrap: 'break-word' }}>
                <p>Monomethylamine</p>
                <p>Dimethylamine</p>
                <p>Trimethylamine</p>
              </ul>
            </Col>
            <Col xs={{ span: 11, offset: 2 }} lg={{ span: 5, offset: 3 }}>
              <h3 style={{ color: '#FBC311', textDecoration: 'underline', fontWeight: 'bold', }}>
                ETHYLHEXYLAMINE
              </h3>
              <ul className='chotu-letters' style={{ wordWrap: 'break-word', }}>
                <p>Mono-2-Ethylhexylamine</p>
                <p>Bis-2-Ethylhexylamine</p>
              </ul>
            </Col>
            <Col xs={{ span: 11, offset: 2 }} lg={{ span: 5, offset: 3 }}>
              <h3 style={{ color: '#FBC311', textDecoration: 'underline', fontWeight: 'bold', wordWrap: 'break-word' }} className='chotu-letters'>
                ISOPROPYLAMINE
              </h3>
              <ul className='chotu-letters' style={{ wordWrap: 'break-word' }}>
                <p>Monocyclohexylamine</p>
                <p>Dicyclohexylamine</p>
              </ul>
            </Col>
            <Col xs={{ span: 11, offset: 2 }} lg={{ span: 5, offset: 3 }}>
              <h3 style={{ color: '#FBC311', textDecoration: 'underline', fontWeight: 'bold', wordWrap: 'break-word' }} className='chotu-letters'>
                PROPYLAMINE
              </h3>
              <ul className='chotu-letters' style={{ wordWrap: 'break-word' }}>
                <p>Mono-n-Butylamine</p>
                <p>Di-n-Butylamine</p>
                <p>Tri-n-Butylamine</p>
              </ul>
            </Col>
            <Col xs={{ span: 11, offset: 2 }} lg={{ span: 5, offset: 3 }}>
              <h3 style={{ color: '#FBC311', textDecoration: 'underline', fontWeight: 'bold', wordWrap: 'break-word' }} className='chotu-letters'>
                ETHANOLMINES
              </h3>
              <ul className='chotu-letters' style={{ wordWrap: 'break-word' }}>
                <p>Monomethylamine</p>
                <p>Dimethylamine</p>
                <p>Trimethylamine</p>
              </ul>
            </Col>
            <Col xs={{ span: 11, offset: 2 }} lg={{ span: 5, offset: 3 }}>
              <h3 className='chotu-letters' style={{ color: '#FBC311', textDecoration: 'underline', fontWeight: 'bold', wordWrap: 'break-word' }}>
                ALPHATIC SOLVENTS
              </h3>
              <ul className='chotu-letters' style={{ wordWrap: 'break-word' }} >
                <p>Hexanes</p>
                <p>Petroleum Ethers</p>
              </ul>
            </Col>
            <Col xs={{ span: 11, offset: 2 }} lg={{ span: 5, offset: 3 }}>
              <h3 style={{ color: '#FBC311', textDecoration: 'underline', fontWeight: 'bold', wordWrap: 'break-word' }} className='chotu-letters'>
                CHLORINATED SOLVENTS
              </h3>
              <ul className='chotu-letters' style={{ wordWrap: 'break-word' }}>
                <p>Methylene Chloride </p>
                <p>Perchloroethylene</p>
                <p>Trichloroethylene</p>
              </ul>
              <h3 style={{ color: '#FBC311', textDecoration: 'underline', fontWeight: 'bold', wordWrap: 'break-word' }} className='chotu-letters'>
                KETONES
              </h3>
              <ul className='chotu-letters' style={{ wordWrap: 'break-word' }}>
                <p>Acetone   </p>
                <p>Cyclohexanone</p>
                <p>Methyl Ethyl Ketone</p>
                <p>Methyl Iso Butyl Ketone</p>
              </ul>
            </Col>
            <Col xs={{ span: 11, offset: 2 }} lg={{ span: 5, offset: 3 }}>
              <h3 style={{ color: '#FBC311', textDecoration: 'underline', fontWeight: 'bold', wordWrap: 'break-word' }} className='chotu-letters'>
                ACID & ESTERS
              </h3>
              <ul className='chotu-letters' style={{ wordWrap: 'break-word' }}>
                <p>Acetic Acid</p>
                <p>Citric Acid</p>
                <p>DL Tartaric Acid</p>
                <p>Formic Acid</p>
                <p>Ethyl Acetate</p>
                <p>Iso Butyl Acetate</p>
                <p>Iso Propyl Acetate</p>
                <p>N Butyl Acetate</p>
                <p>N Propyl Acetate</p>
              </ul>
            </Col>
            <Col xs={{ span: 11, offset: 2 }} lg={{ span: 5, offset: 3 }}>
              <h3 style={{ color: '#FBC311', textDecoration: 'underline', fontWeight: 'bold', wordWrap: 'break-word' }} className='chotu-letters'>
                HYDROCARBONS
              </h3>
              <ul className='chotu-letters' style={{ wordWrap: 'break-word' }}>
                <p>Solvent Naptha    </p>
                <p>Toluene</p>
                <p>Ortho Xylene</p>
                <p>Mix Xylene</p>
                <p>Solvent C-IX</p>
              </ul>
            </Col>
            <Col xs={{ span: 11, offset: 2 }} lg={{ span: 5, offset: 3 }}>
              <h3 style={{ color: '#FBC311', textDecoration: 'underline', fontWeight: 'bold', wordWrap: 'break-word' }} className='chotu-letters'>
                ALCOHOLS
              </h3>
              <ul className='chotu-letters' style={{ wordWrap: 'break-word' }}>
                <p>Methanol</p>
                <p>N-Butanol</p>
                <p>Iso Propyl Alcohol</p>
                <p>N-Propanol</p>
                <p>Benzyl Alcohol</p>
                <p>2 Ethyl Hexanol</p>
                <p>Di Acetone Alcohol</p>
                <p>Tertiary Butanol (TBA)</p>
              </ul>
            </Col>
            <Col xs={{ span: 11, offset: 2 }} lg={{ span: 5, offset: 3 }}>
              <h3 style={{ color: '#FBC311', textDecoration: 'underline', fontWeight: 'bold', wordWrap: 'break-word' }} className='chotu-letters'>
                GLYCOLS
              </h3>
              <ul className='chotu-letters' style={{ wordWrap: 'break-word' }}>
                <p>Mono Ethylene Glycol</p>
                <p>Di Ethylene Glycol</p>
                <p>MP Diol Glycol</p>
                <p>Propylene Glycol USP/IND</p>
                <p>Methoxy Propyl Acetate</p>
                <p>Neo Pentyl Glycol (NPG)</p>
                <p>Ethoxy Propyl Acetate</p>
                <p>Butyl Glycol</p>
                <p>Ethyl Glycol</p>
              </ul>
            </Col>
            <Col xs={{ span: 11, offset: 2 }} lg={{ span: 5, offset: 3 }}>
              <h3 style={{ color: '#FBC311', textDecoration: 'underline', fontWeight: 'bold', wordWrap: 'break-word' }} className='chotu-letters'>
                MONOMERS
              </h3>
              <ul className='chotu-letters' style={{ wordWrap: 'break-word' }}>
                <p>Styrene Monomer      </p>
                <p>Acrylic Acid</p>
                <p>Methyl Acrylate</p>
                <p>Methyl Methacrylate</p>
                <p>Methoxy Propyl Acetate</p>
                <p>Ethyl Acrylate</p>
                <p>2 Ethyl Hexyl Acrylate</p>
                <p>Vinyl Acetate Monomer</p>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h4 className='App' style={{ backgroundColor: '#FBC311', borderRadius: '5px', width: '40%' }}>
          SPECIALITY CHEMICALS
        </h4>
        <br />
      </div>
      <Row justify="space-evenly">
        <Col xs={{ span: 12, offset: 1 }} lg={{ span: 5, offset: 3 }}>
          <ul className='chotu-letters'  >
            <p>Acetonitrile</p>
            <p>Maleic Anhydride</p>
            <p>Di Methyl Carbonate</p>
            <p>Acrylonitrile</p>
            <p>Di Methyl Sulfoxide</p>
            <p>Methylene Diphenyl Diisocyanate</p>
            <p>Glycerine BP/ USP</p>
          </ul>
        </Col>
        <Col xs={{ span: 12, offset: 1 }} lg={{ span: 5, offset: 3 }}>
          <ul className='chotu-letters' style={{ wordWrap: 'break-word' }} >
            <p>Methane Sulphonic Acid</p>
            <p>Dicyandiamide</p>
            <p>Ethyl Chloro Formate</p>
            <p>Methane Sulphonyl Chloride</p>
            <p>SulfolaneSulfolane</p>
            <p>Nonyl Phenol</p>
            <p>Methyl Chloro Formate</p>
            <p>N-Methyl Pyrrolidone</p>
          </ul>
        </Col>
        <Col xs={{ span: 12, offset: 1 }} lg={{ span: 5, offset: 3 }}>
          <ul className='chotu-letters' style={{ wordWrap: 'break-word' }} >
            <p>Pentaerythritol 95% / 98%</p>
            <p>Tetrahydrofuran</p>
            <p>N-Heptane</p>
            <p>Phenol</p>
            <p>TDI        </p>
            <p>Phthalic Anhydride</p>
            <p>Di Methyl Formamide</p>
          </ul>
        </Col>
      </Row>
      <br />
      <div className="container-get-quote">
        <div style={{ fontSize: '40px' }}>
          <span style={{ color: 'white' }}>Get a </span><span style={{ color: '#FBC311' }}>Quote Today</span>
        </div>
        <br />
        <Button
          shape="round"
          style={{ borderWidth: '0.5px', width: '140px' }}
          onClick={() => { navigate('/contact-us') }}>Inquire Now</Button>
        <br />
      </div>

    </>
  )
}

export default Product