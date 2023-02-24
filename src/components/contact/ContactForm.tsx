import { FiArrowUpCircle } from "react-icons/fi";

import Button from "../Button";
import FormInput from "../FormInput";

const ContactForm = () => {
  return (
    <div className="w-full lg:w-1/2">
      <h1 className="section-title text-left max-lg:text-center">
        GET IN TOUCH
      </h1>
      <div className="leading-loose">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="max-lg:justify-content max-lg:m-auto max-w-xl rounded-xl shadow-xl text-left"
        >
          <FormInput
            inputLabel="Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="Enter your full name"
            ariaLabelName="Name"
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="Enter your best email"
            ariaLabelName="Email"
          />
          <FormInput
            inputLabel="Subject"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="Subject"
            ariaLabelName="Subject"
          />

          <div className="mt-6">
            <label className="block text-lg text-white mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 border-opacity-50 text-white
              focus:outline-none focus:border-amber-300 focus:ring-1 focus:ring-amber-300
              bg-neutral-900 rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols={14}
              rows={6}
              aria-label="Message"
            ></textarea>
          </div>

          <div className="mt-8">
            <Button type="submit" aria-label="Submit Message">
              <FiArrowUpCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowUpCircle>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
