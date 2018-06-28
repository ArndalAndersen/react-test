import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component {
  render() {
    const name = this.props.name;

    return (
      <p>
        Hello {name}!
      </p>
    )
  }
}


class App extends Component {
  writeMsg() {
    const msg = 'Hello World!';
    return msg;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.writeMsg()}</h1>
        </header>
        <Hello name="Camilla"/>
        <Hello name="Arndal"/>
        <Hello name="Richard"/>
      </div>
    );
  }
}

export default App;
