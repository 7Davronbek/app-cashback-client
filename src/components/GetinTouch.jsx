import React from 'react'
import { getText } from '../locales'

const GetinTouch = () => {
    return (
        <div className='GetinTouch position-relative' id='contacts' >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6" style={{zIndex:12}}>
                        <img className='w-100' src="../img/illustration.png" alt="" />
                    </div>
                    <div className="col-lg-6" style={{zIndex:12}}>
                        <form action="" className="getintouchForm">
                            <div className="titles">
                                <h2>{getText("leaveRequest")}</h2>
                                <p>{getText("requestDesc")}</p>
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder={getText("contactName")} id="name" />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder={getText("contactEmail")} id="email" />
                            </div>
                            <div className="form-control">
                                <input type="tel" placeholder={getText("consultingPlaceholder")} id="phone" />
                            </div>
                            <div className="form-control">
                                <textarea placeholder={getText("contactMsg")} className='msg'></textarea>
                            </div>

                            <div className="btn-send">
                                <button className="btn">{getText("sendBtn")}</button>
                            </div>
                        </form>
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

export default GetinTouch