import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route } from 'react-router-dom';
import Root from './Containers/Root';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Root />
      </div>
    );
  }
}

export default App;
