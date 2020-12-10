
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="left-side-footer">
                            <h5>© 2020 CULTIVANDO BIENESTAR</h5>
                            <ul className="list-unstyled">
                                <li>All rights reserved</li>
                            </ul>
                        </div>    
                    </div>
                    <div className="col">
                        <div className="social-container">
                            <a href="https://www.youtube.com/c/jamesqquick"
                            className="youtube social">
                            <FontAwesomeIcon icon={['fab','youtube']} size="2x" />
                            </a>
                            <a href="https://www.facebook.com/learnbuildteach/"
                            className="facebook social">
                            <FontAwesomeIcon icon={['fab','facebook']} size="2x"  />
                            </a>
                            <a href="https://www.instagram.com/learnbuildteach"
                            className="instagram social">
                            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                            </a>
                         </div>
                    </div>
                    <div className="col">
                        <div className="right-side-footer">
                            <h5>CONTÁCTANOS</h5>
                            <ul className="list-unstyled">
                                <li>+34 634 239 663</li>
                                <li>info@cultivandobienestar.com</li>
                            </ul>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;