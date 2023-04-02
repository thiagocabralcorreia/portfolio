/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { sections, SectionSchema } from "../data/sections";
import DropdownMenu from "./DropdownMenu";
import Header from "./Header";
import MenuDropdown from "./MenuDropdown";
import { ThemeToggleButton } from "./ThemeToggleButton";
import Tooltip from "./Tooltip";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeDropdownMenu = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    closeDropdownMenu();
  });
  window.addEventListener("resize", closeDropdownMenu);

  return (
    <Header
      desktopChildren={
        <>
          {sections.map(({ id, section }: SectionSchema) => {
            return (
              <Link
                key={id}
                to={section.toLowerCase()}
                offset={-96}
                smooth
                duration={500}
                className="px-3 py-2 header-link"
              >
                {section}
              </Link>
            );
          })}
          <Tooltip text="Toggle theme" customStyle="top-10 w-24">
            <ThemeToggleButton />
          </Tooltip>
          <MenuDropdown
            imgStyle="ml-2 cursor-pointer content-center my-auto transition ease-out duration-500
            hover:border-2 hover:border-amber-400 rounded-xl"
          />
        </>
      }
      mobileChildren={
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md primary-font-colors
          duration-500 dark:hover:bg-neutral-800 hover:bg-neutral-100"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
          <ThemeToggleButton iconSize={24} />
          <MenuDropdown
            imgWidth={22}
            imgStyle="ml-2 cursor-pointer content-center my-auto transition ease-out duration-500
            hover:border-2 hover:border-amber-400 rounded-xl"
          />
          {/* <img
            src="https://hatscripts.github.io/circle-flags/flags/br.svg"
            width="22"
            alt="Português (Brasil)"
            className="ml-4 cursor-pointer"
            onClick={() => {}}
          /> */}
        </>
      }
      dropdownMenu={
        <DropdownMenu show={isOpen} onClose={() => setIsOpen(false)} />
      }
    />
  );
};

export default Navbar;
