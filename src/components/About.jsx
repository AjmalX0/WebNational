import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { personalInfo, navigationPaths, services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] min-h-[280px] py-5 px-12 flex flex-col justify-evenly items-center">
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const handleLogin = () => {
    window.open("https://cmt3.research.microsoft.com/NCICPS2025", "_blank", "noopener,noreferrer");
  };

  return (
    <>
            <motion.div variants={textVariant()} className="mt-10">
        <h2 className="text-4xl font-bold text-white mb-8">
          About the Conference
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {personalInfo.projectsIntro}
      </motion.p>

      <motion.div variants={textVariant()} className="mt-10">
        <h2 className="text-4xl font-bold text-white mb-8">
          Call For Papers
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {personalInfo.about}
      </motion.p>

      <motion.div variants={textVariant()} className="mt-10">
        <h2 className="text-4xl font-bold text-white mb-8">
          Important Dates
        </h2>
      </motion.div>

      <motion.ul
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] list-disc list-inside"
      >
        <li>Paper Submission Deadline: 23/03/2026</li>
        <li>Notification of acceptance: 10/04/2026</li>
        <li>Camera-Ready paper submission: 17/04/2026</li>
        <li>Registration for conference: 18/04/2026</li>
        {/* <li>Registration closes on: 20/02/2026</li>                              */}
      </motion.ul>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <p>Authors can submit papers through Microsoft CMT.</p>
        {/*<motion.button
          className="mt-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogin}
        >
          Login
        </motion.button> */}
        <p> "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support." </p>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, navigationPaths.about);

