import React, { Component } from 'react';
import './App.css';
import Input from './UserInput/Input';
import Output from './UserOutput/Output'

class App extends Component {

 state = {user : 'Gennadiy'}

 stateHandler = (event) => { 
  this.setState = ({user = event.target.value});
   console.log(this.state.user);
 }

  render() {
    return (
      <div className="App">
      <Input change={this.stateHandler}/>
       <Output user={this.state.user} /> 
       <Output user={this.state.user}/> 
       <Output/> 
      </div>
    );
  }
}

export default App;
