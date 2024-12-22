import React, {useState, useEffect} from 'react'
import Classes from "./home.module.css";

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
    <>
    <div className={Classes.mainNavBall} id="mainNavBall"></div>

    <div className={Classes.navBall} onClick={handleNavOpen}>
        <div className={Classes.navBallLine1} id="navBallLine1"></div>
        <div className={Classes.navBallLine2} id="navBallLine2"></div>
        <div className={Classes.navBallLine3} id="navBallLine3"></div>
    </div>
    </>
  )
}

export default Navball