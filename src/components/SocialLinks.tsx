import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

interface SocialLinksProps {
  id: number;
  child: any;
  href: string;
  style?: string;
}

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <p className="ml-5">LinkedIn</p> <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/thiago-cabral-correia/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <p className="ml-5">GitHub</p> <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/thiagocabralcorreia",
    },
    {
      id: 3,
      child: (
        <>
          <p className="ml-5">Mail</p> <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:thiagocabralcorreia@gmail.com",
    },
  ];

  return (
    <motion.div
      initial={{ x: -180 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="absolute hidden md:flex flex-col top-[50%] lg:top-[35%] left-0"
    >
      <ul>
        {links.map(({ id, child, href, style }: SocialLinksProps) => (
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
