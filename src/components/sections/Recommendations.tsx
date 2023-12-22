import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import {
  enRecommendationsData,
  ptRecommendationsData,
  Recommendation,
} from "../../data/recommendations";

function Recommendations() {
  const [activeIndex, setActiveIndex] = useState(0);

  const { language } = useContext(LanguageContext);
  const recommendationsData: Recommendation[] =
    language === "en" ? enRecommendationsData : ptRecommendationsData;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      id="recommendations"
      className="relative dark:bg-secondaryDarkBackground bg-secondaryBackground max-sm:h-[892px] max-md:h-[600px] h-[530px]"
    >
      <div className="absolute top-0 left-0 w-full h-full dark:bg-secondaryDarkBackground bg-secondaryBackground">
        {recommendationsData.map((recommendation, index) => (
          <div
            key={recommendation.id}
            className={`${
              index === activeIndex ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000 ease-in-out absolute top-0 left-0 w-full h-full`}
          >
            {/* navigation dots */}
            <div className="relative dark:bg-secondaryDarkBackground bg-secondaryBackground py-6 pb-24">
              <div className="flex absolute z-20 bottom-20 left-1/2 right-1/2 justify-center">
                <div className="flex justify-center space-x-5">
                  {recommendationsData.map((_, index) => (
                    <button
                      key={index}
                      className={`w-[11px] h-[11px] rounded-full ${
                        index === activeIndex
                          ? "bg-primary dark:bg-primaryDark"
                          : "dark:bg-tertiaryDarkBackground bg-tertiaryBackground hover:bg-primary dark:hover:bg-primaryDark"
                      }`}
                      onClick={() => setActiveIndex(index)}
                    />
                  ))}
                </div>
              </div>

              <div className="max-w-screen-xl px-14 md:px-4 mx-auto text-center py-8 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                  <svg
                    className="h-12 mx-auto mb-3 text-primary dark:text-primaryDark"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote>
                    <p className="max-sm:text-md section-text">
                      {recommendation.text}
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-4">
                    <img
                      className="max-sm:hidden w-12 h-12 rounded-full"
                      src={recommendation.image}
                      alt={recommendation.name}
                    />
                    <div className="flex max-sm:flex-col items-center max-sm:divide-x-0 divide-x-2 divide-tertiaryBackground dark:divide-tertiaryDarkBackground">
                      <p
                        className="max-sm:px-0 max-sm:pb-2 pr-4 max-sm:text-md text-lg
                        dark:text-neutral-300 text-neutral-700 max-sm:text-primary dark:max-sm:text-primaryDark"
                      >
                        {recommendation.name}
                      </p>

                      <p className="max-sm:px-0 pl-4 max-sm:text-md text-lg dark:text-neutral-300 text-neutral-700">
                        {recommendation.occupation}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center"></div>
    </motion.section>
  );
}

export default Recommendations;
