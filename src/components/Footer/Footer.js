import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <footer
    style={{
        width :"100%",
        position : "relative",
        bottom :0,
        display : "flex",
        justifyContent : "center",
    }} >

    <Container>
    <Row>
    <Col className ="text-center py-3"> CopyRight &copy; Tools Crib

    </Col>
        
    </Row>
        
    </Container>

    </footer>
  )
}

export default Footer