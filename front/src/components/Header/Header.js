import React from "react";
import { Link } from "react-router-dom";
import styleHeader from "./Header.module.css";

import imgLogo from "../../assets/image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage,faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const openMenu = () => {
        //document.querySelector(`.${styleHeader.buttonCollapsed}`)
        let buttonMenu = document.querySelector("button");
        let navMenu = document.querySelector(`#navMenu`);

        if (buttonMenu.getAttribute("aria-expanded") === "false") {
            buttonMenu.setAttribute("aria-expanded", "true");
            document
                .querySelector(`.${styleHeader.navbarExpanded}`)
                .classList.add(`${styleHeader.show}`);
            navMenu.classList.add(`${styleHeader.active}`);
        } else {
            buttonMenu.setAttribute("aria-expanded", "false");
            document
                .querySelector(`.${styleHeader.navbarExpanded}`)
                .classList.remove(`${styleHeader.show}`);
            navMenu.classList.remove(`${styleHeader.active}`);
        }
        //console.log(buttonMenu.getAttribute('aria-expanded'));
    };

    window.addEventListener("scroll", () => {
        let headerScroll = document.querySelector("header");
        let liScroll = document.querySelectorAll("header li");
        let windowScroll = window.pageYOffset;
        if (windowScroll >= 80) {
            headerScroll.classList.add(`${styleHeader.menuSticky}`);
            for (const li of liScroll) {
                li.classList.add(`${styleHeader.liSticky}`);
            }
        } else {
            headerScroll.classList.remove(`${styleHeader.menuSticky}`);
            for (const li of liScroll) {
                li.classList.remove(`${styleHeader.liSticky}`);
            }
        }
    });

    return (
        <header className={styleHeader.header}>
            <div className={styleHeader.logo}>
                <Link to={`/`}>
                    <h1>
                        <FontAwesomeIcon icon={faLanguage} className={styleHeader.faLanguageDetails} /> JSTranslate
                    </h1>
                </Link>
            </div>
            <div className={styleHeader.menu}>
                <ul>
                    <li>
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/contact`}>Contact</Link>
                    </li>
                    <li>
                        <Link to={`/app-translate`}>Translate</Link>
                    </li>
                </ul>
            </div>
            <div className={styleHeader.login}>
                {localStorage.getItem("token") !== null &&
                localStorage.getItem("token") !== undefined ? (
                    <ul>
                        <li>
                            <Link to={`/dashboard`}>Profile</Link>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => {
                                    localStorage.removeItem("token");
                                    localStorage.removeItem("user");
                                    window.location.href = "/login";
                                }}
                                className={styleHeader.buttonLogin}
                            >
                               <FontAwesomeIcon icon={faArrowRightFromBracket}/> Logout
                            </button>
                        </li>
                    </ul>
                ) : (
                    <ul>
                        <li>
                            <Link to={`/login`}>Login</Link>
                        </li>
                        <li>
                            <Link to={`/register`}>Register</Link>
                        </li>
                    </ul>
                )}
            </div>
            <div className={styleHeader.buttonResponsive}>
                <button
                    id="navMenu"
                    className={styleHeader.buttonCollapsed}
                    aria-expanded="false"
                    onClick={openMenu}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <div className={styleHeader.navbarExpanded}>
                    <ul>
                        <li className={styleHeader.fromLeft}>
                            <Link to={`/`}>Home</Link>
                        </li>
                        <li className={styleHeader.fromLeft}>
                            <Link to={`/contact`}>Contact</Link>
                        </li>
                        <li className={styleHeader.fromLeft}>
                            <Link to={`/app-translate`}>Translate</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
