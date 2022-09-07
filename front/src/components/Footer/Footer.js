import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

import imgLogo from "../../assets/image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faYoutube,
    faInstagram,
    faGit,
} from "@fortawesome/free-brands-svg-icons";
import {
    faPhone,
    faEnvelope,
    faLocationDot,
    faLanguage,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer>
            <div className={styles.content}>
                <div className={styles.wrapper}>
                    <div className={styles.logo}>
                        <Link to={`/`}>
                            <h3>
                                <FontAwesomeIcon
                                    icon={faLanguage}
                                    className={styles.faLanguageDetails}
                                />{" "}
                                JSTranslate
                            </h3>
                        </Link>
                        <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content.
                        </p>
                    </div>
                    <div>
                        <h4>Industries</h4>
                        <ul>
                            <li>
                                <a href="#About us">About us</a>
                            </li>
                            <li>
                                <a href="#Support">Support</a>
                            </li>
                            <li>
                                <a href="#Blog">Blog</a>
                            </li>
                            <li>
                                <a href="#Customer">Customer</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>About us</h4>
                        <ul>
                            <li>
                                <a href="#Blog">Blog</a>
                            </li>
                            <li>
                                <a href="#FAQ">FAQ</a>
                            </li>
                            <li>
                                <a href="#Leadership">Leadership</a>
                            </li>
                            <li>
                                <a href="#Terms of">Terms of</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4>Resources</h4>
                        <ul>
                            <li>
                                <a href="#About us">About us</a>
                            </li>
                            <li>
                                <a href="#Support">Support</a>
                            </li>
                            <li>
                                <a href="#Blog">Blog</a>
                            </li>
                            <li>
                                <a href="#Customer">Customer</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.contact}>
                    <div>
                        <h4>Contact Info</h4>
                        <ul>
                            <div>
                                <li>
                                    <p>
                                        <FontAwesomeIcon icon={faPhone} />
                                        +0123 456 789
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        xyz@gmail.com
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        {/* Carol J. Stephens  */}
                                        1635 Franklin, Montgomery, USA
                                    </p>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.social}>
                <div>
                    Go to meet us! - Made by {" "}
                    <a href="https://github.com/Marcelles0">Marcelles0</a>
                </div>
                <ul>
                    <li>
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://youtube.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/Marcelles0"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <FontAwesomeIcon icon={faGit} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
