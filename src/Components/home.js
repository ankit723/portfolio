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



const Home = () => {

  return (
    <>
      <div className={Classes.container}>
        <Navball />

        {/* Skills Section */}
        <TechStacks />

        {/* Projects Section */}
        <ProjectsContainer />

        <Experience />
        
      </div>
    </>
  );
};

export default Home;
