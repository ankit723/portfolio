import React from 'react'
import BlogItem from "./blogItem";
import {motion} from 'framer-motion'


const BlogContainer = ({isHeadingAnimated}) => {
  const itemVariants = [
    { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } }, // From Left
    { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } },  // From Right
    { hidden: { opacity: 0, y: -100 }, visible: { opacity: 1, y: 0 } }, // From Top
    { hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } },  // From Bottom
  ];
  return (
    <motion.div
          className="Blog"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100vw",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div
            className=""
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.p
              style={{
                marginTop: "5rem",
                fontSize: "1.5rem",
                fontWeight: "lighter",
                color: "white",
                position: "relative",
                zIndex: "1",
              }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              A Reader or a Learner?
            </motion.p>
            <motion.h2
              id="BlogMainHeading"
              style={{
                marginTop: "0",
                fontWeight: "lighter",
                color: "rgb(181, 190, 203)",
                transition: "1s",
                marginTop: "-2rem",
                position: "relative",
                zIndex: "1",
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Check out my <br />
              <motion.span
                className={isHeadingAnimated ? "blogHeadingAnimated" : ""}
                style={{
                  color: "white",
                  fontSize: "1.3rem",
                  margin: "0",
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                Blogs
              </motion.span>{" "}
            </motion.h2>
          </div>
          <div
        className="blogSection"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          padding: "1rem",
        }}
      >
        {[...Array(9)].map((_, index) => {
          const direction = itemVariants[index % itemVariants.length]; // Pick animation direction
          return (
            <motion.div
              key={index}
              className="blogItem"
              initial={direction.hidden}
              animate={direction.visible}
              transition={{ duration: 0.6, delay: index * 0.2 }} // Add staggered delay
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <BlogItem />
            </motion.div>
          );
        })}
      </div>
        </motion.div>
  )
}

export default BlogContainer