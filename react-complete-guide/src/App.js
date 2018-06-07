import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Mike', age: 25 },
      { id: '2', name: 'Matt', age: 27 },
      { id: '3', name: 'James', age: 28 }
    ],
    showPersons: false
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
    this.setState({ showPersons: !this.state.showPersons })
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
    // }

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangeHandler(event, person.id)}
              key={person.id} />
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClassesArray = [];
    if (this.state.persons.length <= 2) {
      assignedClassesArray.push( classes.red );
    }
    if (this.state.persons.length <= 1) {
      assignedClassesArray.push( classes.bold );
    }

    const assignedClasses = assignedClassesArray.join(' ');

    return (
        <div className={classes.App}>
          <h1> Gogo! </h1>
          <p className={assignedClasses}> this is working! </p>
          <button className={btnClass} onClick={this.togglePersonsHandler}> Toggle Persons </button>
          {persons}
        </div>
    )
  }
}

export default App;
