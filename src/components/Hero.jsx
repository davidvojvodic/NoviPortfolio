import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

// Hero section z tekston pa 3D modelon
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[200px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* 2 self closing div-a ka dodata obliko kroga pa črte */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#5369ED]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#5369ED]">David Vojvodić</span>
          </h1>
          <p className={`${styles.heroSubText}`}>
            FRONTEND DEVELOPER <br /> UI/UX DESIGNER
          </p>
        </div>
      </div>
      {/* 3D model */}
      <ComputersCanvas />

      {/* Scroller na nasledno sekcijo, oblika navaden div, animeran krog motion dev */}
      <div className="absolute xs:bottom-4 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
