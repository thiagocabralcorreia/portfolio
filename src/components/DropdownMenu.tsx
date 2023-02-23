import { useRef } from "react";
import { Transition } from "@headlessui/react";
import { sections, SectionSchema } from "../data/sections";
import { Link } from "react-scroll";

interface DropdownMenuProps {
  show: boolean;
  onClose: () => void;
}

const DropdownMenu = ({ show, onClose }: DropdownMenuProps) => {
  const ref = useRef(null);
  return (
    <Transition
      show={show}
      enter="transition ease-out duration-200 transform"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-75 transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <nav className="lg:hidden">
        <div ref={ref} className="h-screen overflow-hidden text-center">
          <div className="pt-2 pb-3 space-y-1 sm:px-3 bg-neutral-800 lg:bg-neutral-900">
            {sections.map(({ id, section }: SectionSchema) => {
              return (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <Link
                  key={id}
                  to={section.toLowerCase()}
                  onClick={onClose}
                  offset={-96}
                  className="header-link block px-3 py-4"
                >
                  {section}
                </Link>
              );
            })}
          </div>
          <div onClick={onClose} className="bg-transparent w-full h-full" />
        </div>
      </nav>
    </Transition>
  );
};

export default DropdownMenu;
