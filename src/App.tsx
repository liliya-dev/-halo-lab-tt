import React from 'react';
import { Form } from './components/Form/index';
import { Steps } from './components/Steps/index';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your first project</h1>
      <Steps />
      <Form />
    </div>
  );
};

export default App;
