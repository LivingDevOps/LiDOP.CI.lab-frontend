import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    name: '',
    responseFromBackend: '',
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/proxy/hello?name=' + this.state.name, {
      method: 'GET',
    });
    const body = await response.text();

    this.setState({ responseFromBackend: body });
  };



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Type your name and say Hello to your backend:</strong>
          </p>
          <input
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <button type="submit">Say Hello</button>
        </form>
        <p>{this.state.responseFromBackend}</p>
        </header>
      </div>
    );
  }
}

export default App;
