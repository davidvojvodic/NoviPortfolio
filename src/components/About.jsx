// Importing necessary components from installed packages and files
import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// A component for rendering service card with provided properties
const ServiceCard = ({ index, title, icon }) => {
  // Returns a Tilt effect div with gradient background containing inner child with icon and title
  return (
    <Tilt className="xs:w-[250px] w-full ease-out duration-700">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        {/* Inner child of the service card */}
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          {/* Icon */}
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          {/* Title */}
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// The main About component to be rendered in the web page
const About = () => {
  return (
    <>
      {/* A motion transition effect applied to paragraph text for introduction and overview */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      {/* Description for the About section with some css props applied */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading[30px] text-justify"
      >
        Skilled and motivated Frontend Developer with 1-2 years of experience
        developing user-friendly, interactive and responsive web applications.
        Proficient in HTML, CSS, JavaScript, Figma, React and libraries like
        Tailwind CSS, Material UI and others. As a developer I stand by the
        UI/UX design principles, cross-browser compatibility, responsive web
        design and performance optimization. I have strong attention to detail
        and ability to analyze user behaviour to optimize user experience. I am
        commited to staying up-to-date with the latest web development
        technologies and trends.
      </motion.p>

      {/* A container with multiple ServiceCard component passed inside via props as an array */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// Exported the "About" component after wrapped with hoc and named "about"
export default SectionWrapper(About, "about");
