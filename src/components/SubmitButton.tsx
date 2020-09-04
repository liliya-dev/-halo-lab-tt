import React from 'react';

interface Props {
  buttonClass: string;
  text: string;
  handleSubmit: (event: React.FormEvent) => (void);
}

export const SubmitButton: React.FC<Props> = ({ buttonClass, text, handleSubmit }) => {
  return (
    <button
      type="submit"
      className={buttonClass}
      onClick={(event) => handleSubmit(event)}
    >
      {text}
    </button>
  );
};
