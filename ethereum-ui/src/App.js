import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { myContractA } from "./EthereumSetup";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { value1: "0", value2: "0", calculated:"0"};
    this.handleCalculation = this.handleCalculation.bind(this);
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  async handleCalculation() {
    let sum = await myContractA.methods.sumNumbers().call();
    this.setState({calculated: sum});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className ="App-title"> Welcome to Ethereum-Powered Calculator</h1>
        </header>

        <h1>Your calculated value is: {this.state.calculated} </h1>

        <form>
        <p>Enter the first number:</p>
        <input type='text' name='value1' onChange={this.myChangeHandler}/>
        <p>Enter the second number:</p>
        <input type='text' name='value2' onChange={this.myChangeHandler}/>
        </form>

        <button onClick={this.handleCalculation}>Click here to calculate
        </button>
      </div>
    );
  }
}

export default App;
