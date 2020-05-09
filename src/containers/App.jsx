import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';

import IncompleteTasks from './IncompleteTasks';
import CompleteTasks from './CompleteTasks';
import AddNewItem from './AddNewItem';

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">

        <AddNewItem /> 

        <IncompleteTasks />

        <CompleteTasks />
      </div>
    </Provider>
  )
};

export default App;
