import { motion } from "framer-motion";
import poster from "../assets/poster.png";

const IntroBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="w-10/12 h-5/6 m-auto px-8 lg:flex"
    >
      <div className="flex flex-col text-center lg:text-left content-center justify-center max-lg:my-20 max-auto">
        <p className="text-neutral-300 text-xl pb-3 md:pb-4">
          Hi, there! My name is
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl text-white md:font-bold pb-3 md:pb-5 font-barlow">
          <span className="text-amber-300">THIAGO</span> CABRAL CORREIA
        </h1>
        <p className="text-xl sm:text-xl text-neutral-300">
          I'm a{" "}
          <span className="text-amber-300 md:font-bold">
            Front-end Developer
          </span>{" "}
          passionate about building{" "}
          <span className="md:block">
            beautiful user interfaces and great digital experiences.
          </span>
        </p>
      </div>
      <div className="w-11/12 lg:w-5/12 lg:float-right lg:ml-20 flex flex-col m-auto content-center justify-center">
        <img
          src={poster}
          alt="Yellow design vectors of computer, mobile phone, pencil, eraser, papers, book and coffee"
        />
      </div>
    </motion.section>
  );
};

export default IntroBanner;
