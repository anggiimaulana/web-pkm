import {Container, Row, Col} from "react-bootstrap"
import {Link} from "react-router-dom"

const FooterComponent = () => {
  return (
    <div className="footer py-4">
        <Container>
            <Row className="d-flex justify-content-between">
                <Col lg="4">
                <h3 className="fw-bold text-center"><i>MVP <br /> <span>
            <p className="fs-6 ">Muda Visioner Pendidikan</p></span></i></h3>
                </Col>

                <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
                <h5 className="fw-bold">Menu</h5>
                <Link to="ruang-belajar">Ruang Belajar</Link>
                <Link to="tentang-kami">Tentang Kami</Link>
                </Col>

                <Col lg='3' className="mt-lg-0 mt-5">
                <h5 className="fw-bold">Kontak</h5>
                <div className="no mb-1 mt-4">
                    <a href="https://wa.me/6287711447242" className="text-decoration-none">
                        <i className="fab fa-whatsapp"></i>
                        <p className="m-0">+62 8771 1447 242</p>
                    </a>
                </div>
                <div className="mail">
                    <a href="mailto:anggabos120@gmail.com" className="text-decoration-none">
                        <i className="far fa-envelope"></i>
                        <p className="m-0">anggabos120@gmail.com</p>
                    </a>
                </div>
                <div className="social mt-3">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div>
                </Col>

                {/* <Col lg="4" className="mt-lg-0 mt-5">
                <h5 className="fw-bold mb-3">Subscribe untuk info menarik lainnya!</h5>
                <div className="subscribe">
                    <input type="text" placeholder="subscribe..." />
                    <button className="btn btn-danger rounded-end rounded-0">Subscribe</button>
                </div>
                <div className="social mt-3">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div>
                </Col> */}
            </Row>
            <hr />
            <Row>
                <Col>
                <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold"><i>MVP <br /> <span>
            <p className="fs-6 ">Muda Visioner Pendidikan</p></span></i></span>,
                All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default FooterComponent