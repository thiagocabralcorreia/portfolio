import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-scroll";
import { LanguageContext } from "../../context/LanguageContext";
import { enAboutData, ptAboutData } from "../../data/about";

import { skills, SkillSchema } from "../../data/skills";

const About = () => {
  const { language } = useContext(LanguageContext);
  const aboutData = language === "en" ? enAboutData : ptAboutData;

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="dark:bg-neutral-800 bg-neutral-100 py-20"
    >
      <div className="w-10/12 flex max-lg:flex-col m-auto lg:mb-10 max-lg:text-center content-center justify-center">
        <div className="max-md: px-5 lg:w-1/2 lg:mr-24 max-lg:mb-20">
          <h1 className="section-title">{aboutData.niceToMeet}</h1>
          <p className="section-text">
            {aboutData.iAm}{" "}
            <span className="text-amber-400">{aboutData.frontend}</span>{" "}
            {aboutData.exp}{" "}
            <span className="text-amber-400">{aboutData.companies}</span>,{" "}
            {aboutData.work}.{" "}
          </p>
          <p className="section-text">
            {aboutData.iAmUiUx}{" "}
            <span className="text-amber-400">{aboutData.uiUx}</span>,{" "}
            {aboutData.detailOriented}
            <span className="text-amber-400">
              {" "}
              {aboutData.designSystem}
            </span>, {aboutData.library}
          </p>
          <p className="text-xl mx-auto dark:text-neutral-300 text-neutral-800">
            {aboutData.learn}{" "}
            <span className="text-amber-400">
              {aboutData.feelFree}{" "}
              <Link
                to={"contact"}
                offset={-96}
                smooth
                duration={500}
                className="underline underline-offset-4 cursor-pointer"
              >
                {aboutData.contact}
              </Link>{" "}
              {aboutData.me}
            </span>
            .
          </p>
        </div>

        <div className="lg:w-1/2 lg:mr-24">
          <h1 className="section-title">{aboutData.skills}</h1>
          <p className="section-text">{aboutData.someSkills}</p>
          <div className="flex flex-wrap max-lg:justify-center">
            {skills.map(({ id, skill }: SkillSchema) => {
              return (
                <div
                  key={id}
                  className="flex justify-center items-center  my-1 md:my-2 mr-2 lg:mr-4 text-lg p-2 sm:p-3
                  rounded-lg bg-amber-400 text-neutral-900"
                >
                  <p className="text-sm">{skill}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
