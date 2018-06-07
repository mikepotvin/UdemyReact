import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
class App extends Component {

  state = {
    username: 'Mike'
  }

  inputChanged = (event) =>{
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput username={this.state.username} change={this.inputChanged}/>
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
