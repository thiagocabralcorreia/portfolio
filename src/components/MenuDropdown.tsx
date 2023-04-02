import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Language, LanguageContext } from "../context/LanguageContext";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

interface MenuDropdownProps {
  imgWidth?: number;
  imgStyle: string;
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({
  imgWidth = 23,
  imgStyle,
}) => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
  };

  return (
    <Menu as="div" className="relative flex my-auto  content-center">
      <Menu.Button className="my-auto content-center">
        <img
          src={`https://hatscripts.github.io/circle-flags/flags/${
            language === "pt" ? "br" : "gb"
          }.svg`}
          width={imgWidth}
          alt="English (UK)"
          className={imgStyle}
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute top-8 right-0 mt-2 w-56 origin-top-right
        divide-y divide-gray-100 rounded-md dark:bg-neutral-700 bg-neutral-50 shadow-lg
        ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`${
                    active
                      ? "bg-amber-400 text-neutral-900"
                      : "dark:text-white text-neutral-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <img
                    src="https://hatscripts.github.io/circle-flags/flags/gb.svg"
                    width="23"
                    alt="English (UK)"
                    className="ml-2 cursor-pointer content-center my-auto mr-3 transition ease-out duration-500 rounded-xl"
                  />
                  English (UK)
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => handleLanguageChange("pt")}
                  className={`${
                    active
                      ? "bg-amber-400 text-neutral-900"
                      : "dark:text-white text-neutral-900"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  <img
                    src="https://hatscripts.github.io/circle-flags/flags/br.svg"
                    width="23"
                    alt="Portuguese (Brazil)"
                    className="ml-2 cursor-pointer content-center my-auto mr-3 transition ease-out duration-500 rounded-xl"
                  />
                  Portuguese (Brazil)
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

function UpdateInactiveIcon(props: IconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#ffc2df"
        stroke="#E82E81"
        strokeWidth="2"
      />
    </svg>
  );
}

function UpdateActiveIcon(props: IconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#ef4b95"
        stroke="#fbbad8"
        strokeWidth="2"
      />
    </svg>
  );
}

function DeleteInactiveIcon(props: IconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#ffc2df"
        stroke="#E82E81"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#E82E81" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#E82E81" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props: IconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#ef4b95"
        stroke="#fbbad8"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#fbbad8" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#fbbad8" strokeWidth="2" />
    </svg>
  );
}

export default MenuDropdown;
