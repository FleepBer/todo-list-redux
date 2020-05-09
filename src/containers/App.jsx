import React from 'react';
import IncompleteTasks from './IncompleteTasks';
import CompleteTasks from './CompleteTasks';
import AddNewItem from './AddNewItem';

import "./App.css";

const App = () => {
  return (
    <div className="container">

      <AddNewItem /> 

      <IncompleteTasks />

      <CompleteTasks />
    </div>
  );
};

export default App;
