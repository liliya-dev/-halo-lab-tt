import React, { ChangeEvent } from 'react';
import styles from './styles.module.scss';
import folder from './Folder.png';

interface Props {
  handleFiles: (event: ChangeEvent<HTMLInputElement>) => (void);
  numberOfFiles: number;
}

export const FileInput: React.FC<Props> = ({ handleFiles, numberOfFiles }) => {
  return (
    <div className={styles.file}>

      <label htmlFor="file" className={styles.label}>
        <img src={folder} alt="add folder" className={styles.img} />
        Add file as attachment
        <input
          type="file"
          className={styles.input}
          id="file"
          name="file"
          multiple
          onChange={handleFiles}
        />
      </label>
      <p className={styles.text}>
        {
          numberOfFiles === 0
            ? 'Choose a file'
            : `${numberOfFiles} files attached`
        }
      </p>
    </div>
  );
};
