/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { sections, SectionSchema } from "../data/sections";
import DropdownMenu from "./DropdownMenu";

function Navbar() {
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
    <header className="fixed top-0 left-0 right-0 z-10 animate-fade-in-down">
      <nav className="bg-neutral-800 lg:bg-neutral-900">
        <div className="flex items-center justify-between w-10/12 mx-auto px-4 sm:px-6 lg:px-8 h-24">
          <div className="w-full flex items-center justify-between">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full"
                src="https://avatars.githubusercontent.com/u/74374833?v=4"
                alt="Workflow"
              />
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {sections.map(({ id, section }: SectionSchema) => {
                  return (
                    <a
                      key={id}
                      href="#"
                      className="text-white hover:text-amber-300 duration-500 px-3 py-2 rounded-md text-[21px] font-medium font-barlow"
                    >
                      {section}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-amber-300 duration-500 hover:bg-neutral-800"
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
          </div>
        </div>
      </nav>

      <DropdownMenu show={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}

export default Navbar;
