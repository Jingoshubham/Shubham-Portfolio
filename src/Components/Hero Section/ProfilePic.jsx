import { motion } from "framer-motion";
import ProfilePic from "../../assets/Images/profile-pic.png";

const ProfilePicComponent = ({ divVariant, divSpringTransition }) => {
  return (
    <motion.div
      variants={divVariant}
      initial={{ x: 100, opacity: 0 }}
      animate="animate"
      transition={divSpringTransition}
      className="order-1 lg:order-2 mt-14 flex justify-center items-center"
    >
      <div className="w-80 h-80 rounded-full border-4 border-white overflow-hidden">
        <img
          src={ProfilePic}
          alt="profile"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </motion.div>
  );
};

export default ProfilePicComponent;