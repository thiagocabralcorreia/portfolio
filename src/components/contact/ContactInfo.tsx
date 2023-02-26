import { FaWhatsapp } from "react-icons/fa";
import Hyperlink from "../Hyperlink";

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

        <div className="flex justify-center text-lg lg:block w-52 mt-10 max-lg:mb-20 max-lg:m-auto">
          <Hyperlink
            aria-label="WhasApp"
            href="https://wa.me/5585986206343"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mr-2 w-5 h-5 duration-100"></FaWhatsapp>
            <span>Chat with me</span>
          </Hyperlink>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
