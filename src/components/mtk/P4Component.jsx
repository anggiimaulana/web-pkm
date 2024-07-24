import React from 'react'
import { p4 } from '../../data'
import {Container, Row, Col, Card, Accordion, Nav} from 'react-bootstrap'

const P4Component = () => {
  return (
    <div className='p4-component'>
        <Container>
            <Row>
                <Col>
                <Nav variant="underline" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link eventKey="/ruang-belajar/mtk/4P-Penjumlahan">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                        Disabled
                        </Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>

    </div>
  )
}

export default P4Component