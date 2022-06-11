import React from 'react'
import { getText } from '../locales'

const about = () => {
    return (
        <div className='about' id='about'>
            <div className="about-img"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5" style={{zIndex:12, position:'relative'}} >
                        <div className="img">
                            <img src="../img/mobile2.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7" style={{zIndex:13}}>
                        <div className="info">
                            <h3>{getText("aboutTitle")}</h3>

                            <p>{getText("aboutDesc1")}</p>
                            <p>{getText("aboutDesc2")}</p>
                            <p>{getText("aboutDesc3")}</p>

                            <div className="download">
                                    <a href="https://apps.apple.com/uz/app/gocash/id1589010269" className='d-flex  align-items-center'>
                                <div className="appstore">
                                        <div className="img">
                                            <img src="../img/apple-icon.png" alt="" />
                                        </div>
                                        <div className="text">
                                            <p>{getText("downloadfrom")} <span>{getText("downloadAppstore")}</span></p>
                                        </div>
                                </div>
                                    </a>
                                    <a href="https://play.google.com/store/apps/details?id=com.gocash.gocashapp" className='d-flex align-items-center'>
                                <div className="g-play">
                                        <div className="img">
                                            <img src="../img/g-play-icon.png" alt="" />
                                        </div>
                                        <div className="text">
                                            <p>{getText("downloadfrom")} <span>{getText("downloadGplay")}</span></p>
                                        </div>
                                </div>
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="for1"></div>
            <div className="for2"></div>
            <div className="for3"></div>
            <div className="for4"></div>
        </div>
    )
}

export default about