import React from "react"
import {Card, CardDeck, Container} from "react-bootstrap"
import fondo from "../images/fondo.png"
import maryjane from "../images/maryjane.png"
import work from "../images/work.png"
import comercializamos from "../images/comercializamos.png"
import homeless from "../images/Homeless.png"

const Trabajo = () => {
    return (
  <div className="comoTrabajamos">
    <img src={fondo} width="350" height="89" className="fondo2" alt=""></img> 
      <div className="trabajamosTitle">
          <Container> 
     
      <h2>¿Cómo trabajamos?</h2>
      </Container>
      </div>
      
       <div className="trabajamosCards">
       <CardDeck>  
       <Card style={{ height: '600px' }}>
       <Card.Img src={maryjane} className="maryjane"/>
    <Card.Body>
    
      <Card.Title>Formamos</Card.Title>
      <Card.Text>
      a personas sin techo en el mundo del cultivo, cuidado y cosecha de CBD.
      </Card.Text>
    </Card.Body>
  </Card>
  
  <Card>
  <Card.Img src={work} className="workPic"/>
    <Card.Body>
      <Card.Title>Producimos</Card.Title>
      <Card.Text>
      productos legales de CBD ofreciendo trabajo a personas sin hogar.
      </Card.Text>
    </Card.Body>
  </Card>
  
  <Card>
  <Card.Img src={comercializamos} className="comercializamosPic"/>
    <Card.Body>
      <Card.Title>Comercializamos</Card.Title>
      <Card.Text>
      productos legales de CBD ofreciendo trabajo a personas sin hogar.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card>
  <Card.Img src={homeless} className="homelessPic"/>
    <Card.Body>
      <Card.Title>Distribuimos</Card.Title>
      <Card.Text>
      de manera gratuita muestras de CBD a las personas en situación de calle con problemas de salud que necesiten este tratamiento.
      </Card.Text>
    </Card.Body>
  </Card>
  </CardDeck>
 </div>
  
  </div>
    )
  }
  export default Trabajo;