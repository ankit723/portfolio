import React, { useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#2a2b2f",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #2a2b2f",
      }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
      }}
      icon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={experience.icon}
            alt=""
            style={{
              width: "60%",
              height: "60%",
              objectFit: "contain",
              borderRadius: "100%",
            }}
          />
        </div>
      }
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: "relative",
          height: "100%",
          transition: "all 0.3s ease",
        }}
      >
        {/* Content Section */}
        <div
          style={{
            opacity: isHovered ? 0 : 1,
            transform: isHovered ? "scale(0.95)" : "scale(1)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <h3
            style={{
              color: "#fff",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            {experience.title}
          </h3>
          <p
            style={{
              color: "#b0b0b0",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            {experience.company_name}
          </p>
          <ul
            style={{
              marginTop: "20px",
              listStyleType: "disc",
              marginLeft: "20px",
              lineHeight: "1.5",
            }}
          >
            {experience.points.map((point, index) => (
              <li
                key={index}
                style={{
                  color: "#ffffff",
                  fontSize: "14px",
                  paddingLeft: "5px",
                  letterSpacing: "0.05em",
                }}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Overlay Section */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: isHovered ? 0 : "100%",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(42, 43, 47, 0.95)", // Semi-transparent dark gray
            color: "#b0b0b0", // Light gray text to match the theme
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "18px",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            transition: "all 0.5s ease",
            zIndex: 10,
            cursor: "pointer",
          }}
        >
          <p>View Proof of Work</p>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
