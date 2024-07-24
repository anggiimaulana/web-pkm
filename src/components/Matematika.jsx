import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { matematiika, matematikaB1 } from "../../data";
import { Link } from "react-router-dom";
import notip from '../notip';

const Pppp = () => {

    return (

        <div className="mtk-page">
            <div className="mtk">
                <Container>
                <Row>
                        {matematiika.map((mtk) => {
                            return (
                                <Col>
                                    <Link to='/ruang-belajar' className='room text-decoration-none text-white'>Ruang Belajar</Link> <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                    <path className='text-white' d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                    </svg> 
                                    <Link to='#' className='room fw-bold text-decoration-none text-white'>Matematika</Link>
                                    </span>
                                    <div className="foto d-flex w-100 shadow rounded">
                                        <img src={mtk.image} alt="mtk" className=""/> <span>
                                            <div>
                                                <h4 className="text-white fw-bold fs-5">Matematika</h4>
                                                <h5 className="text-white fs-6">Kelas Dasar Matematika</h5>
                                            </div>
                                        </span>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                    <Row>
                        {matematikaB1.map((mapel, index) => (
                            <Col key={index} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={mapel.delay}>
                                {/* Menautkan setiap item menu ke halaman yang berbeda */}
                                <Link to={`${mapel.number}`} className='room text-decoration-none text-white'>{mapel.title}
                                <div className="bab d-flex justify-content-center align-items-center px-3 pb-3 text-center">
                                    <button className="btn rounded-1 d-flex mt-3 button">
                                        <p className="bordered-text  text-white">{mapel.title}</p>
                                        <img src={mapel.image} alt="unplash.com" className="mr-2" />
                                        <h5 className="ml-5">{mapel.name}</h5>
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

export default Pppp;
