import { motion } from "framer-motion";
import { FiArrowDownCircle } from "react-icons/fi";
import poster from "../assets/poster.png";

const IntroBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="w-10/12 h-full m-auto px-8 max-lg:pt-28 lg:flex"
    >
      <div className="flex flex-col text-center lg:text-left content-center justify-center max-lg:my-20 max-auto">
        <p className="text-neutral-300 text-xl mb-3 sm:mb-4">
          Hi, there! My name is
        </p>
        <h1 className="text-3xl sm:text-5xl xl:text-6xl text-white md:font-bold mb-3 sm:mb-5 font-barlow">
          <span className="text-amber-300">THIAGO</span> CABRAL CORREIA
        </h1>
        <p className="text-xl max-w-xl max-lg:mx-auto text-neutral-300">
          I'm a{" "}
          <span className="text-amber-300 md:font-bold">
            Front-end Developer
          </span>{" "}
          passionate about building{" "}
          <span className="xl:block">
            beautiful user interfaces and great digital experiences.
          </span>
        </p>
        <div className="flex justify-center lg:block">
          <a
            download="thiagocabralcorreia-resume.pdf"
            href="/files/thiagocabralcorreia-resume.pdf"
            className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-neutral-900 hover:border-amber-300 py-2.5 sm:py-3 shadow-lg rounded-lg bg-amber-300 hover:bg-neutral-900 text-neutral-900 hover:text-amber-300 duration-500"
            aria-label="Download Resume"
          >
            <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
            <span className="text-sm sm:text-lg duration-100">Download CV</span>
          </a>
        </div>
      </div>
      <motion.div
        initial={{ y: -180 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="w-11/12 max-w-sm lg:w-5/12 xl:w-6/12 lg:float-right lg:ml-20 xl:max-w-lg flex flex-col mx-auto max-lg:pb-20 content-center justify-center"
      >
        <img
          src={poster}
          alt="Yellow design vectors of computer, mobile phone, pencil, eraser, papers, book and coffee"
        />
      </motion.div>
    </motion.section>
  );
};

export default IntroBanner;
