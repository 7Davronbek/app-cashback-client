import React, { useState } from 'react'
import { getLanguage, getText } from '../locales/index'
import { LANGUAGE } from '../tools/constants';
import {
  isIOS
} from "react-device-detect";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const [burger, setBurger] = useState(false)
  const [ios, setIos] = useState('')

  const changeNavbar = () => {

    if (isIOS) {
      setIos("https://apps.apple.com/app/capsigo/id1547746310")
    }
    else {
      setIos('https://play.google.com/store/apps/details?id=com.tetraz.capsigo')
    }

    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeNavbar);

  const changeLanguage = (e) => {
    localStorage.setItem(LANGUAGE, e.target.value)
    document.location.reload(true)
  }

  return (
    <>



      <div className={`navBar ${navbar ? 'active' : ''}`}>
        <div className="container">
          <div className="row justify-content-between align-items-center ">
            <div className="col-lg-2 col-md-4 col-6">
              <div className="logo">
                <a href="/">
                  <img src="../img/logo.svg" alt="" />
                </a>
              </div>
            </div>


            <div className={`col-9 mobileWrap ${burger ? '' : 'burgered'}`}>
              <ul className='nav-menu'>
                <li>
                  <a onClick={() => setBurger(!burger)} href="/">{getText("home")}</a>
                </li>
                <li>
                  <a onClick={() => setBurger(!burger)} href="#about">{getText("aboutUs")}</a>
                </li>
                <li>
                  <a onClick={() => setBurger(!burger)} href="#function">{getText("functions")}</a>
                </li>
                {/* <li>
                  <a href="">Отзывы</a>
                </li> */}
                {/* <li>
                  <a href="">Блог</a>
                </li> */}
                <li>
                  <a onClick={() => setBurger(!burger)} href="#contacts">{getText("contacts")}</a>
                </li>

                <li><div className="btn-download">
                  <a href={ios} className="btn" download>{getText("download")}</a>
                </div>
                </li>
                <li><select  className='siteLang' onChange={changeLanguage}>
                  <option value="ru" selected={getLanguage() === "ru"} >Ру</option>
                  <option value="uz" selected={getLanguage() === "uz"} >Uz</option>
                </select></li>
              </ul>
            </div>


            <div onClick={() => setBurger(!burger)} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
              <div className="burger1"></div>
              <div className="burger2"></div>
              <div className="burger3"></div>
            </div>

          </div>
        </div>

      </div>

    </>
  );
};

export default Navbar;
