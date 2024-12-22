import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    testimonial:
      "This product completely changed the way we operate. Highly recommended! The functionality and design exceeded our expectations.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    role: "Product Manager, Innovate Inc.",
    testimonial:
      "The experience has been seamless and delightful. I am thoroughly impressed by the attention to detail and customer service provided!",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Robert Johnson",
    role: "Designer, Creative Studio",
    testimonial:
      "The attention to detail and design is simply outstanding. It has been a game-changer for our projects. A+ experience all the way!",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Robert Johnson",
    role: "Designer, Creative Studio",
    testimonial:
      "The attention to detail and design is simply outstanding. It has been a game-changer for our projects. A+ experience all the way!",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Robert Johnson",
    role: "Designer, Creative Studio",
    testimonial:
      "The attention to detail and design is simply outstanding. It has been a game-changer for our projects. A+ experience all the way!",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Robert Johnson",
    role: "Designer, Creative Studio",
    testimonial:
      "The attention to detail and design is simply outstanding. It has been a game-changer for our projects. A+ experience all the way!",
    image: "https://via.placeholder.com/150",
  },
];

const Testimonials = () => {
  const containerRef = useRef(null);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".testimonial-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, rotate: -5 },
      {
        opacity: 1,
        y: 0,
        rotate: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      ".testimonials-heading",
      { opacity: 0.3, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonials-heading",
          start: "top 90%",
        },
      }
    );
  }, []);

  const toggleExpanded = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-heading">What People Say About Me</h2>
      <div className="testimonials-container" ref={containerRef}>
        {testimonials.map((item, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.4)",
              rotate: 1,
            }}
            onClick={() => toggleExpanded(index)}
          >
            <div className="testimonial-icon"></div>
            <img
              src={item.image}
              alt={item.name}
              className="testimonial-image"
            />
            <p className="testimonial-text">
              {expanded[index]
                ? item.testimonial
                : `${item.testimonial.slice(0, 80)}...`}
            </p>
            <h3 className="testimonial-name">{item.name}</h3>
            <p className="testimonial-role">{item.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
