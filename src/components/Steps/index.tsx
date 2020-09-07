import React from 'react';
import styles from './styles.module.scss';

export const Steps: React.FC = () => {
  return (
    <div className={styles.container}>
      <span className={`${styles.item} ${styles.nonActive}`}>1</span>
      <span className={styles.line} />
      <span className={`${styles.item} ${styles.nonActive}`}>2</span>
      <span className={styles.line} />
      <span className={`${styles.item} ${styles.active}`}>3</span>
    </div>
  );
};
