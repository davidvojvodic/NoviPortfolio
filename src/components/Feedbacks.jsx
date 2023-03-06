import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial, title, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 5)}
    whileHover={{ scale: [1, 1.1] }}
    className="bg-black-200 p-9 rounded-3xl xs:w-[320px] w-full"
  >
    <div>
      <img src={image} alt={testimonial.name} />
    </div>
    <div className="mt-3">
      <h3 className="font-bold text-center">{title}</h3>
      <p className="text-[14px] text-justify mt-2">{testimonial}</p>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My skills & certificates </p>
          <h2 className={styles.sectionHeadText}>Skills</h2>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} -mt-20 pb-5 flex flex-wrap justify-center gap-5`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
