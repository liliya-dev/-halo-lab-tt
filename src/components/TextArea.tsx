import React from 'react';

interface Props {
  title: string;
  text: string;
  placeholder: string;
  inputClass: string;
  labelClass: string;
  optionClass: string;
  isRequired: boolean;
  errorClass: string;
  error: string;
  removeError: (name: string) => (void);
  handleInputChanges: (name: string, text: string) => (void);
  value: string;
  handleOnBlur: (name: string) => (void);
}

export const TextArea: React.FC<Props> = ({
  title, text, placeholder, inputClass, labelClass, optionClass,
  isRequired, error, errorClass, removeError, handleInputChanges,
  value, handleOnBlur,
}) => {
  return (
    <div className={optionClass}>
      <label htmlFor={title} className={labelClass}>
        {text}
        {
          isRequired && <span className="red">*</span>
        }
      </label>
      <textarea
        value={value}
        placeholder={placeholder}
        name={title}
        id={title}
        className={inputClass}
        onChange={(event) => {
          removeError(event.target.name);
          handleInputChanges(title, event.target.value);
        }}
        onBlur={() => handleOnBlur(title)}
      />
      <p className={errorClass}>{error}</p>
    </div>
  );
};
