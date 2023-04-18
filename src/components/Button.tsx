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
      className="text-lg py-2.5 sm:py-3 px-6 shadow-lg rounded-lg duration-500 dark:hover:border
     hover:border-amber-400 dark:border dark:border-neutral-900 dark:hover:border-amber-400 bg-amber-400
     hover:bg-neutral-900 text-neutral-900 hover:text-amber-400"
    >
      <div className="flex justify-center items-center m-auto">{children}</div>
    </motion.button>
  );
};

export default Button;
