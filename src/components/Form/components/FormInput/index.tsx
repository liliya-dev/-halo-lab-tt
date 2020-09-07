/* eslint-disable no-console */
import React from 'react';
import styles from './styles.module.scss';

interface Props {
  additionalClass: string;
  isError: boolean;
  title: string;
  text: string;
  placeholder: string;
  type: string;
  isRequired: boolean;
  error: string;
  removeError: (name: string) => (void);
  handleInputChanges: (name: string, text: string) => (void);
  value: string;
  handleOnBlur: (name: string) => (void);
}

export const FormInput: React.FC<Props> = ({
  title, text, placeholder, type, isRequired,
  error, removeError, handleInputChanges,
  value, handleOnBlur, isError, additionalClass,
}) => {
  console.log(styles[additionalClass]);

  return (
    <div
      className={
        styles[additionalClass]
          ? `${styles.option} ${styles[additionalClass]}`
          : `${styles.option}`
      }
    >
      <label htmlFor={title} className={styles.label}>
        {text}
        {
          isRequired && <span className={styles.red}>*</span>
        }
      </label>
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        name={title}
        id={title}
        className={isError ? `${styles.input} ${styles.inputInvalid}` : styles.input}
        onChange={(event) => {
          removeError(event.target.name);
          handleInputChanges(title, event.target.value);
        }}
        onBlur={() => handleOnBlur(title)}
      />
      <p className={styles.error}>
        {error}
      </p>
    </div>
  );
};
