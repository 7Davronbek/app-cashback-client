import { faFacebookF, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { getText } from '../locales'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="footer-widget mb-30">
                            <div className="logo mt-15 mb-15">
                                <a href="/"><img src="../img/logo.svg" alt="" /></a>
                            </div>
                            <div className="footer-text mb-20">
                                <p>{getText("footerDesc")}</p>



                            </div>
                            <div className="footer-social">
                                <a href="https://www.instagram.com/moneybek.uz/"> <FontAwesomeIcon icon={faInstagram}/> </a>
                                <a href="https://t.me/moneybekuz"><FontAwesomeIcon icon={faTelegramPlane}/> </a>
                                <a href="facebook.com/moneybek.uz"><FontAwesomeIcon icon={faFacebookF}/> </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 offset-1 col-md-4 col-6 d-md-block d-none">
                        <div className="footer-widget mb-30">
                            <div className="f-widget-title">
                                <h5>{getText("fastLinks")}</h5>
                            </div>
                            <div className="footer-link">
                                <ul>
                                    <li><a href="/">{getText("home")}</a></li>
                                    <li><a href="#about">{getText("aboutUs")}</a></li>
                                    <li><a href="#function">{getText("functions")}</a></li>
                                    <li><a href="#subscribe">{getText("contactUs")}</a></li>
                                    <li><a href="#contacts">{getText("contacts")}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="footer-widget mb-30">
                            <div className="f-widget-title">
                                <h5>{getText("ourContacts")}</h5>
                            </div>
                            <div className="footer-link">
                                <div className="f-contact">
                                    <ul>
                                        <li>
                                            <div className="icons"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></div>
                                            <span><a target={'blank'} href="tel:+998908111611">{getText("phoneNumber")}</a></span>
                                        </li>
                                        <li>
                                            <div className="icons"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></div>
                                            <span><a target={'blank'} href="mailto:alisher.ict@gmail.com">{getText("email")}</a></span>
                                        </li>
                                        <li>
                                            <div className="icons"><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></div>
                                            <span><a target={'blank'} href="https://maps.windows.com/?form=WNAMSH&collection=point.41.285198_69.276052_Point">{getText("address")}</a></span>
                                        </li>
                                    </ul>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer