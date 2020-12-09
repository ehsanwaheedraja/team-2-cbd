import React from "react";
import { Container, Row, Col, InputGroup, FormControl, Button} from "react-bootstrap";

const Blog = () => {
    return (
        <div className="main-blog">
            <Container >
                <div className="blog-header">
                    <Container>
                        <Container>
                         <Row>
                            <Col> 
                                <h3>NEWSLETTER</h3>
                                    <ul className="list-unstyled">
                                        <li>Te mantenemos informado/a de nuestros progresos</li>
                                    </ul>
                            </Col>
                             <Col> 
                            <h3>TIENDAS ASOCIADAS</h3>
                                <ul className="list-unstyled">
                                    <li>En las que puedes adquirir nuestros productos</li>
                                </ul>
                            </Col>
                    </Row>
                    </Container>
                <div/>
                <div>    
                    <Row>
                        <Col xs={6}>
                         <InputGroup size="sm"className="mb-3">
                            <FormControl
                            placeholder="Nombre"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"/>
                             <FormControl
                            placeholder="e-mail"
                            aria-label="Recipient's useremail"
                            aria-describedby="basic-addon2"/>
                        </InputGroup>
                        </Col>
                         <Col>
                            <h3>Tienda</h3>
                            <p>Tienda Lorem Ipsum C/ Lorem 18 Barcelona</p>
                        </Col>
                        <Col>
                            <h3>Tienda</h3>
                            <p>Tienda Lorem Ipsum C/ Lorem 18 Barcelona</p>
                        </Col>
                        <Col>
                            <h3>Tienda</h3>
                            <p>Tienda Lorem Ipsum C/ Lorem 18 Barcelona</p>
                        </Col>
                    </Row>
                    </div>
                    <Container>
                    <Row>
                        <Col sm={6}>
                            <Button  size="lg" variant="light"  >SUSCRÍBETE</Button>
                        </Col>
                        <Col>

                        </Col>
                        
                    </Row>
                    </Container>
                </Container>
                </div>
            </Container>
        </div>
    )
}

export default Blog;