import React from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { bab_1 } from '../../data';
import { Link } from "react-router-dom"; // Tambahkan ini untuk impor Link
import Jumlah from '../../components/mtk/Jumlah';
import Kurang from '../../components/mtk/Kurang';
import Kali from '../../components/mtk/Kali';
import Bagi from '../../components/mtk/Bagi';

const P4 = () => {
  return (
    <div className='p4-page'>
      <div className='p4'>
        <Container>
          <Row>
            {bab_1.map((mtk) => {
              return (
                <Col key={mtk.id}>
                  <Link to='/ruang-belajar' className='room text-decoration-none text-white'>Ruang Belajar</Link>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                      <path className='text-white' d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg> 
                    <Link to='/ruang-belajar/mtk' className='room text-decoration-none text-white'>Matematika</Link>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path className='text-white' d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                      </svg> 
                      <Link to='#' className='room fw-bold text-decoration-none text-white'>4P</Link>
                    </span>
                  </span>
                  <div className="foto d-flex w-100 shadow rounded">
                    <img src={mtk.image} alt="mtk" className=""/> <span>
                      <div>
                        <h4 className="text-white fw-bold fs-5">4P</h4>
                        <h5 className="text-white fs-6">Penjumlahan, Pengurangan, Perkalian dan Pembagian.</h5>
                      </div> 
                    </span> 
                  </div>
                </Col>
              )
            })}
          </Row>
          <Row>
            <Col>
              <Tabs
                defaultActiveKey="penjumlahan"
                id="uncontrolled-tab-example"
                className="tabs mb-3"
              >
                <Tab eventKey="penjumlahan" title="Penjumlahan">
                  <Jumlah/>
                </Tab>
                <Tab eventKey="pengurangan" title="Pengurangan">
                  <Kurang/>
                </Tab>
                <Tab eventKey="perkalian" title="Perkalian">
                  <Kali/>
                </Tab>
                <Tab eventKey="pembagian" title="Pembagian">
                  <Bagi/>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default P4;
