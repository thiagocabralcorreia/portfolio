import { motion } from "framer-motion";

interface SkillSchema {
  id: number;
  skill: string;
}

const skills = [
  { id: 1, skill: "React.js" },
  { id: 2, skill: "TypeScript" },
  { id: 3, skill: "HMTL & CSS" },
  { id: 4, skill: "JavaScript" },
  { id: 5, skill: "Next.js" },
  { id: 6, skill: "Git & GitHub" },
  { id: 7, skill: "Data Structures" },
  { id: 8, skill: "Tailwind" },
  { id: 9, skill: "React Native" },
  { id: 10, skill: "UI/UX" },
  { id: 11, skill: "Styled-components" },
  { id: 12, skill: "Redux" },
  { id: 13, skill: "Scrum & Kanban" },
  { id: 14, skill: "Accessibility" },
];

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="bg-neutral-800 max-md:pb-2 py-20"
    >
      <div className="w-10/12 flex max-lg:flex-col m-auto max-lg:text-center content-center justify-center">
        <div className="max-md: px-5 lg:w-1/2 lg:mr-24 max-lg:mb-20">
          <h1 className="text-3xl sm:text-5xl xl:text-5xl max-lg:mb-8 mb-12 text-white font-barlow">
            NICE TO MEET YOU
          </h1>
          <p className="text-xl mx-auto mb-8 text-neutral-300">
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
          <p className="text-xl mx-auto mb-8 text-neutral-300">
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
        <div className="lg:w-1/2 lg:mr-24 max-lg:mb-20">
          <h1 className="text-3xl sm:text-5xl xl:text-5xl max-lg:mb-8 mb-12 text-white font-barlow">
            SKILLS
          </h1>
          <p className="text-xl mx-auto mb-8 text-neutral-300">
            Some skills and tools I’ve been working with:
          </p>
          <div className="flex flex-wrap max-lg:justify-center">
            {skills.map(({ id, skill }: SkillSchema) => {
              return (
                <div
                  key={id}
                  className="flex justify-center items-center max-md:w-36 w-40 my-1 md:my-2 mr-2 lg:mr-4 text-lg py-2 sm:py-3 rounded-lg bg-amber-300 text-neutral-900"
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
