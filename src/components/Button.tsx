import { motion } from "framer-motion";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="
    text-lg border border-neutral-900 hover:border-amber-300 py-2.5 sm:py-3 px-6
    shadow-lg rounded-lg bg-amber-300 hover:bg-neutral-900 text-neutral-900
    hover:text-amber-300 duration-500"
    >
      <div className="flex justify-center items-center m-auto">{children}</div>
    </motion.button>
  );
}

export default Button;
