import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
      className="flex w-full py-12 dark:bg-secondaryDarkBackground bg-secondaryBackground"
    >
      <div className="block w-10/12 mx-auto px-4 justify-between content-center">
        <div className="flex items-center justify-between mx-auto">
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
            <p className="mr-5 font-semibold text-lg text-neutral-700 dark:text-neutral-300">
              {footerData.connect}
            </p>
            <a
              title="Visit Thiago Cabral Correia's profile on GitHub"
              href="https://github.com/thiagocabralcorreia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primaryDark ease-out duration-500"
            >
              <FaGithub size={28} />
            </a>
            <div className="mr-3" />
            <a
              title="Visit Thiago Cabral Correia's profile on LinkedIn"
              href="https://www.linkedin.com/in/thiago-cabral-correia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primaryDark ease-out duration-500"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
        <div className="border-b border-tertiaryBackground dark:border-tertiaryDarkBackground mt-8 mb-4"></div>
        <p className="text-sm text-center text-neutral-500">{footerData.by}</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
