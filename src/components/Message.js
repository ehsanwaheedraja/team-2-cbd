import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const messageShop = () => {
  return (
      <div className="messageShop"> 
          <div className="icon">
          <FontAwesomeIcon icon= "hand-holding-heart" size="6x" flip="horizontal"/>
          </div>
          <p>Por cada compra que realizas en nuestra tienda online, un <b>10%</b> es destinado al proyecto social que da<b> formación y empleo</b> a las personas en situación de calle.</p>
      </div>
        )
}
export default messageShop;