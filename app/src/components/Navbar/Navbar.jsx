import React from 'react'
import './Navbar.css'
import { MdMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FiBarChart } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";


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
      <div className="content">
        <form action="">
          <div>
            <span><FaLocationDot /></span>
            <input type="text" className='form-input' placeholder="Where To?" />
          </div>
          <div>
            <span><FaCalendarAlt /></span>
            <select className="form-input">
              <option>When?</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>
          <div>
            <span><FaFlag /></span>
            <select class="form-input">
              <option>Travel Type</option>
              <option>Cultural</option>
              <option>Adventure</option>
              <option>Historical</option>
              <option>Seaside</option>
              <option>Discovery</option>
            </select>
          </div>
          <button>FIND NOW</button>
        </form>
      </div>
    </div>
    <div className="cont2">
     <div className="content">
      <div className='imagescont2'>
        <div className='cont2img1'>
            <div class="image-wrapper1"></div>
        </div>
        <div className='cont2img2'>
            <div class="image-wrapper2"></div>
        </div>
      </div>
      <div className='aboutus'>
        <div className="h4div">
          <h4 className="h4">About us</h4>
        </div>
          <h2 className="h2">Plan Your <span>Trip</span> with <span>Us</span></h2>
        <div className="p">
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small
          river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control
          about the blind texts it is an almost unorthographic. Italic Mountains, she had a last view back on the skyline</p>
        </div>
        <div className='btn'>
           <a href="" title="Read More" className="aboutus-btn">Read More</a>
        </div>
      </div>
     </div>
    </div>
    <div className="cont3">
      <div className="content">
        <div className="amazingoffers">
          <h4 className='h4'>Amazing Offers</h4>
        </div>
        <div className="carousel">
          <h1></h1>
        </div>
      </div>
    </div>



    {/* This is a comment inside JSX 
    <div className="cont4">
      <div className='video-container'>
        <video autoPlay muted loop>
          <source src="https://html.geekcodelab.com/holiday-planners/assets/images/highlight-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='sec-wrap1'>
        <h1 className='block'>Traveling Highlights</h1>
        <h2 className='block'>Your New Traveling Idea</h2>
      </div>
      <div className='content'>
        <div className='tour-service-box'>
          <div className='tour-service-image'>
            <img src="https://html.geekcodelab.com/holiday-planners/assets/images/tour-service-icon1.svg" alt="" />
          </div>
          <div className='tour-service-content'>
            <h4>700+ DESTINATIONS</h4>
            <p>Far far away, behind the word mountains, far countries Vokalia.</p>
          </div>
        </div>
        <div className='tour-service-box'>
          <div className='tour-service-image'>
            <img src="https://html.geekcodelab.com/holiday-planners/assets/images/tour-service-icon2.svg" alt="" />
          </div>
          <div className='tour-service-content'>
            <h4>BEST PRICE GUARANTEE</h4>
            <p>Far far away, behind the word mountains, far countries Vokalia.</p>
          </div>
        </div>
        <div className='tour-service-box'>
          <div className='tour-service-image'>
            <img src="https://html.geekcodelab.com/holiday-planners/assets/images/tour-service-icon3.svg" alt="" />
          </div>
          <div className='tour-service-content'>
            <h4>TOP NOTCH SUPPORT</h4>
            <p>Far far away, behind the word mountains, far countries Vokalia.</p>
          </div>
        </div>
      </div>
    </div>
    */}
    </>
  )
}
