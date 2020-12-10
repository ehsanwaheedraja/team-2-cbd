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
                                <div className="text-center">
                                    <h3>NEWSLETTER</h3>
                                        <ul className="list-unstyled">
                                            <li>Te mantenemos informado/a de nuestros progresos</li>
                                        </ul>
                                </div>      
                            </Col>
                             <Col> 
                                <div className="text-center">
                                    <h3>TIENDAS ASOCIADAS</h3>
                                        <ul className="list-unstyled">
                                            <li>En las que puedes adquirir <br></br>
                                                nuestros productos</li>
                                        </ul>
                                </div>        
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
                         <Col className="text-center">
                            <h3>Tienda</h3>
                            <p>Tienda Lorem Ipsum C/ Lorem 18 Barcelona</p>
                        </Col>
                        <Col className="text-center"l>
                            <h3>Tienda</h3>
                            <p>Tienda Lorem Ipsum C/ Lorem 18 Barcelona</p>
                        </Col>
                        <Col className="text-center">
                            <h3>Tienda</h3>
                            <p>Tienda Lorem Ipsum C/ Lorem 18 Barcelona</p>
                        </Col>
                        
                    </Row>
                    </div>
                    <Container className="btn">
                    <Row>
                        <Col sm={6}>
                            <Button  className="news-btn" size="lg" variant="light"  >SUSCRÍBETE</Button>
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