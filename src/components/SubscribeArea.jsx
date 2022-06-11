import React from 'react'
import { getText } from '../locales'

const SubscribeArea = () => {
    return (
        <div className='SubscribeArea' id='subscribe'>

            <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                    <div className="info">
                        <h2>{getText("consultingTitle")}</h2>
                        <p>{getText("consultingDesc")}</p>
                        <form action="">
                            <div className="tel">
                                <input placeholder={getText("consultingPlaceholder")} type="tel" />
                                <button>{getText("sendBtn")}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscribeArea