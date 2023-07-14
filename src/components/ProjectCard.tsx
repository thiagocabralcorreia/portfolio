import { motion } from "framer-motion";
import { ProjecSchema } from "../data/projects";

const ProjectCard = ({ title, category, image, onClick }: ProjecSchema) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.15,
        delay: 0.15,
      }}
    >
      <div onClick={onClick} className="cursor-pointer">
        <div>
          <img
            src={image}
            className="border-none shadow-lg hover:shadow-xl "
            alt="Single Project"
          />
        </div>
        {/* <div
          className="text-center content-center justify-center m-auto p-4 text-lg md:text-2xl
        dark:text-white text-neutral-900"
        >
          <p className="mb-2 font-barlow ">{title.toLocaleUpperCase()}</p>
        </div> */}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
