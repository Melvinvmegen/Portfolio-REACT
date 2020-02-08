import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route } from 'react-router-dom';
import Root from './Containers/Root';

class App extends Component {

  render() {
    console.log("This is the process.env", process.env.PUBLIC_URL)
    return (
      <div className="App">
        <Route path="/" component={Root} />
      </div>
    );
  }
}

export default App;
