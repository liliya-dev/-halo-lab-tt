/* eslint-disable no-console */
import React, { useState, ChangeEvent } from 'react';
import { zeroStateValues, zeroStateErrors } from '../constants';
import { showErrors } from '../helpers';
import { ObjectIndex } from '../interfaces';
import { FileInput } from './FileInput';
import { FormInput } from './FormInput';
import { SubmitButton } from './SubmitButton';
import { TextArea } from './TextArea';

export const Form = () => {
  const [values, setValues] = useState(zeroStateValues);
  const [errors, setErrors] = useState<ObjectIndex>(zeroStateErrors);
  const [numberOfFiles, setNumberOfFiles] = useState(0);

  const handleFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const increaseNumber = event.target.files?.length || 0;

    setNumberOfFiles(numberOfFiles + increaseNumber);
  };

  const handleInputChanges = (name: string, text: string) => {
    setValues({ ...values, [name]: text });
  };

  const handleOnBlur = (name: string) => {
    const newErrors: ObjectIndex = showErrors(name, errors, values);

    setErrors(newErrors);
  };

  const handleSubmit = (event: React.FormEvent) => {
    const newErrors: ObjectIndex = {};

    event.preventDefault();
    Object.keys(errors).forEach(key => {
      newErrors[key] = showErrors(key, errors, values)[key];
    });
    const isError = Object.values(newErrors).every(err => err === '');

    if (!isError) {
      setErrors(newErrors);
    } else {
      console.log({ ...values, numberOfFiles });
      setValues(zeroStateValues);
      setNumberOfFiles(0);
    }
  };

  const removeError = (name: string) => {
    setErrors({ ...errors, [name]: '' });
  };

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
          handleInputChanges={handleInputChanges}
          value={values.company}
          handleOnBlur={handleOnBlur}
        />
        <FormInput
          title="number"
          inputClass={errors.number === '' ? 'form__input' : 'form__input form__input--invalid'}
          labelClass="form__label"
          text="Number of people "
          placeholder="1-99"
          type="text"
          optionClass="form__option form__option--people"
          isRequired
          error={errors.number}
          errorClass="form__error"
          removeError={removeError}
          handleInputChanges={handleInputChanges}
          value={values.number}
          handleOnBlur={handleOnBlur}
        />
      </div>
      <FormInput
        title="business"
        inputClass={errors.business === '' ? 'form__input' : 'form__input form__input--invalid'}
        labelClass="form__label"
        text="Business area"
        placeholder="Design, Marketing, Development, etc."
        type="text"
        optionClass="form__option"
        isRequired
        error={errors.business}
        errorClass="form__error"
        removeError={removeError}
        handleInputChanges={handleInputChanges}
        value={values.business}
        handleOnBlur={handleOnBlur}
      />
      <TextArea
        title="description"
        inputClass={errors.description === '' ? 'form__text-area' : 'form__text-area form__text-area--invalid'}
        labelClass="form__label"
        text="Description"
        placeholder="Type text"
        optionClass="form__option"
        isRequired
        error={errors.description}
        errorClass="form__error"
        removeError={removeError}
        handleInputChanges={handleInputChanges}
        value={values.description}
        handleOnBlur={handleOnBlur}
      />
      <FileInput handleFiles={handleFiles} numberOfFiles={numberOfFiles} />
      <SubmitButton
        text="Submit"
        buttonClass="form__button"
        handleSubmit={handleSubmit}
      />
    </form>
  );
};
