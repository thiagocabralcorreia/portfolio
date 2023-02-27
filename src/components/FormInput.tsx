interface FormInputProps {
  inputLabel: string;
  labelFor: string;
  inputType: string;
  inputId: string;
  inputName: string;
  placeholderText: string;
  ariaLabelName: string;
}

const FormInput = ({
  inputLabel,
  labelFor,
  inputType,
  inputId,
  inputName,
  placeholderText,
  ariaLabelName,
}: FormInputProps) => {
  return (
    <div className="mb-4">
      <label className="block text-lg text-white mb-1" htmlFor={labelFor}>
        {inputLabel}
      </label>
      <input
        className="w-full px-5 py-2 border border-neutral-300 border-opacity-50
        text-white bg-neutral-900 rounded-md shadow-sm text-md
        focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
        type={inputType}
        id={inputId}
        name={inputName}
        placeholder={placeholderText}
        aria-label={ariaLabelName}
        required
      />
    </div>
  );
};

export default FormInput;
