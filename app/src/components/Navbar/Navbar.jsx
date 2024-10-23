import React, { useState } from 'react';
import { MdMailOutline } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import './Navbar.css';

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDiv = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='navbar'>
      <div className="content">
        <div className="icons">
          <div className="div1">
            <a href=""><MdMailOutline /> holidayplanners@gmail.com</a>
            <a className='b' href=""><FaPhoneAlt /> +1234567890</a>
          </div>
          <div className="div2">
            <a href=""><FaFacebookF /></a>
            <a className='b' href=""><FaInstagram /></a>
            <a className='b' href=""><FaTwitter /></a>
          </div>
        </div>
        <div className="logo">
          <img src="https://html.geekcodelab.com/holiday-planners/assets/images/logo.png" alt="" />
          <div>
            <a className='button' href="">Reserve</a>
            <a className='round' ><IoSearch /></a>
            <a className='round icon' onClick={toggleDiv}><FaBars /></a>
          </div>
        </div>
      </div>
      {isVisible && (
        <div className="overlay">
            <img className='img' src="https://html.geekcodelab.com/holiday-planners/assets/images/logo-icon-white.svg" alt="" />
            <div className="divicon">
            <IoLogoFacebook className='mrgnbt' />
            <FaInstagramSquare className='mrgnbt' />
            <AiFillTwitterCircle className='mrgnbt' />
            </div>
          <div className="overlay-content">
            <div><img src="https://html.geekcodelab.com/holiday-planners/assets/images/white-logo.png" alt="" /></div>
            <div className="pagesas">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Destination</a>
              <a href="#">Tour</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
            <a className='round icon' onClick={toggleDiv}><IoMdClose /></a>
        </div>
      )}
    </div>
  );
};
