import {Container, Row, Col} from "react-bootstrap"
import HeroImage from "../assets/img/hero.png"

import {useNavigate} from "react-router-dom"
import Mapel from "../components/Mapel"
import Nyoba from "../components/Mapel";
import FaqComponent from "../components/FaqComponent";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const HomePage = () => {
    let navigate = useNavigate ()

  return (
    <div className="homepage">
        <header className="w-100 min-vh-100 d-flex align-items-center">
            <Container>
                <Row className="header-box d-flex align-items-center">
                    <Col lg="6">
                    <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                        Temukan <br /> <span>Bakat Kreatifmu</span> <br /> Bersama Kami!.
                    </h1>
                    <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s"></p>
                    </Col>
                    <Col lg="6" className="pt-lg-5 pt-3">
                    <img src={HeroImage} alt="hero-img" className="animate__animated animate__fadeInUp"></img>
                    </Col>
                </Row>
            </Container>
        </header>
        <div className="kelas w-100">
            <Row>
                <Col>
                <Mapel/>
                </Col>
            </Row>
        </div>
        <div className="faq w-100 ">
            <Row>
                <Col>
                <FaqComponent/>
                </Col>
            </Row>
        </div>
    </div>
    )
}

export default HomePage