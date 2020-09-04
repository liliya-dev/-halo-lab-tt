import React from 'react';

interface Props {
  buttonClass: string;
  text: string;
}

export const SubmitButton: React.FC<Props> = ({ buttonClass, text }) => {
  return (
    <button
      type="button"
      className={buttonClass}
    >
      {text}
    </button>
  );
};
