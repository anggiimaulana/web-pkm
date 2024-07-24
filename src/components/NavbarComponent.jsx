import {useState, useEffect} from "react"
import {Navbar, Container, Nav} from "react-bootstrap"

import {navLinks} from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {


    const [changeColor, setChangeColor] = useState(false);

    const changeBackgroundColor = () => {
        if (window.scrollY > 10) {
            setChangeColor(true)
        } else {
            setChangeColor(false)
        }
    }

    useEffect(() => {
        changeBackgroundColor()
        window.addEventListener("scroll", changeBackgroundColor)
    })

    

  return (
    <div>
        <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
            <Navbar.Brand href="#" className="fs-4 fw-bold text-center"><i>MVP <br /> <span>
            <p className="fs-6">Muda Visioner Pendidikan</p></span></i></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
                {navLinks.map((link) => {
                    return (
                        <div className="nav-link" key={link.id}>
                            <NavLink to={link.path} className={({ isActive, isPending }) =>
                                (isPending ? "pending" : isActive ? "active" : "")} end>
                                    {link.text}
                            </NavLink>
                            
                        </div>
                    )
                })}
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default NavbarComponent