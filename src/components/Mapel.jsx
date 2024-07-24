import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { matpel, matematiika } from "../data";
import { Link } from "react-router-dom";

const Nyoba = () => {
    return (
        <div className="mapel-page">
            <div className="mapel">
                <Container>
                    <Row>
                        {matematiika.map((mtk, index) => { // Tambahkan index sebagai key
                            return (
                                <Col key={index}> {/* Tambahkan key={index} di sini */}
                                    <Link to='/ruang-belajar' className='room text-decoration-none text-white fw-bold'>Ruang Belajar</Link> 
                                    <div className="foto d-flex w-100 shadow rounded">
                                        <img src={mtk.image} alt="mtk" className="" /> <span>
                                            <div>
                                                <h4 className="text-white fw-bold fs-4 fs-5">Mata Pelajaran</h4>
                                                <h5 className="text-white fs-6">Kelas Sekolah Dasar</h5>
                                            </div>
                                        </span>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                    <Row>
                        {matpel.map((mapel, index) => (
                            <Col key={index} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={mapel.delay}>
                                {/* Menautkan setiap item menu ke halaman yang berbeda */}
                                <Link to={`/ruang-belajar/${mapel.title}`} className='room text-decoration-none text-white'>{mapel.title}
                                    <div className="pel d-flex justify-content-center align-items-center px-3 pb-3 text-center">
                                        <button className="btn rounded-1 d-flex button">
                                            <img src={mapel.image} alt="unplash.com" className="mr-2" />
                                            <h5 className="ml-5 ">{mapel.name}</h5>
                                        </button>
                                    </div>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Nyoba;
