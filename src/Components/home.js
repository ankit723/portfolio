import React, { useEffect, useState } from "react";
import Classes from "./home.module.css";
import ProjectItem from "./projectItem";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const skills = ['C Programming', 'C++', 'C Sharp', 'Rust', 'R', 'Ruby on Rails', 'Assembly x86 architechture', 'Assembly arm architechture', 'Compiler Design', 'Interpreter Design', 'HTML', 'CSS', 'JavaScript', 'ReactJs', "NextJS", 'AngularJs', 'NodeJs', 'ExpressJs', 'MongoDB', 'MySql', 'PostgreSql', 'FireBase FireStore', 'PHP', 'Laravel', 'LiveWire', "Python", 'Flask', 'Django', 'Java', 'Springboot', 'Kotlin', 'SocketIO', 'Tensorflow', 'Pytorch', 'Numpy', 'Pandas', 'Docker', 'Kubernetes', 'Git', 'Github']

const projects=[
  {title:"Small Language Model", details:"A self learning small language model, utilising Python(Flask) and tensorflow for the backend and ReactJS for the frontend", url:"https://github.com/ankit723/flask-tensorflow-AI-api"}, 
  {title:"Newsletter/ Blog", details:"This is a boilerplate code for a newsletter or blog fully responsive webpage with a in-depth admin panel", url:"https://ankit723.github.io/newsLetter/"},
  {title:"Body gesture recognition", details:"A Deep Learning Gesture Recognition model for Face and Hand using OpenCV, Mediapipe in Python", url:"https://github.com/ankit723/computer-vision"}, 
  {title:"Hireasy", details:"A concept website made specially for students to make side income and experience financial independent", url:"https://ankit723.github.io/hireasy/"}, 
  {title:"Space Heist", details:"This is a game, based on the concept of subway surfer using Unity Engine and Language C#(ASP.NET) as Native Language", url:"https://github.com/ankit723/space-heist"},
]

const Home = () => {
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
      <div className={Classes.container}>
        <div className={Classes.mainNavBall} id="mainNavBall"></div>

        <div className={Classes.navBall} onClick={handleNavOpen}>
          <div className={Classes.navBallLine1} id="navBallLine1"></div>
          <div className={Classes.navBallLine2} id="navBallLine2"></div>
          <div className={Classes.navBallLine3} id="navBallLine3"></div>
        </div>

        <div className="skills">
          <h1
            style={{
              margin: "0 2rem",
              color: "white",
              fontSize: "2rem",
              paddingTop: "4rem",
            }}
          >
            Tech Stacks
          </h1>

          <Box sx={{ flexGrow: 1, margin: "1rem 8rem" }} className={Classes.skills}>
            <Grid container spacing={2}>
              {skills.map((skill, index) => {
                if (index % 2 == 0) {
                  return (
                    <Grid item>
                      <div className={`${Classes.skill} ${Classes.filledSkill}`}>
                        {skill}
                      </div>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item>
                      <div className={`${Classes.skill} ${Classes.unfilledSkill}`}>
                        {skill}
                      </div>
                    </Grid>
                  )
                }
              })}
            </Grid>
          </Box>
        </div>

        <div className="">
          <h1
            style={{
              margin: "0 2rem",
              color: "white",
              fontSize: "2rem",
              paddingTop: "4rem",
            }}
          >
            Project
          </h1>

          <Box sx={{ flexGrow: 1 }} className={Classes.projects}>
            <Grid container spacing={4}>
              {projects.map((project, index)=>{
                  return(
                    <Grid item>
                      <ProjectItem id={index} heading={project.title} description={project.details} url={project.url}/>
                    </Grid>
                  )
              })}
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Home;
