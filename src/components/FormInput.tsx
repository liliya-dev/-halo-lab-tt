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
}

export const FormInput: React.FC<Props> = ({
  title, text, placeholder, inputClass, type,
  labelClass, optionClass, isRequired, error,
  errorClass, removeError,
}) => {
  const handleOnBlur = (ev: any) => {
    console.log(ev, removeError);
  };

  return (
    <div className={optionClass}>
      <label htmlFor={title} className={labelClass}>
        {text}
        {
          isRequired && <span className="red">*</span>
        }
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={title}
        id={title}
        className={inputClass}
        onBlur={handleOnBlur}
        onChange={(event) => removeError(event.target.name)}
      />
      <p className={errorClass}>
        {error}
      </p>
    </div>
  );
};
