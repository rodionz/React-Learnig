import React, { Component } from 'react';
import './App.css';
import Input from './UserInput/Input';
import Output from './UserOutput/Output'

class App extends Component {

 state =  {
   userName : 'Gennadiy'}

 stateHandler = (event) => { 
  this.setState({userName : event.target.value});
 }

  render() {
    return (
      <div className="App">
      <Input change={this.stateHandler}
       currentName={this.state.userName} />
       <Output userName={this.state.userName} /> 
       <Output userName={this.state.userName}/> 
       <Output/> 
      </div>
    );
  }
}

export default App;
