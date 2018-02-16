import React, { Component } from 'react';
import './App.css';
import Input from './UserInput/Input';
import Output from './UserOutput/Output'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Input/>
       <Output username="Rodichek"/> 
       <Output/> 
       <Output/> 
      </div>
    );
  }
}

export default App;
