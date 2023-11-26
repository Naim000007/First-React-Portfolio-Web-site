import React from "react";
import "./Navbar.css";
import logo from "../../../public/2790617-ffeb3b.png";
import contactImg from "../../assets/assets/contact.png";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
       <Link  to="intro" smooth={true} offset={-280}> <img src={logo}  alt="logo" className="logo" onClick={()=>{
          document.getElementById('naim').scrollIntoView({behavior:"smooth"});
        }} /></Link>
        <div  className="desktopMenu">
          <Link
            activeClass="active"
            to="intro"
            duration={1000}
            spy={true}
            smooth={true}
            offset={-270}
            className="desktopMenuListItem"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            duration={1000}
            spy={true}
            smooth={true}
            offset={-50}
            className="desktopMenuListItem"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            duration={1000}
            spy={true}
            smooth={true}
            offset={-120}
            className="desktopMenuListItem"
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="clients"
            duration={1000}
            spy={true}
            smooth={true}
            offset={-70}
            className="desktopMenuListItem"
          >
            Clients
          </Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:"smooth"});
        }}>
          <img src={contactImg}  alt="contact img" className="desktopMenuImg" />
          Contact Me
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
