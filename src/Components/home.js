import React, { useEffect, useState } from "react";
import Classes from "./home.module.css";
import ProjectItem from "./projectItem";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const skills = ['C Programming', 'C++', 'C Sharp', 'Rust', 'R', 'Ruby on Rails', 'Assembly x86 architechture', 'Assembly arm architechture', 'Compiler Design', 'Interpreter Design', 'HTML', 'CSS', 'JavaScript', 'ReactJs', "NextJS", 'AngularJs', 'NodeJs', 'ExpressJs', 'MongoDB', 'MySql', 'PostgreSql', 'FireBase FireStore', 'PHP', 'Laravel', 'LiveWire', "Python", 'Flask', 'Django', 'Java', 'Springboot', 'Kotlin', 'SocketIO', 'Tensorflow', 'Pytorch', 'Numpy', 'Pandas', 'Docker', 'Kubernetes', 'Git', 'Github']

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
              <Grid item>
                <ProjectItem id={1} heading={"Project"} description={"loremfnjv fgvjrkgvr gvbrgjvb tiurbv irbvir vrb hvbrtbrv btbvi rtvirtvbrlib gviubrukbvkr"} />
              </Grid>

              <Grid item>
                <ProjectItem id={1} heading={"Project"} description={"loremfnjv fgvjrkgvr gvbrgjvb tiurbv irbvir vrb hvbrtbrv btbvi rtvirtvbrlib gviubrukbvkr"} />
              </Grid>

              <Grid item>
                <ProjectItem id={1} heading={"Project"} description={"loremfnjv fgvjrkgvr gvbrgjvb tiurbv irbvir vrb hvbrtbrv btbvi rtvirtvbrlib gviubrukbvkr"} />
              </Grid>

              <Grid item>
                <ProjectItem id={1} heading={"Project"} description={"loremfnjv fgvjrkgvr gvbrgjvb tiurbv irbvir vrb hvbrtbrv btbvi rtvirtvbrlib gviubrukbvkr"} />
              </Grid>

              <Grid item>
                <ProjectItem id={1} heading={"Project"} description={"loremfnjv fgvjrkgvr gvbrgjvb tiurbv irbvir vrb hvbrtbrv btbvi rtvirtvbrlib gviubrukbvkr"} />
              </Grid>

              <Grid item>
                <ProjectItem id={1} heading={"Project"} description={"loremfnjv fgvjrkgvr gvbrgjvb tiurbv irbvir vrb hvbrtbrv btbvi rtvirtvbrlib gviubrukbvkr"} />
              </Grid>

              <Grid item>
                <ProjectItem id={1} heading={"Project"} description={"loremfnjv fgvjrkgvr gvbrgjvb tiurbv irbvir vrb hvbrtbrv btbvi rtvirtvbrlib gviubrukbvkr"} />
              </Grid>

              <Grid item>
                <ProjectItem id={1} heading={"Project"} description={"loremfnjv fgvjrkgvr gvbrgjvb tiurbv irbvir vrb hvbrtbrv btbvi rtvirtvbrlib gviubrukbvkr"} />
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Home;
