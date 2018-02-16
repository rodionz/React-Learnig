import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Charcomponent from './Charcomponent/Charcomponent'

class App extends Component {

  state = {
    count: 0,
    inputValue: ''
  }
    
  inputchange = (event) => {  
    let arr2 = event.target.value
    this.setState({count: arr2.length})
  }

  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <ol>
          <input onKeyUp={this.inputchange} onChange={evt => this.updateInputValue(evt)} type="text"/>
          <p>{this.state.count}</p>
           <Validation length={this.state.count}/>
           <Charcomponent letter={this.state.inputValue}/>
         
          
          
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
