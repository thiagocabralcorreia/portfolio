import { motion } from "framer-motion";
import { useState } from "react";
import { Recommendation, recommendationsData } from "../data/recommendations";

function RecommendationsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const recommendations: Recommendation[] = recommendationsData;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      id="recommendations"
      className="relative bg-neutral-800"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-neutral-800">
        {recommendations.map((recommendation, index) => (
          <div
            key={recommendation.id}
            className={`${
              index === activeIndex ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000 ease-in-out absolute top-0 left-0 w-full h-full `}
          >
            <div className="relative bg-neutral-800 py-6 pb-24">
              {/* navigation dots */}
              <div className="flex absolute z-20 bottom-20 left-1/2 right-1/2 justify-center">
                <div className="flex justify-center space-x-5">
                  {recommendations.map((_, index) => (
                    <button
                      key={index}
                      className={`w-[11px] h-[11px] rounded-full ${
                        index === activeIndex
                          ? "bg-amber-300"
                          : "bg-gray-300 hover:bg-neutral-500"
                      }`}
                      onClick={() => setActiveIndex(index)}
                    />
                  ))}
                </div>
              </div>

              <div className="max-w-screen-xl px-14 md:px-4 py-8 mx-auto text-center py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                  <svg
                    className="h-12 mx-auto mb-3 text-amber-300"
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
                    <div className="flex max-sm:flex-col items-center max-sm:divide-x-0 divide-x-2 divide-amber-300">
                      <div
                        className="max-sm:px-0 max-sm:pb-2 pr-4 max-sm:text-md text-lg 
                      text-neutral-300 max-sm:text-amber-300"
                      >
                        {recommendation.name}
                      </div>
                      <div className="max-sm:px-0 pl-4 max-sm:text-md text-lg text-neutral-300">
                        {recommendation.occupation}
                      </div>
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

export default RecommendationsSlider;
