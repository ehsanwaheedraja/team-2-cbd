import React from "react";
import {Card, Row ,Col , Container} from "react-bootstrap";
import leftArrow from "../images/Group103.png"
import rightArrow from "../images/Group102.png"
import cbdOil from "../images/cbd-oil2.png"
const Hablan = () => {
  return (
<div className="comoHablan">
    <div className="comoHablanTitle">
       
    <h3 >¿Cómo hablan de nosotros?</h3>
   
    </div>
    <div className="comoHablanContent">Te enseñamos los testimonios de las personas a las que hemos conseguido
     ayudar a través de este proyecto, que han participado en el cultivo, cuidado y cosecha de nuestras plantas.
     Con la compra de nuestros productos has hecho posible Cultivando Bienestar.</div>
     <div className="comoHablanCards">
         <img src={leftArrow} width="25px" height="24.87px" className="imgArrowLeft" alt=" left arrow"></img>
     <Card style={{ width: '392px' }}>
  <Card.Body>
    <Card.Title>Ramón Giráldez</Card.Title>
    <Card.Text>
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua."


    </Card.Text>
  </Card.Body>
</Card>

<Card style={{ width: '392px' }}>
  <Card.Body>
    <Card.Title>Eduardo Benítez</Card.Title>
    <Card.Text>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
       incididunt ut labore et dolore magna aliqua."


    </Card.Text>
  </Card.Body>
</Card>

<Card style={{ width: '392px' }}>
  <Card.Body>
    <Card.Title>Patricia Loyola</Card.Title>
    <Card.Text>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
       tempor incididunt ut labore et dolore magna aliqua."
    </Card.Text>
  </Card.Body>
</Card>
{/* <Container>
          <Row className="reviews justify-content-md-center" xs={12}>
            <Col>
              
              <p className="review-author">Ramón Giráldez</p>
              <p className="review-text">
                Los productos están muy bien explicados en la web, la entrega ha
                sido rápida y la preparación muy cuidadosa. Muy satisfecha con
                la compra.
              </p>
            </Col>
            <Col>
              
              <p className="review-author">Eduardo Benítez</p>
              <p className="review-text">
                Perfecto para dolores menstruales, de cabeza e incluso para el
                dolor de una muela.
              </p>
            </Col>
            <Col>
              
              <p className="review-author">Patricia Loyola</p>
              <p className="review-text">
                Me ha gustado mucho, es más, ya no tomo pastillas. Prefiero un
                remedio natural, puesto que tendré que consumirlo durante un
                tiempo prolongado.
              </p>
            </Col>
            
          </Row>
        </Container> */}

{/* ============================================================ */}
<img src={rightArrow} width="25px" height="24.87px" className="imgArrowRight" alt="right arrow "></img>
</div>
<img src={cbdOil} width="100%" height="424" className="imgOil" alt="oil "></img>
</div>
  )
}
export default Hablan;
