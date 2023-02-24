import { motion } from "framer-motion";
import ContactDetails from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.1,
      }}
      className="w-10/12 flex max-lg:flex-col m-auto py-20 px-4 sm:px-6 lg:px-8"
    >
      <ContactDetails />
      <ContactForm />
    </motion.div>
  );
};

export default Contact;
