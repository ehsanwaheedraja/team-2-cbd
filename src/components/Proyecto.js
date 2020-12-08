import React from "react"
import {Container} from "react-bootstrap"
import us from "../images/quienes-somos.png"
import arrow from "../images/vector67.png"
import fondo from "../images/fondo.png"

const Proyecto = () => {
  return (
<div className="nuestroProyecto">
    <div className="proyectoTitle">
        <Container>
    <h1 >Nuestro proyecto</h1>
    </Container>
    </div>
    <img src={fondo} width="350" height="89" className="fondo"></img> 
    <div className="quienesTitle">
        <Container>  
    <h2 >¿Quiénes somos?</h2> 
    </Container>
    </div>
    
    <img src={us} width="704" height="490" className="nosotros"></img>
    
    <div className="proyectoContent">
        <Container>En Cultivando Bienestar queremos ayudarte a ti y a las personas en situación de calle.
        A ti, acercándote el CBD y mostrándote sus beneficios. A las personas sin hogar, otorgándoles empleo y recursos.</Container><br/>

        <Container>Tenemos entre manos un proyecto social sencillo pero efectivo; ofrecemos productos medicinales a base de Cannabidiol (CBD), cuya producción es llevada a cabo por personas sin hogar. Nuestro primordial objetivo es potenciar las habilidades de estas personas, haciéndolas partícipes en el proceso de cultivo y cosecha de CBD. </Container><br/>
      
        <Container>Al conocer algunos de los problemas de salud asociados a la situación de calle en la que se encuentran algunas personas (insomnio, ansiedad, dolores crónicos y en algunos casos, enfermedades neurológicas) ofrecemos de forma gratuita nuestros productos a esta parte vulnerable del colectivo. 
        La distribución de CBD es actualmente un mercado emergente, y queremos aprovecharnos de esta situación para favorecer a quien más lo necesita.  </Container>
        </div> 
        
        <img src={arrow} width="18" height="9" className="arrowDown"></img>
</div>
  )
}
export default Proyecto;