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
      <nav className="mb-[-5px] dark:bg-neutral-800 lg:dark:bg-neutral-900 bg-neutral-100 lg:bg-white">
        <div className="flex items-center justify-between w-10/12 mx-auto px-4 sm:px-6 lg:px-8 h-24">
          <div className="lg:w-full flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link to={"/"}>
                <div className="h-12 w-12 flex justify-center items-center m-auto rounded-full bg-amber-400">
                  <p className="text-[21px] font-extrabold text-black font-barlow">
                    TCC
                  </p>
                </div>
              </Link>
            </div>

            <div className="hidden lg:block">
              <div className="flex items-baseline space-x-4">
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
