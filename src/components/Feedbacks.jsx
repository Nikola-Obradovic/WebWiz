import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  title,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.8, 0.75)}
    className="bg-tertiary border border-white p-6 rounded-3xl xs:w-[320px] w-64 mx-auto"
  >

    <div className="mt-1">
   
      <p className="text-white tracking-wider text-[18px] mt-4">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
           
          </p>
          
        </div>

        
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] text-center`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}></p>
          { <h2 className={styles.sectionHeadText}>Vrste saradnje</h2> }
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 bg-tertiary rounded-2xl ${styles.paddingX} flex flex-wrap gap-5`}>
      {testimonials.map((testimonial, index) => (
  <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
