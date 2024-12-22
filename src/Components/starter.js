import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContactForm from './contactForm';
import LogoPage from "./logoPage";
import TextScramble from "@twistezo/react-text-scramble";
import TerminalContainer from "./terminalContainer";
import Home from "./home";
import MouseDot from "./mouseDot";
import Hero from "./hero";
import BlogContainer from "./blogContainer";
import Footer from "./footer";
import TypingText from "./typingText";
import {motion} from "framer-motion";
import {textVariant} from "./experience";

const Starter = () => {
  const navigate = useNavigate();

  const randomRotation = () => {
    return Math.random() < 0.5 ? -15 : 15;
  };

  useEffect(() => {
    const gridItems = document.querySelectorAll(".blogItem");
    gridItems.forEach((item) => {
      console.log(randomRotation());
      item.style.transform = `rotateZ(${randomRotation()}deg)`;
    });
  }, []);

  useEffect(() => {
    // Update the document title when the component mounts
    document.title = "Home| webSpace";

    // Optionally, you can also reset the title when the component unmounts
    // return () => { document.title = "Default Title"; };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const hTag = document.getElementById("BlogMainHeading"); // Replace 'BlogMainHeading' with your specific heading ID
      if (hTag) {
        const { top, bottom } = hTag.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const midPoint = top + bottom; // Adjusted midpoint
        if (midPoint >= 0 && midPoint <= windowHeight) {
          setIsHeadingAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [isHeadingAnimated, setIsHeadingAnimated] = useState(false);

  const [showPage, setShowPage] = useState(false);
  const [logoDone, setLogoDone] = useState(false);
  const [showStarter, setShowStarter] = useState(false);
  
  useEffect(() => {
    if (logoDone) {
      setShowStarter(true);
      setTimeout(() => {
        setShowStarter(false);
      }, 450);
    }
  }, [logoDone]);

  const handleClick = () => {
    setTimeout(() => {
      setShowPage(true);
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }, 0);
  };

  const StarterPage = () => {
    return (
      <>
      <MouseDot />
      
      <div className="App" style={{overflowX: "hidden",background:"repeating-linear-gradient(to bottom, #000000, #2C3E50, #211f2f)",}}>
        <div className={`page ${showPage ? "showPage" : ""}`}></div>

        <TypingText showPage={showPage} />

        <Hero showStarter={showStarter} />

        <TerminalContainer handleClick={handleClick}/>

        <Home />

        <BlogContainer isHeadingAnimated={isHeadingAnimated}/>

        <div id="contact">
          <motion.div variants={textVariant()}>
              <h1
                  style={{
                      margin: '0 2rem',
                      color: 'white',
                      fontSize: '2rem',
                      paddingTop: '4rem',
                  }}
              >
                  Contact Me
              </h1>
          </motion.div>
          <motion.div variants={textVariant()}>
              <p
                  style={{
                      margin: '0 2rem',
                      color: 'white',
                      fontSize: '1.2rem',
                      paddingTop: '1rem',
                  }}
              >
                  Go Ahead Fill the form and I will get back to you soon.
              </p>
          </motion.div>
          <ContactForm />
        </div>

        <Footer />
      </div>
      </>
    );
  };

  return <>{logoDone ? <StarterPage /> : <LogoPage setDone={setLogoDone} />}</>;
};

export default Starter;
