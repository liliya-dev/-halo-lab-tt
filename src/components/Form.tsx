/* eslint-disable no-console */
import React, { useState } from 'react';
import { FileInput } from './FileInput';
import { FormInput } from './FormInput';
import { SubmitButton } from './SubmitButton';
import { TextArea } from './TeaxtArea';

export const Form = () => {
  const [errors, setErrors] = useState({
    number: 'dddd',
    business: '',
    description: '',
  });

  const removeError = (name: string) => {
    
    setErrors({ ...errors, [name]: '' });
  };

  console.log(setErrors);

  return (
    <form className="form">
      <div className="form__wrapper">
        <FormInput
          title="company"
          inputClass="form__input"
          labelClass="form__label"
          text="Your company name"
          placeholder="Type text"
          type="text"
          optionClass="form__option form__option--company"
          isRequired={false}
          error=""
          errorClass="form__error"
          removeError={removeError}
        />
        <FormInput
          title="number"
          inputClass="form__input"
          labelClass="form__label"
          text="Number of people "
          placeholder="1-99"
          type="text"
          optionClass="form__option form__option--people"
          isRequired
          error={errors.number}
          errorClass="form__error"
          removeError={removeError}
        />
      </div>
      <FormInput
        title="business"
        inputClass="form__input"
        labelClass="form__label"
        text="Business area"
        placeholder="Design, Marketing, Development, etc."
        type="text"
        optionClass="form__option"
        isRequired
        error={errors.business}
        errorClass="form__error"
        removeError={removeError}
      />
      <TextArea
        title="description"
        inputClass="form__text-area"
        labelClass="form__label"
        text="Description"
        placeholder="Type text"
        optionClass="form__option"
        isRequired
        error={errors.description}
        errorClass="form__error"
        removeError={removeError}
      />

      <FileInput />

      <SubmitButton
        text="Submit"
        buttonClass="form__button"
      />
    </form>

  );
};
