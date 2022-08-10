import React from "react";
import styleContact from "./Contact.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";


export default function Contact (){
    return (
        <div className={styleContact.section}>
            <section>
                <h1>Contact-Us</h1>
            </section>
            <section className={styleContact.noColor}>
                <div className={`${styleContact.container} ${styleContact.row}`}>
                    <div className={styleContact.containerDivs}>
                        <h3 className={styleContact.marginDiv}>Get in Touch</h3>
                        <div className={styleContact.row}>
                            <div className={styleContact.marginDiv}>
                                <div className={styleContact.marginDiv}>Name</div>
                                <input id="name" type="text" placeholder="Your Name"></input>
                            </div>
                            <div className={styleContact.marginDiv}>
                                <div className={styleContact.marginDiv}>Email</div>
                                <input id="Email" type="text" placeholder="Your Email"></input>
                            </div>
                        </div>
                        <div>
                            <div className={styleContact.marginDiv}>
                                <div className={styleContact.marginDiv}>Phone</div>
                                <input id="Phone" type="text" placeholder="Your Phone Number"></input>
                            </div>
                        </div>
                        <div>
                            <div className={styleContact.marginDiv}>
                                <div className={styleContact.marginDiv}>Message</div>
                                <textarea id="Message" type="text" placeholder="Type Your Message Here" rows={5}></textarea>
                            </div>
                        </div>
                        <button id="submit" className={styleContact.buttonMessage}>
                            Send Message
                        </button>
                    </div>
                    <div className={styleContact.containerDivs}>
                        <div className={styleContact.color}>
                            <h2 className={styleContact.marginDiv}>Contact Info</h2>
                            <div>
                                <div>
                                    <ul className={styleContact.rowLeft}>
                                        <li>
                                            <p><FontAwesomeIcon icon={faPhone} />  +0123 456 789</p>
                                        </li>
                                        <li>
                                            <p><FontAwesomeIcon icon={faEnvelope} />  xyz@gmail.com</p>
                                        </li>
                                        <li>
                                            <p><FontAwesomeIcon icon={faLocationDot} />  Carol J. Stephens 1635 Franklin, Montgomery, AL 36104 USA</p>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <iframe title="googleMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.1986080966717!2d-4.436011749158717!3d36.71779107993551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f79ecd8092c1%3A0x52758d95fa6b028b!2sCODE%20SPACE!5e0!3m2!1ses!2ses!4v1659435735077!5m2!1ses!2ses" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/* width="400" height="300" style="border:0;"   */></iframe>
                                    {/* <iframe title="googleMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840289118572!2d144.95373631550405!3d-37.81720974201396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1543402448828" allowfullscreen=""></iframe> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}