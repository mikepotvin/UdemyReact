import React from 'react';
import classes from './Cockpit.css';
import Wrapper from '../../hoc/Wrapper'
const cockpit = (props) => {

    const assignedClassesArray = [];
    let btnClass = classes.Button;
    if (props.showPersons) {
        btnClass = [ classes.Button, classes.Red].join(' ');
    }
  
    if (props.persons.length <= 2) {
      assignedClassesArray.push( classes.red );
    }
    if (props.persons.length <= 1) {
      assignedClassesArray.push( classes.bold );
    }

    const assignedClasses = assignedClassesArray.join(' ');

    return (
        <Wrapper>
            <h1> {props.title} </h1>
            <p className={assignedClasses}> this is working! </p>
            <button className={btnClass} onClick={props.click}> Toggle Persons </button>
            <button onClick={props.login}>Login</button>
        </Wrapper>
    );
}

export default cockpit;