import React from "react";
import { Link } from "react-router-dom";
import styleFooter from "./Footer.module.css";

import imgLogo from "../../assets/image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faTwitter,faGoogle,faInstagram, faGit } from "@fortawesome/free-brands-svg-icons";

export default function Footer (){
    return (
        <footer>
            <div className={styleFooter.footerTop}>
                <div className={styleFooter.logo}>
                    <ul>
                        <li>
                            <Link to={`/`}>
                                <img src={imgLogo} alt="Logo" />
                            </Link>
                        </li>
                        <li>
                            Lorem Ipsum asdasd asd asd asd asd asd aedasfasdfa
                        </li>
                    </ul>
                </div>
                <div className={styleFooter.footerLorem}>
                    <ul>
                        <li>
                            <h4>Lorem</h4>
                        </li>
                        <li>
                            Ipsum
                        </li>
                        <li>
                            Ipsum
                        </li>
                        <li>
                            Ipsum
                        </li>
                        <li>
                            Ipsum
                        </li>
                    </ul>
                </div>
                <div className={styleFooter.footerLorem}>
                    <ul>
                        <li>
                            <h4>Lorem</h4>
                        </li>
                        <li>
                            Ipsum
                        </li>
                        <li>
                            Ipsum
                        </li>
                        <li>
                            Ipsum
                        </li>
                        <li>
                            Ipsum
                        </li>
                    </ul>
                </div>
                <div className={styleFooter.footerLorem}>
                    <ul>
                        <li>
                            <h4>Lorem</h4>
                        </li>
                        <li>
                            Ipsum
                        </li>
                        <li>
                            Ipsum
                        </li>
                        <li>
                            Ipsum
                        </li>
                        <li>
                            Ipsum
                        </li>
                    </ul>
                </div>
                <div className={styleFooter.footerLorem}>
                    <ul>
                        <li>
                            <h4>Lorem</h4>
                        </li>
                        <li>
                            Ipsum
                        </li>
                        <li>
                            Ipsum
                        </li>
                        <li>
                            Ipsum
                        </li>
                        <li>
                            Ipsum
                        </li>
                    </ul>
                </div>
                <div className={styleFooter.footerLorem}>
                    <ul>
                        <li>
                            <h4>Lorem</h4>
                        </li>
                        <li>
                            Ipsum
                        </li>
                        <li>
                            Ipsum
                        </li>
                        <li>
                            Ipsum
                        </li>
                        <li>
                            Ipsum
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styleFooter.footerBottom}>
                <div>Lorem</div>
                <div className={styleFooter.divIcons}>
                    <ul>
                        <li>
                            <a href ="https://www.facebook.com/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </li>
                        <li>
                            <a href ="https://twitter.com/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li>
                            <a href ="https://plus.google.com/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faGoogle} />
                            </a>
                        </li>
                        <li>
                            <a href ="https://www.instagram.com/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li>
                            <a href ="https://github.com/Marcelles0" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faGit} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        
    );
}