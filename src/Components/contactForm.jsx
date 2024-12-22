import React, { useState } from "react";
import { motion } from "framer-motion";
import { textVariant } from "./experience";

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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    selectedServices: [],
    budget: 500,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevState) => {
        const updatedServices = checked
          ? [...prevState.selectedServices, value]
          : prevState.selectedServices.filter((service) => service !== value);

        return { ...prevState, selectedServices: updatedServices };
      });
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
  };

  return (
    <>
    <div className="contact-form">
        <form onSubmit={handleSubmit}>
            <div className="contact-grid">
                <div className="">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <div className="input-container">
                            <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <div className="input-container">
                            <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <div className="input-container">
                            <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>


                <div className="form-group">
                    <label>Services Required</label>
                    <motion.div 
                        className="services"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, staggerChildren: 0.1 }}
                    >
                        {serviceData.map((service, index) => (
                        <motion.div 
                            key={index}
                            className="service-item"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <input
                            type="checkbox"
                            id={`service-${index}`}
                            value={service.title}
                            checked={formData.selectedServices.includes(service.title)}
                            onChange={handleChange}
                            />
                            <label htmlFor={`service-${index}`}>
                            {service.icon} {service.title}
                            </label>
                        </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="form-group">
            <label htmlFor="budget">Budget</label>
            <div className="budget-container">
                <input
                type="range"
                id="budget"
                name="budget"
                min="100"
                max="10000"
                step="100"
                value={formData.budget}
                onChange={handleChange}
                />
                <span className="budget-display">${formData.budget}</span>
            </div>
            </div>

            <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
            ></textarea>
            </div>


            <motion.button
                type="submit"
                style={{
                    marginTop: '2rem',
                    fontSize: '1.2rem',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '0.7rem',
                    backgroundColor: 'white',
                    position: 'relative',
                    border: '4px solid transparent',
                    backgroundImage: 'linear-gradient(white, white), linear-gradient(90deg, #3498db, #9b59b6, #e74c3c, #3498db)',
                    backgroundSize: '400% 100%',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                    animation: 'border-animation 3s linear infinite',
                }}
                initial={{ scale: 0.9, opacity: 0, x: -100 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >
                Collaborate Now!
            </motion.button>
            
            <style>
                {`
                    @keyframes border-animation {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 50% 0%;
                    }
                    }
                `}
            </style>
        </form>
    </div>
    </>
  );
};

export default ContactForm;
