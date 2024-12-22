import React, {useState, useEffect} from 'react'
import Classes from "./home.module.css";
import { motion } from 'framer-motion';
import { DiTechcrunch } from 'react-icons/di';
import { AiOutlineProject } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";

const Navball = () => {
    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
      if (navOpen) {
        document.getElementById("navBallLine1").style.transform =
          "rotateZ(45deg) translate(00000rem, 0.5rem)";
        document.getElementById("navBallLine2").style.transform =
          "translateX(5rem)";
        document.getElementById("navBallLine3").style.transform =
          "rotateZ(-45deg) translate(0.1rem, -0.6rem)";
        document.getElementById("navBallLine1").style.marginRight = "0";
        document.getElementById("navBallLine2").style.marginRight = "0";
        document.getElementById("navBallLine3").style.marginRight = "0";
        document.getElementById("mainNavBall").style.width = "230px";
        document.getElementById("mainNavBall").style.height = "230px";
      } else {
        document.getElementById("navBallLine1").style.transform =
          "rotateZ(0deg) translate(0rem, 0rem)";
        document.getElementById("navBallLine2").style.transform =
          "translateX(0rem)";
        document.getElementById("navBallLine3").style.transform =
          "rotateZ(0deg) translate(0rem, 0rem)";
        document.getElementById("navBallLine1").style.marginRight = "1rem";
        document.getElementById("navBallLine2").style.marginRight = "1rem";
        document.getElementById("navBallLine3").style.marginRight = "1rem";
        document.getElementById("mainNavBall").style.width = "0px";
        document.getElementById("mainNavBall").style.height = "0px";
      }
    }, [navOpen]);
    
    const handleNavOpen = () => {
      setNavOpen(!navOpen);
    };

  return (
    <motion.div
      style={{ position: "fixed", zIndex: 1000, top: "2rem", right: "2rem" }}
      initial={{ opacity: 0, y: -100, x: 100 }}
      animate={{ opacity: 1, y: -35, x: 35 }}
      transition={{ duration: 1 }}
    >
    <div className={Classes.mainNavBall} id="mainNavBall" style={{fontSize:"1.5rem", color:'black'}}>
      <a href='#projects' className="edge-element"><AiOutlineProject /></a>
      <a href='#services' className="edge-element"><MdMiscellaneousServices /></a>
      <a href='#' className="edge-element"><DiTechcrunch /></a>
      <a href='#experiences' className="edge-element"><FaUserTie /></a>
      <a href='#testimonials' className="edge-element"><FaQuoteLeft /></a>
    </div>  

    <div className={Classes.navBall} onClick={handleNavOpen}>
        <div className={Classes.navBallLine1} id="navBallLine1"></div>
        <div className={Classes.navBallLine2} id="navBallLine2"></div>
        <div className={Classes.navBallLine3} id="navBallLine3"></div>
    </div>
    </motion.div>
  )
}

export default Navball