/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../css/Header.css";
import { FaBars } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import { LuArrowDownUp } from "react-icons/lu";
import { MdOutlineAttractions } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { RiNftLine } from "react-icons/ri";
import { BiCollection } from "react-icons/bi";
import { PiHeadsetLight } from "react-icons/pi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import { CgDarkMode } from "react-icons/cg";
import Image from '../assets/logo.svg'

function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="main-header">
      <div className="container">
        <div className="row">
          <div className="header">
            <div className="left">
              <h1>Dashboard</h1>
            </div>
            <div className="right">
              <p>FONT SCALE</p>
              <input type="range" />
              <input className="search-text" type="text" placeholder="Search" />
              <i className="icon" onClick={handleSidebarToggle}>
                <FaBars />
              </i>
            </div>

            
              <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="top-sidebar">
                <img src={Image}  />
                <span>InCrypto</span>
                </div>
                <div className="bottom-sidebar">
                <ul>
                  <li><BiSolidDashboard className="icon-1"/>Dashboard</li>
                  <li><LuArrowDownUp className="icon-1"/>Trade</li>
                  <li><MdOutlineAttractions className="icon-1"/>Actions</li>
                  <li><CiWallet className="icon-1"/>Wallet</li>
                  <li><RiNftLine className="icon-1"/>NFT</li>
                  <li><BiCollection className="icon-1"/>Collections</li>
                  <li><PiHeadsetLight className="icon-1"/>Support</li>
                  <li><IoIosNotificationsOutline className="icon-1"/>Notifications</li>
                  <li><CiCircleInfo className="icon-1"/>InCrypto Info</li>
                  <li><CgDarkMode className="icon-1"/>Dark Theme</li>
                </ul>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
