import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { eye } from "../assets";

const FeedbackCard = ({ index, testimonial, title, image, link }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 5)}
    whileHover={{ scale: [1, 1.05] }}
    className="bg-black-200 p-9 rounded-3xl xs:w-[320px] w-full hover:shadow-lg"
  >
    <motion.div className="relative flex justify-center items-center">
      <img
        src={image}
        alt={testimonial.name}
        className="object-contain rounded-md"
      />
      <motion.div
        whileHover={{ opacity: [0, 1] }}
        transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
        className="flex w-full h-full bg-[#00000080] justify-center items-center absolute cursor-pointer opacity-0 transition-all duration-300 ease-in-out"
      >
        <div
          className="w-12 h-12 rounded-full black-gradient flex justify-center items-center"
          onClick={() => window.open(link, "_blank")}
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

export default SectionWrapper(Feedbacks, "skills");
