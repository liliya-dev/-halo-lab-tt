import React, { ChangeEvent } from 'react';

interface Props {
  handleFiles: (event: ChangeEvent<HTMLInputElement>) => (void);
  numberOfFiles: number;
}

export const FileInput: React.FC<Props> = ({ handleFiles, numberOfFiles }) => {
  return (
    <div className="form__file file">

      <label htmlFor="file" className="file__label">
        <img src="img/Folder.png" alt="add folder" className="file__img" />
        Add file as attachment
        <input
          type="file"
          className="file__input"
          id="file"
          name="file"
          multiple
          onChange={handleFiles}
        />
      </label>
      <p className="file__text">
        {
          numberOfFiles === 0
            ? 'Choose a file'
            : `${numberOfFiles} files attached`
        }
      </p>
    </div>
  );
};
