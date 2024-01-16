import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

function About() {
    return (
        <>
            <Container className="justify-content-md-center">
                <Row>
                    <Col>
                        <h2>goat</h2>
                        {/* <Link to="/Cust">customer</Link> */}
                    </Col>
                    <Col>
                        <h2>goat</h2>
                        <Link to="/about">about</Link>
                    </Col>
                    <Col>
                        <h2>goat</h2>
                        <Link to="/Home">Home</Link>
                    </Col>
                </Row>
            </Container>
            <h1>NEW</h1>
        </>
    )
}


export default About;