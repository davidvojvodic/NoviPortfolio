import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { eye } from "../assets";

// A component for each project card
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  page_link,
}) => (
  // Animation effect applied on this block
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full h-full ease-out duration-700"
    >
      <div className="relative w-full h-[230px]">
        {/* The project thumbnail */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        {/* Links to visit the project live and see its code */}
        <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
          <div
            onClick={() => window.open(page_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={eye}
              alt="github"
              className="w-1/2 h-1/2 object-contain rounded-full"
            />
          </div>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        {/* The name and description of the project */}
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] text-justify">
          {description}
        </p>
      </div>

      {/* The list of tags used in the project */}
      <div className="mt-4 flex flex-wrap gap-2 items-end">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

// The Works / Projects Section
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* The subtitle and title of the section */}
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        {/* A brief introduction to the projects section */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
        >
          Welcome to my Projects section! Here you can find some of the web
          development projects that I have worked on. Each project is unique and
          showcases my skills and expertise in various areas of web development.
          From front-end development using HTML, CSS, and JavaScript to back-end
          development with Node.js and database integration, I have experience
          in building robust and responsive websites. Take a look at each
          project to get a better understanding of my abilities and approach to
          web development. You can also find the technologies and tools used in
          each project, as well as a brief summary of the project's goals and
          outcomes. I am always eager to take on new projects and challenges. If
          you're interested in working with me, feel free to contact me through
          the contact page.
        </motion.p>
      </div>

      {/* The project cards grid */}
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
