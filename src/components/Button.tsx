import { motion } from "framer-motion";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="text-lg py-2.5 sm:py-3 px-6 shadow-lg rounded-lg duration-500 dark:hover:border border border-primary
      hover:border-primary dark:border dark:border-neutral-900 dark:hover:border-primaryDark bg-primary dark:bg-primaryDark
      hover:bg-white text-white dark:text-neutral-900 hover:text-primary dark:hover:text-primaryDark dark:hover:bg-neutral-900"
    >
      <div className="flex justify-center items-center m-auto">{children}</div>
    </motion.button>
  );
};

export default Button;
