/* eslint-disable no-console */
import React, { useState, ChangeEvent } from 'react';

export const FileInput = () => {
  const [numberOfFiles, setNumberOfFiles] = useState(0);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const increaseNumber = event.target.files?.length || 0;

    console.log(event.target.files);

    setNumberOfFiles(numberOfFiles + increaseNumber);
  };

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
          onChange={handleChange}
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
