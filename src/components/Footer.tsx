import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="w-full justify-center content-center py-10 text-center m-auto bg-neutral-800"
    >
      <h2 className="text-4xl text-white font-bold font-barlow">FOLLOW ME</h2>
      <div className="flex w-full items-center justify-center mt-5 mb-10">
        <a
          title="Visit Thiago Cabral Correia's profile on GitHub"
          href="https://github.com/thiagocabralcorreia"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-amber-400 ease-out duration-500"
        >
          <FaGithub size={30} />
        </a>
        <div className="mr-6" />
        <a
          title="Visit Thiago Cabral Correia's profile on LinkedIn"
          href="https://www.linkedin.com/in/thiago-cabral-correia/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-amber-400 ease-out duration-500"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
      <p className="text-md md:text-lg text-center text-white">
        © 2023 | Portfolio by Thiago Cabral Correia
      </p>
    </motion.footer>
  );
}

export default Footer;
