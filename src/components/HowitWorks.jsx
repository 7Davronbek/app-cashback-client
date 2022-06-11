import React from 'react'
import { getText } from '../locales'

const HowitWorks = () => {
    return (
        <div className='HowitWorks position-relative' id='function'>
               <div className="for1"></div>
            <div className="for2"></div>
            <div className="for3"></div>
            <div className="for4"></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6" style={{zIndex:13}}>
                        <div className="info">
                            <h2>{getText("howWorkTitle")}</h2>
                            <div className="wrap d-flex align-items-center">
                                <div className="img">
                                    <img src="../img/apw-Icon2.png" alt="" />
                                </div>
                                <div className="text">
                                    <h4>{getText("howblogTitle1")}</h4>
                                    <p>{getText("howblogDesc1")}</p>
                                </div>
                            </div>
                            <div className="wrap d-flex align-items-center">
                                <div className="img">
                                    <img src="../img/apw-Icon1.png" alt="" />
                                </div>
                                <div className="text">
                                    <h4>{getText("howblogTitle2")}</h4>
                                    <p>{getText("howblogDesc2")}</p>
                                </div>
                            </div>
                        
                            <div className="wrap d-flex align-items-center">
                                <div className="img">
                                    <img src="../img/apw-Icon4.png" alt="" />
                                </div>
                                <div className="text">
                                    <h4>{getText("howblogTitle3")}</h4>
                                    <p>{getText("howblogDesc3")}</p>
                                </div>
                            </div>

                            <div className="wrap d-flex align-items-center">
                                <div className="img">
                                    <img src="../img/apw-Icon3.png" alt="" />
                                </div>
                                <div className="text">
                                    <h4>{getText("howblogTitle4")}</h4>
                                    <p>{getText("howblogDesc4")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img">
                            <img src="../img/app-work-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowitWorks