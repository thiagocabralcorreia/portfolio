import { FaGlobe, FaApple, FaGooglePlay, FaGithub } from "react-icons/fa";
import { ProjectDetailsSchema } from "../../data/projectDetails";

interface ProjectContentProps {
  project?: ProjectDetailsSchema;
}

const ProjectContent = ({ project }: ProjectContentProps) => {
  return (
    <div className="block sm:flex gap-0 sm:gap-10 sm:mt-14">
      <div className="w-full sm:w-1/3 text-left">
        <div className="mb-7">
          <p className="text-4xl text-white font-barlow mb-7">SKILLS & TOOLS</p>
          <div className="flex flex-wrap">
            {project?.skills.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center items-center  my-1 md:my-2 mr-2 lg:mr-4 text-lg p-2 sm:p-3
                  rounded-lg bg-amber-400 text-neutral-900"
                >
                  <p className="text-sm">{skill}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-7">
          <p className="text-4xl text-white font-barlow mb-7">LINKS</p>
          {project?.website && (
            <a
              href={project?.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full section-text mb-5 hover:text-amber-400 duration-300"
            >
              <FaGlobe size={28} />
              <p className="ml-4"> Visit website</p>
            </a>
          )}
          {project?.appleStore && (
            <a
              href={project?.appleStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full section-text mb-5 hover:text-amber-400 duration-300"
            >
              <FaApple size={28} />
              <p className="ml-4">Download from Apple Store</p>
            </a>
          )}
          {project?.playStore && (
            <a
              href={project?.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full section-text mb-5 hover:text-amber-400 duration-300"
            >
              <FaGooglePlay size={28} />
              <p className="ml-4">Download from Play Store</p>
            </a>
          )}
          {project?.github && (
            <a
              href={project?.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full section-text mb-5 hover:text-amber-400 duration-300"
            >
              <FaGithub size={28} />
              <p className="ml-4">Check out the code</p>
            </a>
          )}
        </div>
      </div>

      <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <p className="text-4xl text-white font-barlow mb-7">PROJECT OVERVIEW</p>
        {project?.about.map(({ id, text }) => (
          <p key={id} className="section-text">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectContent;
