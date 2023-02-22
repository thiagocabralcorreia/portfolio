import { motion } from "framer-motion";
import { skills, SkillSchema } from "../data/skills";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="bg-neutral-800 py-20"
    >
      <div className="w-10/12 flex max-lg:flex-col m-auto max-lg:text-center content-center justify-center">
        <div className="max-md: px-5 lg:w-1/2 lg:mr-24 max-lg:mb-20">
          <h1 className="section-title">NICE TO MEET YOU!</h1>
          <p className="section-text">
            So, I've been a{" "}
            <span className="text-amber-300">
              Front-end Web & Mobile Developer
            </span>{" "}
            for a bit more than 2 years now. During this time, I've worked
            remotely for{" "}
            <span className="text-amber-300">
              consulting agencies and startups
            </span>
            . I've had the chance to work with some amazing professional folks,
            creating cool digital stuff, such as{" "}
            <span className="text-amber-300">websites and mobile apps</span>.
          </p>
          <p className="section-text">
            I enjoy every project step: from the first team meeting, discovering
            the purposes and problems to solve, to taking vector designs and
            bring them to life in code, thus making a{" "}
            <span className="text-amber-300">
              beautiful, responsive and fully functional product
            </span>
            .
          </p>
          <p className="text-xl mx-auto text-neutral-300">
            Always excited to learn and progress, I'm constantly improving my
            current skills and studying new technologies. I love collaborating
            and making connections, especially over a cup of coffee.{" "}
            <span className="text-amber-300">
              Feel free to{" "}
              <span className="underline underline-offset-4">contact</span> me
            </span>
            .
          </p>
        </div>
        <div className="lg:w-1/2 lg:mr-24 mb-10 max-lg:mb-20">
          <h1 className="section-title">SKILLS & TOOLS</h1>
          <p className="section-text">
            Some skills and technologies I’ve been working with:
          </p>
          <div className="flex flex-wrap max-lg:justify-center">
            {skills.map(({ id, skill }: SkillSchema) => {
              return (
                <div
                  key={id}
                  className="flex justify-center items-center  my-1 md:my-2 mr-2 lg:mr-4 text-lg p-2 sm:p-3 rounded-lg bg-amber-300 text-neutral-900"
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
