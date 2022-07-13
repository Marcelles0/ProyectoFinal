import React from "react";
import { Link } from "react-router-dom";
import styleHeader from "./Header.module.css";

import imgLogo from "../../assets/image/logo.png";

export default function Header() {

    const openMenu=()=>{
        //document.querySelector(`.${styleHeader.buttonCollapsed}`)
        let buttonMenu = document.querySelector("button");
        if(buttonMenu.getAttribute('aria-expanded')==="false"){
            buttonMenu.setAttribute('aria-expanded', "true");
            document.querySelector(`.${styleHeader.navbarExpanded}`).classList.add(`${styleHeader.show}`);
        }
        else{
            buttonMenu.setAttribute('aria-expanded',"false");
            document.querySelector(`.${styleHeader.navbarExpanded}`).classList.remove(`${styleHeader.show}`);
        }
        //console.log(buttonMenu.getAttribute('aria-expanded'));
    }
    
       
    window.addEventListener("scroll", ()=>{
        let headerScroll = document.querySelector("header");
        let windowScroll = window.pageYOffset;
        if (windowScroll >= 80) {
            headerScroll.classList.add(`${styleHeader.menuSticky}`);
        } else {
            headerScroll.classList.remove(`${styleHeader.menuSticky}`);
        }
    })


    return (
        <header className={styleHeader.header}>
            <div className={styleHeader.logo}>
                <Link to={`/`}>
                    <img src={imgLogo} alt="Logo" />
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
                
                    {
                    (localStorage.getItem("token")!==null)&&(localStorage.getItem("token")!==undefined)
                    ? (<ul><li><Link to={`/dashboard`}>Dashboard</Link></li><li>
                        <button type="button" onClick={()=>{
                            localStorage.removeItem("token");
                            localStorage.removeItem("user");
                            window.location.href="/login";
                        }} className={styleHeader.buttonLogin}>Logout</button></li></ul>)
                    : (
                    <ul>
                        <li>
                            <Link to={`/login`}>Login</Link>
                        </li>
                        <li>
                            <Link to={`/register`}>Register</Link>
                        </li>
                    </ul>
                    )
                    }
                    
            </div>
            <div className={styleHeader.buttonResponsive} >
                <button className={styleHeader.buttonCollapsed} aria-expanded="false" onClick={openMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <div className={styleHeader.navbarExpanded}>
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
            </div>
        </header>
    );
}
