import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";
import { enFooterData, ptFooterData } from "../data/footer";
import { AiOutlineUpCircle } from "react-icons/ai";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const footerData = language === "en" ? enFooterData : ptFooterData;

  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex w-full dark:bg-secondaryDarkBackground bg-secondaryBackground"
    >
      <div className="block max-width mx-auto px-4 justify-between content-center">
        <div className="flex items-center justify-between mx-auto mt-14 mb-10">
          <Link
            to="home"
            offset={-96}
            smooth
            duration={500}
            className="flex items-center justify-center ease-out duration-500
          text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primaryDark cursor-pointer"
          >
            <AiOutlineUpCircle className="w-7 h-7 duration-100 font-bold font-poppins"></AiOutlineUpCircle>
            <p className="ml-3 font-semibold text-lg">{footerData.back}</p>
          </Link>

          <div className="flex items-center justify-center">
            <p className="mr-6 font-semibold text-lg text-neutral-700 dark:text-neutral-300">
              {footerData.connect}
            </p>
            <a
              title="Send a message to me"
              href="mailto:thiagocabralcorreia@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primaryDark ease-out duration-500"
            >
              <FaEnvelope size={26} />
            </a>
            <a
              title="Visit my profile on GitHub"
              href="https://github.com/thiagocabralcorreia"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primaryDark ease-out duration-500"
            >
              <FaGithub size={28} />
            </a>
            <a
              title="Visit my profile on LinkedIn"
              href="https://www.linkedin.com/in/thiago-cabral-correia/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primaryDark ease-out duration-500"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
        <div className="border-b border-tertiaryBackground dark:border-tertiaryDarkBackground"></div>
        <p className="m-8 text-sm text-center text-neutral-500">
          {footerData.by}
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
