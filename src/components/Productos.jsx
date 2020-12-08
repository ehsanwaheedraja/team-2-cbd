import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import productoApadrina from "../images/tienda-apadrina.png";

class Productos extends Component {
  render() {
    return (
      <div class="productos">
        <Container fluid className="productos-title">
          <Row>
            <Col span={12}>
              <h3>
                Nuestros productos
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Nuestros productos
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Nuestros productos
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Nuestros productos
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Nuestros productos
              </h3>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row
            className="productos-items justify-content-md-center"
            xs={12}
            md={4}
          >
            <Col>
              <div className="producto">
                <img src={productoApadrina} />
                <div className="nombre">
                  <h5>Apadrina y Dona 25%</h5>
                </div>
                <button>Me interesa</button>
              </div>
            </Col>
            <Col>
              <div className="producto">
                <img src={productoApadrina} />
                <div className="nombre">
                  <h5>Apadrina y Dona 50%</h5>
                </div>
                <button>Me interesa</button>
              </div>
            </Col>
            <Col>
              <div className="producto">
                <img src={productoApadrina} />
                <div className="nombre">
                  <h5>Apadrina y Dona 75%</h5>
                </div>
                <button>Me interesa</button>
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="reviews justify-content-md-center" xs={12}>
            <Col>
              <div className="review-score">
                <div className="score-unit filled"></div>
                <div className="score-unit filled"></div>
                <div className="score-unit filled"></div>
                <div className="score-unit filled"></div>
                <div className="score-unit"></div>
              </div>
              <p className="review-author">Anabel</p>
              <p className="review-text">
                Los productos están muy bien explicados en la web, la entrega ha
                sido rápida y la preparación muy cuidadosa. Muy satisfecha con
                la compra.
              </p>
            </Col>
            <Col>
              <div className="review-score">
                <div className="score-unit filled"></div>
                <div className="score-unit filled"></div>
                <div className="score-unit filled"></div>
                <div className="score-unit filled"></div>
                <div className="score-unit"></div>
              </div>
              <p className="review-author">Marina</p>
              <p className="review-text">
                Perfecto para dolores menstruales, de cabeza e incluso para el
                dolor de una muela.
              </p>
            </Col>
            <Col>
              <div className="review-score">
                <div className="score-unit filled"></div>
                <div className="score-unit filled"></div>
                <div className="score-unit filled"></div>
                <div className="score-unit filled"></div>
                <div className="score-unit"></div>
              </div>
              <p className="review-author">Daniela</p>
              <p className="review-text">
                Me ha gustado mucho, es más, ya no tomo pastillas. Prefiero un
                remedio natural, puesto que tendré que consumirlo durante un
                tiempo prolongado.
              </p>
            </Col>
            <Col>
              <div className="review-score">
                <div className="score-unit filled"></div>
                <div className="score-unit filled"></div>
                <div className="score-unit filled"></div>
                <div className="score-unit filled"></div>
                <div className="score-unit filled"></div>
              </div>
              <p className="review-author">Lucía</p>
              <p className="review-text">
                100% recomendado!!! Me viene bien para los dolores de la regla,
                para cuándo estoy mas nerviosa, para dormir... ¡¡estoy
                encantada!!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Productos;
