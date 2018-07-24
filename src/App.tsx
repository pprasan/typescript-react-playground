import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import Button from '@material-ui/core/Button';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To-Do List</h1>
        </header>
        <p className="App-intro">
          <Button variant="raised" color="primary">
            Hello World
          </Button>
        </p>
      </div>
    );
  }
}

export default App;
