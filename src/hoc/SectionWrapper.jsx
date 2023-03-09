// Importing the required modules from the respective files.
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// Creating Higher Order Component (HOC) Wrapper function that takes two arguments, a component and an idName
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      // Wrapping the component in a motion.section to add animation and providing some additional props.
      <motion.section
        variants={staggerContainer} // Adding animation prop for staggering children elements
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* Adding an invisible span to provide an id to this section element as per user's choice */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        {/* Rendering the provided component as a child */}
        <Component />
      </motion.section>
    );
  };

// Exporting the HOC Wrapper function
export default SectionWrapper;
