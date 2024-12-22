import React from 'react';
import back1 from '../background-image/back1.png';
import github from '../background-image/github.jpg';
import linkedin from '../background-image/linked.webp';
import leetcode from '../background-image/LeetCode.png';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Hero = ({ showStarter }) => {
  return (
    <motion.div 
      className={`${showStarter ? 'showStarter' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="greetings">
        <motion.div
          className="text"
          style={{
            color: 'white',
            paddingLeft: '2rem',
            margin: '5rem auto',
          }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1
            className="heroHeading"
            style={{
              fontSize: '3.6rem',
              letterSpacing: '0.2rem',
              margin: '0',
              marginTop: '2rem',
              color: 'transparent',
              fontWeight: 'bolder',
            }}
          >
            Hey there! 👋 <br />{' '}
            <motion.span
              style={{
                fontSize: '2rem',
                margin: '0',
                color: 'white',
                fontWeight: 'lighter',
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              I'm Ankit Biswas
            </motion.span>
          </h1>
          <motion.p
            style={{
              fontSize: '1.1rem',
              margin: '0',
              fontWeight: '100',
              maxWidth: '58rem',
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {' '}
            An 18-year-old, Who like build stuffs with a passion for technology and a love for coding. Currently pursuing my B.Tech in Computer Science at CV Raman Global University, Bhubaneswar, I find joy in exploring the vast world of programming.
          </motion.p>
        </motion.div>

        <motion.div 
          className="imageContainer"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="image" style={{ position: 'relative' }}>
            <img src={back1} alt="" style={{ height: '38.5rem', margin: '0', padding: '0' }} />
            <motion.div 
              className=""
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <a href="https://github.com/ankit723?tab=repositories" target="_blank" rel="noreferrer">
                <img
                  className="enlarge1"
                  src={github}
                  alt=""
                  style={{
                    height: '5.3rem',
                    width: '10.7rem',
                    position: 'absolute',
                    top: '4.8rem',
                    right: '13.8rem',
                    margin: '0',
                    padding: '0',
                    transition: '0.5s',
                    zIndex: '0',
                  }}
                  href="google.com"
                />
              </a>

              <a href="https://www.linkedin.com/in/ankit-biswas-2ba1a51b5/" target="_blank" rel="noreferrer">
                <img
                  className="enlarge"
                  src={linkedin}
                  alt=""
                  style={{
                    height: '5.5rem',
                    width: '11.8rem',
                    position: 'absolute',
                    top: '7rem',
                    right: '23rem',
                    transform: 'rotateZ(-28.5deg) rotateY(43deg) rotateX(-40deg)',
                    transition: '0.5s',
                  }}
                  href="google.com"
                />
              </a>

              <a href="https://www.linkedin.com/in/ankit-biswas-2ba1a51b5/" target="_blank" rel="noreferrer">
                <img
                  className="enlarge2"
                  src={linkedin}
                  alt=""
                  style={{
                    height: '5.5rem',
                    width: '11.8rem',
                    position: 'absolute',
                    top: '7rem',
                    right: '23rem',
                    transform: 'rotateZ(-28.5deg) rotateY(43deg) rotateX(-40deg)',
                    transition: '0.5s',
                    zIndex: '0',
                  }}
                  href="google.com"
                />
              </a>

              <a href="https://www.linkedin.com/in/ankit-biswas-2ba1a51b5/" target="_blank" rel="noreferrer">
                <img
                  className="enlarge"
                  src={leetcode}
                  alt=""
                  style={{
                    height: '6.9rem',
                    width: '10.5rem',
                    position: 'absolute',
                    top: '6.3rem',
                    right: '4rem',
                    transform: 'rotateZ(27.5deg) rotateY(-29deg) rotateX(-47deg)',
                    transition: '0.5s',
                  }}
                  href="google.com"
                />
              </a>

              <a href="https://www.linkedin.com/in/ankit-biswas-2ba1a51b5/" target="_blank" rel="noreferrer">
                <img
                  className="enlarge3"
                  src={leetcode}
                  alt=""
                  style={{
                    height: '6.9rem',
                    width: '10.5rem',
                    position: 'absolute',
                    top: '6.3rem',
                    right: '4rem',
                    transform: 'rotateZ(27.5deg) rotateY(-29deg) rotateX(-47deg)',
                    transition: '0.5s',
                    zIndex: '0',
                  }}
                  href="google.com"
                />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
