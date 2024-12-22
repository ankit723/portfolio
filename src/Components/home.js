import React, { useRef } from 'react';
import Classes from './home.module.css';
import ProjectItem from './projectItem';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navball from './navball';
import { motion, useInView } from 'framer-motion';
import TechStacks from './techStacks';
import ProjectsContainer from './projectsContainer';
import Experience from './experience';
import ServicesSection from './services';
import Testimonials from './testimonial';



const Home = () => {

  return (
    <>
      <div className={Classes.container}>
        <Navball />

        {/* Skills Section */}
        <div id="skills">
          <TechStacks />
        </div>

        {/* Projects Section */}
        <div id="projects">
          <ProjectsContainer />
        </div>
        
        <div id="services">
          <ServicesSection />
        </div>

        <div id="experiences">
          <Experience />
        </div>

        <div id="testimonials">
          <Testimonials />
        </div>
        
      </div>
    </>
  );
};

export default Home;
