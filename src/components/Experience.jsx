import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"; // Importing external components for vertical timeline
import { motion } from "framer-motion"; // Importing animation features from Framer Motion
import "react-vertical-timeline-component/style.min.css"; // Importing minimum stylesheet for vertical timeline
import { styles } from "../styles"; // Importing styling constants defined elsewhere in the project
import { experiences } from "../constants"; // Importing experience data from an external file
import { SectionWrapper } from "../hoc"; // Importing higher-order component that wraps around this component and adds extra functionality
import { textVariant } from "../utils/motion"; // Importing constants for animation properties, such as timing and easing

// A subcomponent that represents a single experience card on the timeline
const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "rgba(5, 8, 22, 0.5)", color: "#fff" }} // Styling of the main content area inside the timeline element
    contentArrowStyle={{ borderRight: "7px solid #232631" }} // Styling of the arrow on the right side of the timeline element
    date={experience.date} // The date of the experience
    iconStyle={{ background: experience.iconBg }} // The background color of the icon on the left side of the timeline element
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon} // The image to be displayed as the icon
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain" // Styling of the image
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      {/* The title of the experience */}
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
        {/* The name of the company that the experience
        was gained from */}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {/* A list that contains the details of the experience */}
      {experience.points.map(
        (
          point,
          index // Looping through each point of the experience and creating a list item for each one
        ) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 text-justify"
          >
            {point}
            {/* An individual point of the experience being displayed */}
          </li>
        )
      )}
    </ul>
  </VerticalTimelineElement>
);

// The main component that displays all the experiences on the timeline
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>

        {/* Subtitle of the section */}
        <h2 className={styles.sectionHeadText}>My Story.</h2>
        {/* Title of the section */}
      </motion.div>

      <div className="mt-20 flex flex-col">
        {/* A container for the entire timeline section */}
        <VerticalTimeline>
          {/* The main timeline component */}
          {experiences.map(
            (
              experience,
              index // Looping through each experience and rendering a ExperienceCard component for each one
            ) => (
              <ExperienceCard key={index} experience={experience} />
            )
          )}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "life"); // Exporting the main component wrapped by SectionWrapper with an argument 'life'
