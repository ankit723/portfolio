import React from "react";
import "../Components/projectItem.css";

const ProjectItem = (props) => {
  return (
    <div className="container">
      <div className="card">
        <div className="box">
          <div className="content">
            <h2>{props.id}</h2>
            <h3>{props.heading}</h3>
            <p>{props.description}</p>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
          <img
            className="image"
            src={props.image}  // Pass the actual image URL here
            alt="project preview"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
