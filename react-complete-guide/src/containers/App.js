import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
import Wrapper from '../hoc/Wrapper'
import withClass from '../hoc/WithClass'

export const AuthContext = React.createContext(false);

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: '1', name: 'Mike', age: 25 },
        { id: '2', name: 'Matt', age: 27 },
        { id: '3', name: 'James', age: 28 }
      ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    }
  }


  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App Person.js] Inside shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[App Person.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[App Person.js] Inside componentDidUpdate');
  }



  deletePersonHandler = (index) => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({ persons });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
  }

  loginHandler = () => {
    console.log('logging in')
    this.setState({ authenticated: true });
  }

  render() {
    console.log('[App.js] Inside render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons clicked={this.deletePersonHandler} changed={this.nameChangeHandler} persons={this.state.persons} />
      );
    }
    return (
      <Wrapper>
        <button onClick={() => { this.setState({ showPersons: true }) }} >Show Persons</button>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          click={this.togglePersonsHandler}
          title={this.props.title}
          login={this.loginHandler} />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Wrapper>
    )
  }
}

export default withClass(App, classes.App);
