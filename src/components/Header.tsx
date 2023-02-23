import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface HeaderProps {
  desktopChildren: React.ReactNode;
  mobileChildren: React.ReactNode;
  dropdownMenu?: React.ReactNode;
}

function Header({
  desktopChildren,
  mobileChildren,
  dropdownMenu,
}: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="fixed h-24 top-0 left-0 right-0 z-10"
    >
      <nav className="mb-[-5px] bg-neutral-800 lg:bg-neutral-900">
        <div className="flex items-center justify-between w-10/12 mx-auto px-4 sm:px-6 lg:px-8 h-24">
          <div className="lg:w-full flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link to={"/"}>
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://avatars.githubusercontent.com/u/74374833?v=4"
                  alt="Workflow"
                />
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
}

export default Header;
