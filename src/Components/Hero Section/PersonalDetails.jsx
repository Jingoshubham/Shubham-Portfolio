import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const PersonalDetails = ({ divVariant, divSpringTransition, iconVariants }) => {
  return (
    <motion.div
      variants={divVariant}
      initial="initial"
      animate="animate"
      transition={divSpringTransition}
      className="details flex flex-col items-center lg:items-start order-2 lg:order-1 gap-2"
    >
    <div className="w-full lg:w-[65%] mt-10 px-5 mx-auto">
      <div className="Name flex items-center flex-col">
        <h1 className="bg-gradient-to-r font-semibold font-serif w-fit text-5xl lg:text-7xl from-pink-600 via-blue-500 to-yellow-300 inline-block text-transparent bg-clip-text">
          SHUBHAM
        </h1>
        <h1 className="bg-gradient-to-r font-semibold font-serif w-fit text-5xl lg:text-7xl from-yellow-600 via-gray-400 to-pink-600 inline-block text-transparent bg-clip-text">
          SRIVASTWA
        </h1>
      </div>
      <div className="ohterDetails flex flex-col items-center lg:items-start mt-2">
        <span className="intro text-neutral-300 flex flex-col lg:flex-row lg:gap-1  items-center font-medium italic text-lg">
          {" "}
          
          <span className="font-bold text-xl">Full Stack Developer,</span>
         <div className="max-w-3xl mx-auto text-justify text-gray-200 leading-relaxed"> Enjoys creating intuitive and user-centric web experiences</div>
        </span>
        <div className="icons flex gap-4 mt-4">
          <motion.a
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ type: "spring", stiffness: 300 }}
            href="https://github.com/Jingoshubham"
            target="_blank"
          >
            <FaGithub className="text-white text-3xl hover:text-sky-500 transition-all cursor-pointer" />
          </motion.a>
          <motion.a
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ type: "spring", stiffness: 300 }}
            href="https://www.linkedin.com/in/shubham2609/"
            target="_blank"
          >
            <FaLinkedin className="text-white text-3xl hover:text-sky-500 transition-all cursor-pointer" />
          </motion.a>
          <motion.a
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ type: "spring", stiffness: 300 }}
            href=""
            target="_blank"
          >
            <FaXTwitter className="text-white text-3xl hover:text-sky-500 transition-all cursor-pointer" />
          </motion.a>
        </div>
        <div className="resumeBtn mt-5">
          <a
            href="https://drive.google.com/file/d/12-IB9czI6bkywWHPHnyUoQ6eR7w8IfIQ/view?usp=drivesdk"
            target="_blank"
          >
            <motion.button
              whileHover={{ scale: 0.9, color: "black" }}
              className="text-white border-sky-500 border-[2px] p-4 lg:text-lg font-medium font-Poppins rounded-full hover:bg-sky-500 hover:text-black transition-all"
            >
              My Resume
            </motion.button>
          </a>
        </div>
      </div>
      </div>
    </motion.div>
  );
};

export default PersonalDetails;
