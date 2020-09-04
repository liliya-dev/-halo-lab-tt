/* eslint-disable no-console */
import React from 'react';

interface Props {
  title: string;
  text: string;
  placeholder: string;
  inputClass: string;
  type: string;
  labelClass: string;
  optionClass: string;
  isRequired: boolean;
  error: string;
  errorClass: string;
  removeError: (name: string) => (void);
  handleInputChanges: (name: string, text: string) => (void);
  value: string;
  handleOnBlur: (name: string) => (void);
}

export const FormInput: React.FC<Props> = ({
  title, text, placeholder, inputClass, type,
  labelClass, optionClass, isRequired, error,
  errorClass, removeError, handleInputChanges,
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
      <input
        value={value}
        type={type}
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
      <p className={errorClass}>
        {error}
      </p>
    </div>
  );
};
