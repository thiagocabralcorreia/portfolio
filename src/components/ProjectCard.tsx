import { motion } from "framer-motion";
import { ProjecSchema } from "../data/projects";

const ProjectCard = ({ title, category, image, onClick }: ProjecSchema) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <div
        onClick={onClick}
        className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0"
      >
        <div>
          <img
            src={image}
            className="rounded-t-xl border-none"
            alt="Single Project"
          />
        </div>
        <div className="rounded-b-xl text-center px-4 py-6 bg-amber-400">
          <p className="mb-2 text-lg md:text-2xl text-neutral-900 font-bold font-barlow">
            {title.toLocaleUpperCase()}
          </p>
          <span className="text-md text-neutral-900">{category}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
