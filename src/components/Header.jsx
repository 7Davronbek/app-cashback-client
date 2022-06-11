import React from 'react'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { getText } from '../locales';

const Header = () => {
  return (
    <>

      <MouseParallaxContainer >
        <div className='header'>

          <MouseParallaxChild factorX={0.03} factorY={0.05} >
            <div className="for1"></div>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.07} factorY={0.08}>
            <div className="for2"></div>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.07} factorY={0.08}>
            <div className="for3"></div>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.07} factorY={0.08}>
            <div className="for4"></div>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.07} factorY={0.08}>
            <div className="for5"></div>
          </MouseParallaxChild>


          <div className="container">
            <div className="row align-items-center justify-content-md-center">

              <div className="col-lg-7 col-md-10" style={{ zIndex: 12 }}>
                <div className="info">
                  <h1><span>MoneyBek</span> <br /> {getText("headertitle1")} {getText("cashBack")}  </h1>
                  <p>{getText("underMainTitle")}</p>
                  <div className="buttons">
                    <div className="download">
                      <a href='#about'>{getText("more")}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-8">
                <div className="imgMobile">
                  <img className='w-100' src="img/mobile.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </MouseParallaxContainer>

    </>
  )
}

export default Header