import { FaWhatsapp } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="w-full lg:w-1/2 lg:mr-24">
      <div className="text-left max-lg:text-center">
        <h1 className="section-title">SAY HELLO!</h1>
        <p className="section-text">
          If you have a question or just want to say hello, you can submit the
          following form or chat with me and I’ll do my best to get back to you
          as soon as possible.
        </p>
        <p className="section-text">
          I'm{" "}
          <span className="text-amber-300">
            always open to making connections
          </span>
          , sharing knowledge and discussing new projects or opportunities.
          Let's talk!
        </p>
        <div className="flex justify-center lg:block max-lg:mt-[-40px] max-lg:mb-20">
          <a
            aria-label="WhasApp"
            href="https://wa.me/5585986206343"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0
            text-lg border border-neutral-900 hover:border-amber-300 py-2.5 sm:py-3
            shadow-lg rounded-lg bg-amber-300 hover:bg-neutral-900 text-neutral-900
            hover:text-amber-300 duration-500"
          >
            <FaWhatsapp className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FaWhatsapp>
            <span className="text-sm sm:text-lg duration-100">
              Chat with me
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
