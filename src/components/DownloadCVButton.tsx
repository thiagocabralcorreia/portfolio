import { FiArrowDownCircle } from "react-icons/fi";

const DownloadButton = () => {
  return (
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
  );
};

export default DownloadButton;
