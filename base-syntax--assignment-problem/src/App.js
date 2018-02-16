import React, { Component } from 'react';
import './App.css';
import Input from './UserInput/Input';
import Output from './UserOutput/Output'

class App extends Component {

 state = {user : 'Gennadiy'}

 stateHandler = (event) => { 
  this.setState = ({user: event.target.value})
 }

  render() {
    return (
      <div className="App">
      <Input change={this.stateHandler} user={this.state.user}/>
       <Output user={this.state.user} /> 
       <Output/> 
       <Output/> 
      </div>
    );
  }
}

export default App;
