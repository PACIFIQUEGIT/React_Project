import React from 'react'
import './Navbar.css'
import { MdMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FiBarChart } from "react-icons/fi";

export const Navbar = () => {
  return (
    <>
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
            <a className='round' href=""><IoSearch /></a>
            <a className='round icon' href=""><FiBarChart /></a>
          </div>
        </div>
      </div>
    </div>
    <div className='cont1'>
      <h1>Get Ready to Travel <br /></h1>
      <h1><span>The World.</span></h1>
      <p>A journey of a 1000 miles starts with a single step. Import the full demo <br />
        content with 1 click and create a head-turning website for your travel agency.</p>
    </div>
    </>
  )
}
