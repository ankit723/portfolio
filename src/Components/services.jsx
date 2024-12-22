import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // GSAP ScrollTrigger for service cards
    const cards = gsap.utils.toArray(".service-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 100 }, // Initial state
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2, // Delay between each card
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // Start animation when 75% of the section is visible
        },
      }
    );
  }, []);

  const serviceData = [
    {
      title: "Web Development",
      description: "Build stunning websites with modern designs and high performance.",
      icon: "🌐",
    },
    {
      title: "App Development",
      description: "Create seamless mobile experiences with cross-platform apps.",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      description: "Craft intuitive and beautiful user interfaces for better engagement.",
      icon: "🎨",
    },
    {
      title: "SEO Optimization",
      description: "Boost your online visibility with effective SEO strategies.",
      icon: "🚀",
    },
    {
      title: "Cloud Solutions",
      description: "Leverage the power of cloud computing for scalability and efficiency.",
      icon: "☁️",
    },
    {
      title: "Cybersecurity",
      description: "Secure your digital assets with our advanced security solutions.",
      icon: "🔒",
    },
    {
      title: "E-Commerce Development",
      description: "Build robust and scalable e-commerce platforms for your business.",
      icon: "🛒",
    },
    {
      title: "Data Analytics",
      description: "Unlock insights with data-driven analytics and reports.",
      icon: "📊",
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "transparent",
        padding: "5rem 2rem",
        color: "white",
      }}
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          textAlign: "left",
          marginBottom: "1rem",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#fff",
            marginBottom: "0rem",
          }}
        >
          Our Services
        </h2>
        <p style={{ fontSize: "1.2rem", color: "#b5becb" }}>
          We provide top-notch solutions to bring your ideas to life.
        </p>
      </motion.div>

      {/* Service Cards */}
      <div
        className="services-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          margin: "0 6rem",
        }}
      >
        {serviceData.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(145deg, #ff6b6b, #ffa34f)",
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "linear-gradient(145deg, #1e2a47, #243c5a)",
              borderRadius: "15px",
              padding: "2rem",
              textAlign: "center",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                marginBottom: "1rem",
              }}
            >
              {service.icon}
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "white",
                marginBottom: "0.5rem",
              }}
            >
              {service.title}
            </h3>
            <p style={{ color: "#b5becb", lineHeight: "1.5" }}>
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
