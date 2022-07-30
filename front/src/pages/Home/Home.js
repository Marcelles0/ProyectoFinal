import React from "react";
import styleHome from "./Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import imgBackground from "../../assets/image/background.png";

export default function Home (){

    const changeActive=(itemValue)=>{
        //document.querySelector(`.${styleHeader.buttonCollapsed}`)
        console.log(itemValue);
        document.querySelectorAll(`.${styleHome.itemDot}`).forEach(function(userItem) {
            // console.log(userItem.getAttribute('data-tab'));
            userItem.classList.remove(`${styleHome.active}`);
            // userItem.addEventListener('click', (e)=>{ 
            //     e.target.classList.add(`${styleHome.active}`);
            //     //var data-tab = this.querySelector(`${styleHome.data-tab}`);
            //     // userItem.classList.remove(`${styleHome.active}`);
            //     //console.log(data-tab);
            // })
            
            

            // if(userItem.classList.contains('active')){
            //     userItem.classList.remove('active');
            // }else{
            //     userItem.classList.add('active');
            //     // document.querySelector(`.${styleHeader.navbarExpanded}`).classList.add(`${styleHeader.show}`);
            //     //console.log("hola mundo");
            // }
          });

        
        //console.log(itemDot.getAttribute('aria-expanded'));
    }


    return (
        <div>
            {/* <video src="../../assets/Spiral.mp4">

            </video> */}
            <div className={styleHome.section}>
                <ul className={styleHome.ulBody}>
                    <li>
                        <h2>Lorem Ipsum</h2>
                        Traduce del lenguaje natural a JavaScript de un solo click
                    </li>
                    <li><img src={imgBackground} alt="imgBackground" /></li>
                </ul>

            </div>
            <div className={styleHome.circleDiv}>
                <div className={styleHome.holderCircle}>
                    <div className={styleHome.round}></div>
                    <div className={styleHome.dotCircle}>
                        <div className={`${styleHome.itemDot} ${styleHome.itemDot1} ${styleHome.active}`} data-tab="item1" onClick={changeActive('item1')}>
                            <FontAwesomeIcon icon={faFacebook} />
                            <span className={styleHome.forActive}></span>
                        </div>
                        <div className={`${styleHome.itemDot} ${styleHome.itemDot2}`} data-tab="item2" onClick={changeActive('item2')}>
                            <FontAwesomeIcon icon={faFacebook} />
                            <span className={styleHome.forActive}></span>
                        </div>
                        <div className={`${styleHome.itemDot} ${styleHome.itemDot3}`} data-tab="item3" onClick={changeActive('item3')}>
                            <FontAwesomeIcon icon={faFacebook} />
                        <span className={styleHome.forActive}></span>
                        </div>
                        <div className={`${styleHome.itemDot} ${styleHome.itemDot4}`} data-tab="item4" onClick={changeActive('item4')}>
                            <FontAwesomeIcon icon={faFacebook} />
                        <span className={styleHome.forActive}></span>
                        </div>
                        <div className={`${styleHome.itemDot} ${styleHome.itemDot5}`} data-tab="item5" onClick={changeActive('item5')}>
                            <FontAwesomeIcon icon={faFacebook} />
                        <span className={styleHome.forActive}></span>
                        </div>
                        <div className={`${styleHome.itemDot} ${styleHome.itemDot6}`} data-tab="item6" onClick={changeActive('item6')}>
                            <FontAwesomeIcon icon={faFacebook} />
                        <span className={styleHome.forActive}></span>
                        </div>
                    </div>
                    <div className={styleHome.contentCircle}>
                        <div className={`${styleHome.cirItem} ${styleHome.cirItem1} ${styleHome.active}`}>
                            <h2 className={styleHome.title}><span>Logeate</span></h2>
                            <p>Regístrate e inicia sesión para poder disfrutar de las ventajas del traductor de JavaScript</p>
                            
                        </div>
                        <div className={`${styleHome.cirItem} ${styleHome.cirItem2}`}>
                            <h2 className={styleHome.title}><span>Chat </span></h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            
                        </div>
                        <div className={`${styleHome.cirItem} ${styleHome.cirItem3}`}>
                            <h2 className={styleHome.title}><span>Responses</span></h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            
                        </div>
                        <div className={`${styleHome.cirItem} ${styleHome.cirItem4}`}>
                            <h2 className={styleHome.title}><span>Tags</span></h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            
                        </div>
                        <div className={`${styleHome.cirItem} ${styleHome.cirItem5}`}>
                            <h2 className={styleHome.title}><span>Sharing</span></h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            
                        </div>
                        <div className={`${styleHome.cirItem} ${styleHome.cirItem6}`}>
                            <h2 className={styleHome.title}><span>Support</span></h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}