import React from "react";
import "../Components/projectItem.css";

const ProjectItem = (props) => {
  return (
    <div class="container">
      <div class="card">
        <div class="box">
          <div class="content">
            <h2>{props.id}</h2>
            <h3>{props.heading}</h3>
            <p>{props.description}</p>
            <a href={props.url} target="_blank">
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
