import React from 'react';
import styles from './styles.module.scss';

interface Props {
  text: string;
  handleSubmit: (event: React.FormEvent) => (void);
}

export const SubmitButton: React.FC<Props> = ({ text, handleSubmit }) => {
  return (
    <button
      type="submit"
      className={styles.button}
      onClick={(event) => handleSubmit(event)}
    >
      {text}
    </button>
  );
};
