import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { FiArrowDownCircle } from "react-icons/fi";

import { LanguageContext } from "../../context/LanguageContext";
import { enHeroData, ptHeroData } from "../../data/hero";
import Hyperlink from "../Hyperlink";
import poster from "../../assets/developer.png";
import posterBlue from "../../assets/developer-blue.png";
import { useTheme } from "../../context/ThemeContext";

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useTheme();
  const heroData = language === "en" ? enHeroData : ptHeroData;

  useEffect(() => {}, [theme]);

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1.2, delay: 0.2 }}
      className="w-10/12 h-full m-auto px-8 max-lg:pt-28 lg:flex lg:justify-between bg-primaryBg"
    >
      <div className="flex flex-col text-center lg:text-left content-center justify-center max-lg:my-20 max-auto">
        <p className="text-neutral-700 dark:text-neutral-300 text-xl mb-3 sm:mb-4">
          {heroData.hi}
        </p>
        <h1 className="text-3xl sm:text-5xl xl:text-6xl dark:text-white text-black md:font-bold mb-3 sm:mb-5 font-poppins">
          <span className="text-primary dark:text-primaryDark">THIAGO</span>{" "}
          CABRAL CORREIA
        </h1>
        <p className="text-xl max-w-xl max-lg:mx-auto dark:text-neutral-300 text-neutral-700">
          {heroData.iAm}{" "}
          <span className="text-primary dark:text-primaryDark font-bold">
            {heroData.frontend}
          </span>{" "}
          {heroData.passionate} <span className="xl:block">{heroData.ui}</span>
        </p>

        <div className="flex justify-center text-lg lg:block w-52 pt-12 mb-6 sm:mb-0 max-lg:m-auto ">
          <Hyperlink
            download="thiagocabralcorreia-resume.pdf"
            href="/files/thiagocabralcorreia-resume.pdf"
            aria-label="Download Resume"
          >
            <FiArrowDownCircle className="mr-2 w-5 h-5 duration-100"></FiArrowDownCircle>
            <span>Download CV</span>
          </Hyperlink>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1.2, delay: 0.2 }}
        className="w-11/12 max-w-sm lg:w-5/12 xl:w-6/12 lg:float-right lg:ml-20 xl:max-w-lg
        flex flex-col mx-auto max-lg:pb-20 content-center justify-center"
      >
        <img
          src={theme ? posterBlue : poster}
          alt="Animated developer guy with laptop"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
