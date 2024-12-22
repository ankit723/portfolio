import React, { useRef } from 'react';
import { styled } from '@mui/material/styles';
import Classes from './home.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { motion, useInView } from 'framer-motion';
import ProjectItem from './projectItem';
import github from '../background-image/github.jpg';

const ProjectsContainer = () => {
    const projectsRef = useRef(null);
    const projectsInView = useInView(projectsRef, { once: true });

    const fadeInVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeOut' } }, // Slower animation
    };

    const projects = [
        { title: 'Small Language Model', details: 'A self-learning small language model, utilising Python(Flask) and tensorflow for the backend and ReactJS for the frontend', url: 'https://github.com/ankit723/flask-tensorflow-AI-api', image: github },
        { title: 'Newsletter/ Blog', details: 'This is a boilerplate code for a newsletter or blog fully responsive webpage with an in-depth admin panel', url: 'https://ankit723.github.io/newsLetter/', image: 'path_to_image_2' },
        { title: 'Body gesture recognition', details: 'A Deep Learning Gesture Recognition model for Face and Hand using OpenCV, Mediapipe in Python', url: 'https://github.com/ankit723/computer-vision', image: 'path_to_image_3' },
        { title: 'Hireasy', details: 'A concept website made especially for students to make side income and experience financial independence', url: 'https://ankit723.github.io/hireasy/', image: 'path_to_image_4' },
        { title: 'Space Heist', details: 'This is a game, based on the concept of subway surfer using Unity Engine and Language C#(ASP.NET) as Native Language', url: 'https://github.com/ankit723/space-heist', image: 'path_to_image_5' },
        { title: 'Space Heist', details: 'This is a game, based on the concept of subway surfer using Unity Engine and Language C#(ASP.NET) as Native Language', url: 'https://github.com/ankit723/space-heist', image: 'path_to_image_5' },
        { title: 'Space Heist', details: 'This is a game, based on the concept of subway surfer using Unity Engine and Language C#(ASP.NET) as Native Language', url: 'https://github.com/ankit723/space-heist', image: 'path_to_image_5' },
        { title: 'Space Heist', details: 'This is a game, based on the concept of subway surfer using Unity Engine and Language C#(ASP.NET) as Native Language', url: 'https://github.com/ankit723/space-heist', image: 'path_to_image_5' },
        { title: 'Space Heist', details: 'This is a game, based on the concept of subway surfer using Unity Engine and Language C#(ASP.NET) as Native Language', url: 'https://github.com/ankit723/space-heist', image: 'path_to_image_5' },
    ];

    return (
        <motion.div ref={projectsRef} variants={fadeInVariants} initial="hidden" animate={projectsInView ? 'visible' : 'hidden'}>
            <h1
                style={{
                    margin: '0 2rem',
                    color: 'white',
                    fontSize: '2rem',
                    paddingTop: '4rem',
                }}
            >
                Projects
            </h1>

            <Box sx={{ flexGrow: 1 }} className={Classes.projects}>
                <Grid container spacing={4}>
                    {projects.map((project, index) => {
                        const projectAnimation = {
                            hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 }, // Alternating from left and right
                            visible: { opacity: 1, x: 0, transition: { duration: 1.5, delay: index * 0.2 } }, // Slower animation with delay
                        };
                        return (
                            <Grid item key={index}>
                                <motion.div
                                    variants={projectAnimation}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <ProjectItem id={index} heading={project.title} description={project.details} url={project.url} image={project.image} />
                                </motion.div>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </motion.div>
    );
};

export default ProjectsContainer;
