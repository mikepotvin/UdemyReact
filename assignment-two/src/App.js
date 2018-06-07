import React, { Component } from 'react';
import './App.css';
import Validation from './Components/Validation/Validation'
import Char from './Components/Char/Char'
class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  onInputChanged = (event) => {
    this.setState({text: event.target.value});
  }

  charClickedHandler = (index) => {
    const textArray = this.state.text.split('');
    textArray.splice(index, 1);
    const text = textArray.join('');
    this.setState({text});
  }

  render() {
    const text = this.state.text;
    const textLength = text.length;


    const chars = text.split('').map((element,index) => {
      console.log(element);
      return <Char text={element} key={index} click={() => this.charClickedHandler(index)} />
    })

    return (
      <div className="App">
       <input value={text} onChange={this.onInputChanged} />
       <p>Text Length: {textLength} </p>
       <Validation textLength={textLength} />
       {chars}
      </div>
    );
  }
}

export default App;
