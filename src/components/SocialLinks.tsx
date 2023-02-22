import { motion } from "framer-motion";
import { links, LinkSchema } from "../data/socialLinks";

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ x: -180 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="absolute hidden md:flex flex-col top-[50%] lg:top-[35%] left-0"
    >
      <ul>
        {links.map(({ id, child, href, style }: LinkSchema) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-20px] hover:rounded-md duration-300 bg-neutral-800" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SocialLinks;
