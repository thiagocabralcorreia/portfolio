import { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiArrowUpCircle } from "react-icons/fi";

import { LanguageContext } from "../../context/LanguageContext";
import { enContactData, ptContactData } from "../../data/contact";

import Button from "../Button";
import FormInput from "../FormInput";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const { language } = useContext(LanguageContext);
  const contactData = language === "en" ? enContactData : ptContactData;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "thiago_dev",
          "template_portfolio_mail",
          form.current,
          "Y-CiN9lXMgaSKwlPV"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      form.current.reset();
    }
  };

  return (
    <div className="w-full lg:w-1/2">
      <h1 className="section-title text-left max-lg:text-center">
        {contactData.inTouch}
      </h1>
      <div className="leading-loose">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-lg:justify-content max-lg:m-auto max-w-xl rounded-xl text-left"
        >
          <FormInput
            inputLabel={contactData.name}
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText={contactData.fullName}
            ariaLabelName="Name"
          />
          <FormInput
            inputLabel={contactData.email}
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText={contactData.bestEmail}
            ariaLabelName="Email"
          />
          <FormInput
            inputLabel={contactData.subject}
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText={contactData.enterSubject}
            ariaLabelName="Subject"
          />

          <div className="mt-6">
            <label
              className="block text-lg text-black dark:text-white mb-2"
              htmlFor="message"
            >
              {contactData.message}
            </label>
            <textarea
              className="w-full px-5 py-2 border dark:border-gray-300 border-gray-700 border-opacity-50 text-black dark:text-white
              focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400
              bg-white dark:bg-neutral-900 rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols={14}
              rows={6}
              aria-label="Message"
              required
            ></textarea>
          </div>

          <div className="mt-8">
            <Button type="submit" aria-label="Submit Message">
              <FiArrowUpCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowUpCircle>
              {contactData.submit}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
