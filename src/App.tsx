/* eslint-disable no-console */
import React from 'react';
import { Form } from './components/Form';
import { Steps } from './components/Steps';

const App = () => {
  return (
    <div className="app">
      <h1 className="app__title">Your first project</h1>
      <Steps />
      <Form />
    </div>
  );
};

export default App;
