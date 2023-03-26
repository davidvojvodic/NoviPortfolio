//Importing necessary libraries and components
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

//Creating a functional component named Contact which returns contact form and canvas in a div
const Contact = () => {
  //Using useRef to get the form from the DOM
  const formRef = useRef();

  //Using useState to set initial values for form fields and loading state using destructuring
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  //Handling changes made in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  //Handling submission of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    //Sending email using emailJS API with required parameters
    emailjs
      .send(
        "service_h6y5ery",
        "template_ajhkudm",
        {
          from_name: form.name,
          to_name: "David",
          from_email: form.email,
          to_email: "davidvojvodic1@gmail.com",
          message: form.message,
        },
        "1pp-U_RQ9t4p_5cTa"
      )
      .then(
        //If email is successfully sent, resetting the form fields' value, alerting a successful message and changing the state of loading to false.
        () => {
          setLoading(false);
          alert("Thank you, I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        //If something goes wrong while sending the email, logging the error in console and alerting a failure message. Changing the state of loading to false as well.
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  //Returning the UI elements using JSX
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/*Adding the left section of contact page containing contact form*/}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-primaryblur p-8 rounded-2xl"
      >
        {/*Heading and sub-heading*/}
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        {/*Form for user details input*/}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {/*Name Input field*/}
          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/*Email input field*/}
          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/*Message input field*/}
          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/*Submit button for posting the form*/}
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/*Adding the right section of contact page containing canvas*/}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
