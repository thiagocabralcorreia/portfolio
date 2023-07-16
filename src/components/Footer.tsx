import { motion } from "framer-motion";
import { useContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";
import { enFooterData, ptFooterData } from "../data/footer";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const footerData = language === "en" ? enFooterData : ptFooterData;

  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex w-full py-10 dark:bg-black bg-neutral-100"
    >
      <div className="flex w-10/12 mx-auto px-4 justify-between content-center">
        <p className="text-md text-black dark:text-white">{footerData.by}</p>
        <div className="flex items-center justify-center">
          <a
            title="Visit Thiago Cabral Correia's profile on GitHub"
            href="https://github.com/thiagocabralcorreia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:text-primary dark:hover:text-primaryDark ease-out duration-500"
          >
            <FaGithub size={28} />
          </a>
          <div className="mr-6" />
          <a
            title="Visit Thiago Cabral Correia's profile on LinkedIn"
            href="https://www.linkedin.com/in/thiago-cabral-correia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:text-primary dark:hover:text-primaryDark ease-out duration-500"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
