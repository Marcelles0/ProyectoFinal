import React from "react";
import { Link } from "react-router-dom";
import styleFooter from "./Footer.module.css";

import imgLogo from "../../assets/image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faTwitter,faGoogle,faInstagram, faGit } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faLocationDot, faLanguage } from "@fortawesome/free-solid-svg-icons";

export default function Footer (){
    return (
        <footer>
            <div className={styleFooter.footerTop}>
                <div className={styleFooter.footerGroup}>
                    <div className={styleFooter.logo}>
                        <ul>
                            <li>
                                <Link to={`/`}>
                                    <h3>
                                    <FontAwesomeIcon icon={faLanguage} className={styleFooter.faLanguageDetails} /> JSTranslate
                                    </h3>
                                </Link>
                            </li>
                            <li>
                                It is a long established fact that a reader will be distracted by the readable content.
                            </li>
                        </ul>
                    </div>
                    <div className={styleFooter.footerLorem}>
                        <ul>
                            <li>
                                <h4>Industries</h4>
                            </li>
                            <li>
                                <a href="#About us">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="#Support">
                                    Support
                                </a>
                            </li>
                            <li>
                                <a href="#Blog">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#Customer">
                                    Customer
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styleFooter.footerLorem}>
                        <ul>
                            <li>
                                <h4>About us</h4>
                            </li>
                            <li>
                                <a href="#Blog">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#FAQ">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#Leadership">
                                    Leadership
                                </a>
                            </li>
                            <li>
                                <a href="#Terms of">
                                    Terms of
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styleFooter.footerLorem}>
                        <ul>
                            <li>
                                <h4>Resources</h4>
                            </li>
                            <li>
                                <a href="#About us">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="#Support">
                                    Support
                                </a>
                            </li>
                            <li>
                                <a href="#Blog">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#Customer">
                                    Customer
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className={styleFooter.footerLorem}>
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
                </div> */}
                <div className={styleFooter.footerContact}>
                    <div className={styleFooter.footerLorem}>
                        <ul>
                            <li>
                                <h4>Contact Info</h4>
                            </li>
                            <div>
                                <li>
                                    <p><FontAwesomeIcon icon={faPhone} />  +0123 456 789</p>
                                </li>
                                <li>
                                    <p><FontAwesomeIcon icon={faEnvelope} />  xyz@gmail.com</p>
                                </li>
                                <li>
                                    <p><FontAwesomeIcon icon={faLocationDot} />  Carol J. Stephens 1635 Franklin, Montgomery, AL 36104 USA</p>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styleFooter.footerBottom}>
                <div>Go to meet us!</div>
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