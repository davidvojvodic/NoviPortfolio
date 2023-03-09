//importing required modules
import React from "react";
import { motion } from "framer-motion"; //to add animations and transitions
import { styles } from "../styles"; //to get CSS styles as variables
import { SectionWrapper } from "../hoc"; //a Higher Order Component to wrap sections
import { fadeIn, textVariant } from "../utils/motion"; //custom animation functions
import { testimonials } from "../constants"; //an array containing testimonials data like name, image, etc.
import { eye } from "../assets"; //a png icon

//a component to render individual feedback cards
const FeedbackCard = ({ index, testimonial, title, image, link }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 5)} //fade-in animation variant
    whileHover={{ scale: [1, 1.05] }} //a scaling effect on hover
    className="bg-black-200 p-9 rounded-3xl xs:w-[320px] w-full hover:shadow-lg" //some CSS classes
  >
    <motion.div className="relative flex justify-center items-center">
      <img
        src={image}
        alt={testimonial.name}
        className="object-contain rounded-md"
      />
      <motion.div
        whileHover={{ opacity: [0, 1] }} //fade-in effect on hover
        transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
        className="flex w-full h-full bg-[#00000080] justify-center items-center absolute cursor-pointer opacity-0 transition-all duration-300 ease-in-out"
      >
        <div
          className="w-12 h-12 rounded-full black-gradient flex justify-center items-center"
          onClick={() => window.open(link, "_blank")} //on-click event handler to open link in new tab
        >
          <img
            src={eye}
            alt="eye"
            className="rounded-full object-contain w-7 h-7"
          />
        </div>
      </motion.div>
    </motion.div>
    <div className="mt-3">
      <h3 className="font-bold text-center">{title}</h3>
      <p className="text-[14px] text-justify mt-2">{testimonial}</p>
      {/*rendering testimonial message*/}
    </div>
  </motion.div>
);

//a component to render all feedbacks using FeedbackCard
const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      {" "}
      {/*some CSS classes*/}
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          {" "}
          {/*animation variant for section heading*/}
          <p className={styles.sectionSubText}>
            My skills &amp; certificates{" "}
          </p>{" "}
          {/*rendering section sub-heading*/}
          <h2 className={styles.sectionHeadText}>Skills</h2>{" "}
          {/*rendering section heading*/}
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} -mt-20 pb-5 flex flex-wrap justify-center gap-5`}
      >
        {testimonials.map(
          (
            testimonial,
            index //mapping through the array of testimonials and rendering FeedbackCard for each one
          ) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          )
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "skills"); //wrapping Feedbacks component with SectionWrapper HOC and exporting it
