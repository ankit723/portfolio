import React, {useState} from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css';
import iotron from "../background-image/iotron.png"
import arbreCreations from "../background-image/arbreCreations.png"
import mudslide from "../background-image/mudslide.png"
import arthalab from "../background-image/arthalab.png"
import finanalyz from "../background-image/finanalyz.png"
import ExperienceCard from './experienceCard'

const experiences = [
    {
      title: "Web Developer Intern",
      company_name: "Iotron Technologies",
      icon: iotron,
      iconBg: "#383E56",
      date: "Oct 2024 - Jan 2025",
      points: [
        "Worked on VueJS for frontend and PHP & Laravel for Backend to create a Progressive Admin Panel which improved the user experience and interactivity by 40% and reduced the deployment time by 30%.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Arbre Creations",
      icon: arbreCreations,
      iconBg: "#E6DEDD",
      date: "Feb 2024 – Dec 2024",
      points: [
        "Mastered PHP and Laravel in Just 20 days, collaboratively developed and launched a full-stack web application with a team of 5, enhancing company operational efficiency by 40%.",
        "Successfully migrated three web applications (2 MERN Stack and 1 Django) to PHP and Laravel, improving scalability and enabling a 50% faster deployment cycle.",
      ],
    },
    {
      title: "Full Stack Web Developer Intern",
      company_name: "Finanalyz",
      icon: finanalyz,
      iconBg: "#E6DEDD",
      date: "June 2024 – Sept 2024",
      points: [
        "Mastered PHP and Laravel in Just 20 days, collaboratively developed and launched a full-stack web application with a team of 5, enhancing company operational efficiency by 40%.",
        "Successfully migrated three web applications (2 MERN Stack and 1 Django) to PHP and Laravel, improving scalability and enabling a 50% faster deployment cycle.",
      ],
    },
    {
      title: "Full Stack Web Developer Intern",
      company_name: "Mudslide Creations",
      icon: mudslide,
      iconBg: "#383E56",
      date: "Dec 2023 – Mar 2024",
      points: [
        "Implemented crucial bug fixes in the backend server, improving the security by 35% and functionality by 55%.",
        "Contributed to the development of a web application based on the MERN Stack utilizing MongoDB, Express JS, React, and Node JS, improving page load time by 20% by optimizing images and minimizing HTTP requests.",
      ],
    },
    {
      title: "Full Stack Web Developer Intern",
      company_name: "Arthalab",
      icon: arthalab,
      iconBg: "#E6DEDD",
      date: "May 2023 – Dec 2023",
      points: [
        "Redesigned and rebuilt an existing Algorithmic trading website, migrating from Flask to MERN Stack and built a robust Backend, resulting in an improvement of the Web App's usability by 50% and functionality by 30%.",
        "Managed and optimized databases with over 1,00,000 records, maintaining clean, modular, and scalable code while collaborating on version control using Git and GitLab for 10 team members, reducing deployment errors by 50%.",
      ],
    },
];
  

export const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
};

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <h1
            style={{
                margin: '0 2rem',
                color: 'white',
                fontSize: '2rem',
                paddingTop: '4rem',
            }}
        >
            Experience
        </h1>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((exp, index)=>(
          <ExperienceCard key={index} experience={exp} />
        ))}
      </VerticalTimeline>
    </div>
    </>
    
  )
}

export default Experience