import React, {useRef} from 'react'
import { styled } from '@mui/material/styles';
import Classes from './home.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { motion, useInView } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaGithub, FaJava } from 'react-icons/fa';
import { SiC, SiCplusplus, SiCsharp, SiRust, SiR, SiRubyonrails, SiLinux, SiArm, SiNextdotjs, SiAngular, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiPhp, SiLaravel, SiFlask, SiDjango, SiSpringboot, SiKotlin, SiSocketdotio, SiTensorflow, SiPytorch, SiNumpy, SiPandas, SiKubernetes, SiGooglechrome, SiGoogleassistant } from 'react-icons/si';



const TechStacks = () => {
    const skillsRef = useRef(null);
    const skillsInView = useInView(skillsRef, { once: true });
    const fadeInVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    const skills = [
        { name: 'C Programming', icon: <SiC color="#A8B9CC" /> },
        { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
        { name: 'C Sharp', icon: <SiCsharp color="#68217A" /> },
        { name: 'Rust', icon: <SiRust color="#DEA584" /> },
        { name: 'R', icon: <SiR color="#276DC3" /> },
        { name: 'Ruby on Rails', icon: <SiRubyonrails color="#CC0000" /> },
        { name: 'Assembly x86 architecture', icon: <SiLinux color="#FCC624" /> },
        { name: 'Assembly ARM architecture', icon: <SiArm color="#00A1C6" /> },
        { name: 'Compiler Design', icon: <SiGooglechrome color="#4285F4" /> },
        { name: 'Interpreter Design', icon: <SiGoogleassistant color="#34A853" /> },
        { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
        { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
        { name: 'ReactJs', icon: <FaReact color="#61DAFB" /> },
        { name: 'NextJS', icon: <SiNextdotjs color="#000000" /> },
        { name: 'AngularJs', icon: <SiAngular color="#DD0031" /> },
        { name: 'NodeJs', icon: <FaNodeJs color="#339933" /> },
        { name: 'ExpressJs', icon: <SiExpress color="#000000" /> },
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
        { name: 'MySql', icon: <SiMysql color="#4479A1" /> },
        { name: 'PostgreSql', icon: <SiPostgresql color="#336791" /> },
        { name: 'FireBase FireStore', icon: <SiFirebase color="#FFCA28" /> },
        { name: 'PHP', icon: <SiPhp color="#777BB4" /> },
        { name: 'Laravel', icon: <SiLaravel color="#FF2D20" /> },
        { name: 'LiveWire', icon: <SiPhp color="#4F5B93" /> },
        { name: 'Python', icon: <FaPython color="#3776AB" /> },
        { name: 'Flask', icon: <SiFlask color="#000000" /> },
        { name: 'Django', icon: <SiDjango color="#092E20" /> },
        { name: 'Java', icon: <FaJava color="#007396" /> },
        { name: 'Springboot', icon: <SiSpringboot color="#6DB33F" /> },
        { name: 'Kotlin', icon: <SiKotlin color="#7F52FF" /> },
        { name: 'SocketIO', icon: <SiSocketdotio color="#010101" /> },
        { name: 'Tensorflow', icon: <SiTensorflow color="#FF6F00" /> },
        { name: 'Pytorch', icon: <SiPytorch color="#EE4C2C" /> },
        { name: 'Numpy', icon: <SiNumpy color="#013243" /> },
        { name: 'Pandas', icon: <SiPandas color="#150458" /> },
        { name: 'Docker', icon: <FaDocker color="#2496ED" /> },
        { name: 'Kubernetes', icon: <SiKubernetes color="#326CE5" /> },
        { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
        { name: 'Github', icon: <FaGithub color="#181717" /> },
    ];
  return (
    <motion.div ref={skillsRef} variants={fadeInVariants} initial="hidden" animate={skillsInView ? 'visible' : 'hidden'}>
          <h1
            style={{
              margin: '0 2rem',
              color: 'white',
              fontSize: '2rem',
              paddingTop: '4rem',
            }}
          >
            Tech Stacks
          </h1>

          <Box sx={{ flexGrow: 1, margin: '1rem 8rem' }} className={Classes.skills}>
            <Grid container spacing={2}>
              {skills.map((skill, index) => {
                const skillAnimation = {
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.3, delay: index * 0.05 },
                  },
                };

                const hoverAnimation = {
                  scale: 1.2,
                  rotate: 5,
                  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                  transition: {
                    duration: 0.3,
                    type: 'spring',
                    stiffness: 300,
                    damping: 10,
                  },
                };

                return (
                  <Grid item key={index}>
                    <motion.div
                      className={`${Classes.skill} ${index % 2 === 0 ? Classes.filledSkill : Classes.unfilledSkill}`}
                      variants={skillAnimation}
                      initial="hidden"
                      animate={skillsInView ? 'visible' : 'hidden'}
                      whileHover={hoverAnimation}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        background: index % 2 === 0 ? '#2C2F33' : '#1F2125',
                        color: '#FFFFFF',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        transition: 'background 0.3s ease',
                      }}
                    >
                      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{skill.icon}</div>
                      <span>{skill.name}</span>
                    </motion.div>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </motion.div>
  )
}

export default TechStacks