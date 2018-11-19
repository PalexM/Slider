import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 10,
      value : 0
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <div >
              <p>Range is {this.state.value}:</p>
              <input onChange= { this.handleChange } className="input-range" type="range" min="1" max="100" value={ this.state.value }/>
            </div>
        </header>
      </div>
    );
  }
}

export default App;
