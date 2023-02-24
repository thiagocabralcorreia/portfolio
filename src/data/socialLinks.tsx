import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export interface LinkSchema {
  id: number;
  child: React.ReactNode;
  href: string;
  style?: string;
}
export const links = [
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
