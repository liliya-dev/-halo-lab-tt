/* eslint-disable no-console */
import React, { useState, ChangeEvent } from 'react';
import { zeroStateValues, zeroStateErrors } from './constants';
import { showErrors } from './helpers';
import { ObjectIndex } from '../../interfaces/interfaces';
import { FileInput } from './components/FileInput';
import { FormInput } from './components/FormInput/index';
import { SubmitButton } from '../Buttons/SubmitButton';
import { TextArea } from './components/TextArea';
import styles from './styles.module.scss';

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
    <form className={styles.container}>
      <div className={styles.wrapper}>
        <FormInput
          additionalClass="optionBig"
          isError={errors.company.length !== 0}
          title="company"
          text="Your company name"
          placeholder="Type text"
          type="text"
          isRequired={false}
          error=""
          removeError={removeError}
          handleInputChanges={handleInputChanges}
          value={values.company}
          handleOnBlur={handleOnBlur}
        />
        <FormInput
          additionalClass="optionSmall"
          isError={errors.number.length !== 0}
          title="number"
          text="Number of people "
          placeholder="1-99"
          type="text"
          isRequired
          error={errors.number}
          removeError={removeError}
          handleInputChanges={handleInputChanges}
          value={values.number}
          handleOnBlur={handleOnBlur}
        />
      </div>
      <FormInput
        additionalClass=""
        isError={errors.business.length !== 0}
        title="business"
        text="Business area"
        placeholder="Design, Marketing, Development, etc."
        type="text"
        isRequired
        error={errors.business}
        removeError={removeError}
        handleInputChanges={handleInputChanges}
        value={values.business}
        handleOnBlur={handleOnBlur}
      />
      <TextArea
        title="description"
        text="Description"
        isError={errors.description.length !== 0}
        placeholder="Type text"
        isRequired
        error={errors.description}
        removeError={removeError}
        handleInputChanges={handleInputChanges}
        value={values.description}
        handleOnBlur={handleOnBlur}
      />
      <FileInput handleFiles={handleFiles} numberOfFiles={numberOfFiles} />
      <SubmitButton
        text="Submit"
        handleSubmit={handleSubmit}
      />
    </form>
  );
};
