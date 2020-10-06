import React from 'react';
import logo from './logo.svg';
import './App.css';

import { init } from '@rematch/core'
import { Provider } from 'react-redux'

import * as models from './models'

import DummyComponent from './DummyComponent'

const store = init({
    models,
})

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <DummyComponent />  
    </div>
    </Provider>
  );
}

export default App;
