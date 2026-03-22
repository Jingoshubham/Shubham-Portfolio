import { motion } from "framer-motion";
import codingAnimated from "../../assets/Images/coding-animated.png";

const AboutMe = () => {
  const headingVariant = {
    initial: { y: -50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
  };
  const springTransition = {
    type: "spring",
    stiffness: 80,
    damping: 4,
    delay: 0.3,
  };
  const ImgBoxVariant = {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };
  const TextBoxVariant = {
    initial: { x: +50, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };

  return (
    <div className="flex flex-col px-10 lg:py-32 py-20 bg-[#4c065c5d]" id="AboutMe">
      <motion.h1
        variants={headingVariant}
        initial="initial"
        whileInView="whileInView"
        transition={springTransition}
        viewport={{ once: true, amount: 0.8 }}
        className="text-white font-bold text-[2.5rem] font-Poppins text-center mb-10"
      >
        About Me
      </motion.h1>
      <div className="container flex flex-col gap-4 lg:gap-0 lg:flex-row justify-around ">
        <motion.div
          variants={ImgBoxVariant}
          initial="initial"
          whileInView="whileInView"
          transition={springTransition}
          viewport={{ once: true, amount: 0.5 }}
          className="imgBox w-fit "
        >
          <img src={codingAnimated} alt="" className="w-[65%] h-auto object-cover rounded-3xl shadow-lg mx-auto block" />
        </motion.div>
        <motion.div
          variants={TextBoxVariant}
          initial="initial"
          whileInView="whileInView"
          transition={springTransition}
          viewport={{ once: true, amount: 0.8 }}
          className="myDetails w-full lg:w-1/2 text-center flex flex-col justify-around font-Poppins lg:text-lg text-neutral-200 "
        >
        <div className="max-w-3xl mx-auto text-justify text-gray-200 leading-relaxed">
          <span>
            Hii👋, I am <span className="font-bold text-xl">Shubham Srivastwa</span>{" "}
            , a passionate Full Stack Developer with 
            <span className="text-sky-500 font-semibold"> 1.6+ years</span>{" "}
           of experience in designing and developing scalable web applications.{" "}

           I specialize in building dynamic and responsive user interfaces using 
          <span className="text-sky-500 font-semibold"> React.js</span>{" "}
          <span className="text-sky-500 font-semibold"> JavaScript</span>{" "} ,
          <span className="text-sky-500 font-semibold"> HTML</span>{" "} and
          <span className="text-sky-500 font-semibold"> CSS</span>{" "}
            On the
          <span className="text-sky-500 font-semibold"> Backend</span>{" "}

            I work with 
          <span className="text-sky-500 font-semibold"> ASP.NET Core </span>{" "} ,
          <span className="text-sky-500 font-semibold"> ASP.NET MVC</span>{" "} and 
          <span className="text-sky-500 font-semibold"> Web APIs</span>{" "}

            enabling me to deliver complete end-to-end solutions. I stay updated with the latest web technologies and trends, ensuring that I deliver high-quality, scalable, and maintainable solutions. My portfolio reflects my ability to solve real-world problems creatively and build impactful projects.
          </span>

         </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
