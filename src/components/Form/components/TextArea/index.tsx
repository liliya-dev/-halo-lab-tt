import React from 'react';
import styles from './styles.module.scss';

interface Props {
  title: string;
  text: string;
  placeholder: string;
  isError: boolean;
  isRequired: boolean;
  error: string;
  removeError: (name: string) => (void);
  handleInputChanges: (name: string, text: string) => (void);
  value: string;
  handleOnBlur: (name: string) => (void);
}

export const TextArea: React.FC<Props> = ({
  title, text, placeholder, isError,
  isRequired, error, removeError, handleInputChanges,
  value, handleOnBlur,
}) => {
  return (
    <div className={styles.option}>
      <label htmlFor={title} className={styles.label}>
        {text}
        {
          isRequired && <span className={styles.red}>*</span>
        }
      </label>
      <textarea
        value={value}
        placeholder={placeholder}
        name={title}
        id={title}
        className={isError ? `${styles.textArea} ${styles.textAreaInvalid}` : styles.textArea}
        onChange={(event) => {
          removeError(event.target.name);
          handleInputChanges(title, event.target.value);
        }}
        onBlur={() => handleOnBlur(title)}
      />
      <p className={styles.error}>{error}</p>
    </div>
  );
};
