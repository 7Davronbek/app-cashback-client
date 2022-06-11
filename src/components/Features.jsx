import React from 'react'
import { getText } from '../locales'

const Features = () => {
    return (
        <div className='Features position-relative'>
            <div className="for1"></div>
            <div className="for2"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-10 titles text-center">
                        <h2 className="section-title">{getText("featuresTitle")}</h2>
                        <p>{getText("featuresDesc")}</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-12 mb-sm-4 mb-xs-4" style={{zIndex:12}}>
                            <div className="card text-center">
                                <div className="card-top">
                                    <img src="../img/features1.png" alt="" />
                                </div>

                                <div className="card-body">
                                    <h4>{getText("featuresCard1Title")}</h4>
                                    <p>{getText("featuresCard1Desc")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 mb-sm-4 mb-xs-4" style={{zIndex:12}}>
                            <div className="card text-center">
                                <div className="card-top">
                                    <img src="../img/features2.png" alt="" />
                                </div>

                                <div className="card-body">
                                    <h4>{getText("featuresCard2Title")}</h4>
                                    <p>{getText("featuresCard2Desc")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 mb-sm-4 mb-xs-4" style={{zIndex:12}}>
                            <div className="card text-center">
                                <div className="card-top">
                                    <img src="../img/features3.png" alt="" />
                                </div>

                                <div className="card-body">
                                    <h4>{getText("featuresCard3Title")}</h4>
                                    <p>{getText("featuresCard3Desc")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="for3"></div>
            <div className="for4"></div>
        </div>
    )
}

export default Features