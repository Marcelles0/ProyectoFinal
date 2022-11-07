import React from "react";
import styleHome from "./Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,
    faTwitter,
    faInstagram,
    faGit,faFacebook } from "@fortawesome/free-brands-svg-icons";
import imgBackground from "../../assets/image/background.png";
import imgBackgroundWhite from "../../assets/image/backgroundWhite.png";
import imgBanner from "../../assets/image/banner.webp";
import imgUser from "../../assets/image/user.png"
import videoBackground from "../../assets/Spiral.mp4";



export default function Home() {

    const openRS = () => {
        let listContainer = document.querySelector(`.${styleHome.openRS}`);
        console.log("click");

        if (listContainer.hasAttribute(`.${styleHome.opened}`)) {
            listContainer.classList.remove(`.${styleHome.opened}`);
        } else {
            listContainer.classList.add(`.${styleHome.opened}`);
        }
    }

    
    const changeActive = (itemValue) => {
        //document.querySelector(`.${styleHeader.buttonCollapsed}`)
        /* console.log(itemValue);
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

        
        //console.log(itemDot.getAttribute('aria-expanded'));*/
        /* let i=2;

	
        $(document).ready(function(){
            var radius = 200;
            var fields = $('.itemDot');
            var container = $('.dotCircle');
            var width = container.width();
            radius = width/2.5;
 
		    var height = container.height();
            var angle = 0, step = (2*Math.PI) / fields.length;
            fields.each(function() {
                var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
                var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
			
                $(this).css({
                    left: x + 'px',
                    top: y + 'px'
			});
			angle += step;
		});
		
		
		$('.itemDot').click(function(){
			
			var dataTab= $(this).data("tab");
			$('.itemDot').removeClass('active');
			$(this).addClass('active');
			$('.CirItem').removeClass('active');
			$( '.CirItem'+ dataTab).addClass('active');
			i=dataTab;
			
			$('.dotCircle').css({
				"transform":"rotate("+(360-(i-1)*36)+"deg)",
				"transition":"2s"
			});
			$('.itemDot').css({
				"transform":"rotate("+((i-1)*36)+"deg)",
				"transition":"1s"
			});
			
			
		});
		
		setInterval(function(){
			var dataTab= $('.itemDot.active').data("tab");
			if(dataTab>6||i>6){
			dataTab=1;
			i=1;
			}
			$('.itemDot').removeClass('active');
            $('[data-tab="'+i+'"]').addClass('active');
            $('.CirItem').removeClass('active');
            $( '.CirItem'+i).addClass('active');
            i++;
			
			
			$('.dotCircle').css({
				"transform":"rotate("+(360-(i-2)*36)+"deg)",
				"transition":"2s"
			});
			$('.itemDot').css({
				"transform":"rotate("+((i-2)*36)+"deg)",
				"transition":"1s"
			});
			
			}, 5000);
		
	}); */
    };

    return (
        <div>
            {/* <video src={videoBackground} muted loop>
            </video> */}
            {/* <video width="100%" height="100%" preload="auto" muted loop autoPlay>
                <source src={videoBackground} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video> */}
            <div className={styleHome.section}>
                <img class={styleHome.banner}src={imgBanner} alt="imgBanner" />
                <ul className={styleHome.ulBody}>
                    
                    <h2>JavaScript Translate</h2>
                    <p>
                        Traduce del lenguaje natural a JavaScript en un solo
                        click
                    </p>
                    
                </ul>
                <img class={styleHome.lettersImg} src={imgBackgroundWhite} alt="imgBackgroundWhite" />
            </div>
            {/* <div className={styleHome.circleDiv}>
                <div className={styleHome.holderCircle}>
                    <div className={styleHome.round}></div>
                    <div className={styleHome.dotCircle}>
                        <div
                            className={`${styleHome.itemDot} ${styleHome.itemDot1} ${styleHome.active}`}
                            data-tab="item1"
                            onClick={changeActive("item1")}
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                            <span className={styleHome.forActive}></span>
                        </div>
                        <div
                            className={`${styleHome.itemDot} ${styleHome.itemDot2}`}
                            data-tab="item2"
                            onClick={changeActive("item2")}
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                            <span className={styleHome.forActive}></span>
                        </div>
                        <div
                            className={`${styleHome.itemDot} ${styleHome.itemDot3}`}
                            data-tab="item3"
                            onClick={changeActive("item3")}
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                            <span className={styleHome.forActive}></span>
                        </div>
                        <div
                            className={`${styleHome.itemDot} ${styleHome.itemDot4}`}
                            data-tab="item4"
                            onClick={changeActive("item4")}
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                            <span className={styleHome.forActive}></span>
                        </div>
                        <div
                            className={`${styleHome.itemDot} ${styleHome.itemDot5}`}
                            data-tab="item5"
                            onClick={changeActive("item5")}
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                            <span className={styleHome.forActive}></span>
                        </div>
                        <div
                            className={`${styleHome.itemDot} ${styleHome.itemDot6}`}
                            data-tab="item6"
                            onClick={changeActive("item6")}
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                            <span className={styleHome.forActive}></span>
                        </div>
                    </div>
                    <div className={styleHome.contentCircle}>
                        <div
                            className={`${styleHome.cirItem} ${styleHome.cirItem1} ${styleHome.active}`}
                        >
                            <h2 className={styleHome.title}>
                                <span>Logeate</span>
                            </h2>
                            <p>
                                Regístrate e inicia sesión para poder disfrutar
                                de las ventajas del traductor de JavaScript
                            </p>
                        </div>
                        <div
                            className={`${styleHome.cirItem} ${styleHome.cirItem2}`}
                        >
                            <h2 className={styleHome.title}>
                                <span>Chat </span>
                            </h2>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout.
                            </p>
                        </div>
                        <div
                            className={`${styleHome.cirItem} ${styleHome.cirItem3}`}
                        >
                            <h2 className={styleHome.title}>
                                <span>Responses</span>
                            </h2>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout.
                            </p>
                        </div>
                        <div
                            className={`${styleHome.cirItem} ${styleHome.cirItem4}`}
                        >
                            <h2 className={styleHome.title}>
                                <span>Tags</span>
                            </h2>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout.
                            </p>
                        </div>
                        <div
                            className={`${styleHome.cirItem} ${styleHome.cirItem5}`}
                        >
                            <h2 className={styleHome.title}>
                                <span>Sharing</span>
                            </h2>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout.
                            </p>
                        </div>
                        <div
                            className={`${styleHome.cirItem} ${styleHome.cirItem6}`}
                        >
                            <h2 className={styleHome.title}>
                                <span>Support</span>
                            </h2>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout.
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className={styleHome.scrollContainer}>
                <div className={`${styleHome.scrollItem} ${styleHome.scrollBlue}`}>
                    <h2>Lorem Ipsum</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officiis ea ex culpa reiciendis sed hic nemo dignissimos? Earum iste adipisci amet, ea veniam odit autem qui mollitia voluptate delectus.
                    
                </div>
                <div className={`${styleHome.scrollItem} ${styleHome.scrollGreen}`}>
                    <h2>Lorem Ipsum</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officiis ea ex culpa reiciendis sed hic nemo dignissimos? Earum iste adipisci amet, ea veniam odit autem qui mollitia voluptate delectus.
                    
                </div>
                <div className={`${styleHome.scrollItem} ${styleHome.scrollPurple}`}>
                    <h2>Lorem Ipsum</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officiis ea ex culpa reiciendis sed hic nemo dignissimos? Earum iste adipisci amet, ea veniam odit autem qui mollitia voluptate delectus.
                    
                </div>
                <div className={`${styleHome.scrollItem} ${styleHome.scrollOrange}`}>
                    <h2>Lorem Ipsum</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officiis ea ex culpa reiciendis sed hic nemo dignissimos? Earum iste adipisci amet, ea veniam odit autem qui mollitia voluptate delectus.
                    
                </div>
                <div className={`${styleHome.scrollItem} ${styleHome.scrollYellow}`}>
                    <h2>Lorem Ipsum</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti officiis ea ex culpa reiciendis sed hic nemo dignissimos? Earum iste adipisci amet, ea veniam odit autem qui mollitia voluptate delectus.
                    
                </div>
            </div>
            <div className={styleHome.leadershipContainer}>
                <div>
                    <div>
                        <h3>Leadership team</h3>
                    </div>
                    <div>
                        <p>We work with the Owners and Directors of hundreds of training providers, helping them grow and where appropriate sell their training businesses.</p>
                    </div>
                    <div className={styleHome.leadershipTeam}>
                        <div>
                            <div className={styleHome.team}><img src={imgUser}></img></div>
                            <div className={styleHome.buttonRS}>
                                <span className={styleHome.openIconList}></span>
                                <div className={styleHome.openList}>
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                    <a
                                        href="https://twitter.com/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a
                                        href="https://github.com/Marcelles0"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <FontAwesomeIcon icon={faGit} />
                                    </a>
                                </div>
                            </div>
                            <h4>Lorem Ipsum</h4>
                            <p>Founder</p>
                        </div>
                        <div>
                            <div className={styleHome.team}><img src={imgUser}></img></div>
                            <div className={styleHome.buttonRS}>
                                <span className={styleHome.openIconList}></span>
                                <div className={styleHome.openList}>
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                    <a
                                        href="https://twitter.com/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a
                                        href="https://github.com/Marcelles0"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <FontAwesomeIcon icon={faGit} />
                                    </a>
                                </div>
                            </div>
                            <h4>Lorem Ipsum</h4>
                            <p>Founder</p>
                        </div>
                        <div>
                            <div className={styleHome.team}><img src={imgUser}></img></div>
                            <div className={styleHome.buttonRS}>
                                <span className={styleHome.openIconList}></span>
                                <div className={styleHome.openList}>
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                    <a
                                        href="https://twitter.com/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a
                                        href="https://github.com/Marcelles0"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <FontAwesomeIcon icon={faGit} />
                                    </a>
                                </div>
                            </div>
                            <h4>Lorem Ipsum</h4>
                            <p>Founder</p>
                        </div>
                        <div>
                            <div className={styleHome.team}><img src={imgUser}></img></div>
                            <div className={styleHome.buttonRS}>
                                {/* <button  onClick={openRS}> */}<span className={styleHome.openIconList}></span>{/* </button> */}
                                <div className={styleHome.openList}>
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                    <a
                                        href="https://twitter.com/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a
                                        href="https://github.com/Marcelles0"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <FontAwesomeIcon icon={faGit} />
                                    </a>
                                </div>
                            </div>
                            <h4>Lorem Ipsum</h4>
                            <p>Founder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
