import React from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import ComputersCanvas from "./canvas/Computers";

const Hero = () => {
  return (
    // <section className="relative w-full h-screen mx-auto">
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[200px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FFFFFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className={`${styles.heroHeadText}`}>
          <h1>WINCOME</h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Uvijek korak ispred!
          </p>
        </div>
      </div>
      {/* <ComputersCanvas /> */}
    </section>
  );
};

export default Hero;
