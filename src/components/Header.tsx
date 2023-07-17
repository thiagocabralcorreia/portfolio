import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface HeaderProps {
  desktopChildren: React.ReactNode;
  mobileChildren: React.ReactNode;
  dropdownMenu?: React.ReactNode;
}

const Header = ({
  desktopChildren,
  mobileChildren,
  dropdownMenu,
}: HeaderProps) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="fixed h-24 top-0 left-0 right-0 z-50"
    >
      <nav className="mb-[-5px] dark:bg-secondaryDarkBackground bg-secondaryBackground opacity-95 backdrop-blur-md">
        <div className="flex items-center justify-between w-10/12 mx-auto px-4 sm:px-6 lg:px-8 h-24">
          <div className="flex w-full items-center justify-between">
            <div className="flex-shrink-0">
              <Link to={"/"}>
                <p
                  className="text-[24px] md:text-[32px] font-semibold
                dark:text-neutral-300 text-neutral-700
                dark:hover:text-primaryDark hover:text-primary font-poppins"
                >
                  tcc<span className="blinking">_</span>
                </p>
              </Link>
            </div>

            <div className="hidden lg:block">
              <div className="flex w-full items-baseline justify-between space-x-4">
                {desktopChildren}
              </div>
            </div>
          </div>

          <div className="flex lg:hidden">{mobileChildren}</div>
        </div>
      </nav>

      <>{dropdownMenu}</>
    </motion.header>
  );
};

export default Header;
