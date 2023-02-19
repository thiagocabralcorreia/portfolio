/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRef, useState } from "react";
import { Transition } from "@headlessui/react";

function Navbar() {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-neutral-900 animate-fade-in-down">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
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
                <a
                  href="#"
                  className="text-white hover:text-amber-300 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="text-white hover:text-amber-300 px-3 py-2 rounded-md text-lg font-medium"
                >
                  About
                </a>

                <a
                  href="#"
                  className="text-white hover:text-amber-300 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Experience
                </a>

                <a
                  href="#"
                  className="text-white hover:text-amber-300 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-white hover:text-amber-300 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Recommendations
                </a>
                <a
                  href="#"
                  className="text-white hover:text-amber-300 px-3 py-2 rounded-md text-lg font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-neutral-900 inline-flex items-center justify-center p-2 rounded-md text-white hover:amber-300 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-white"
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

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <nav className="lg:hidden" id="mobile-menu">
          <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-white hover:text-amber-300 block font-bold px-3 py-4 rounded-md text-lg"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-amber-300 block font-bold px-3 py-4 rounded-md text-lg"
            >
              About
            </a>

            <a
              href="#"
              className="text-white hover:text-amber-300 block font-bold px-3 py-4 rounded-md text-lg"
            >
              Experience
            </a>

            <a
              href="#"
              className="text-white hover:text-amber-300 block font-bold px-3 py-4 rounded-md text-lg"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-white hover:text-amber-300 block font-bold px-3 py-4 rounded-md text-lg"
            >
              Recommendations
            </a>
            <a
              href="#"
              className="text-white hover:text-amber-300 block font-bold px-3 py-4 rounded-md text-lg"
            >
              Contact
            </a>
          </div>
        </nav>
      </Transition>
    </header>
  );
}

export default Navbar;
