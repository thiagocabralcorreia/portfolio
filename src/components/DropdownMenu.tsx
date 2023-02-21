import { useRef } from "react";
import { Transition } from "@headlessui/react";
import { topics, TopicSchema } from "../data/topics";

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
            {topics.map(({ id, topic }: TopicSchema) => {
              return (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a
                  key={id}
                  href="#"
                  onClick={onClose}
                  className="text-white hover:text-amber-300 duration-500 block font-bold px-3 py-4 rounded-md text-[22px] font-barlow"
                >
                  {topic}
                </a>
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
