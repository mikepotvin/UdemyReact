import React, { Component } from 'react'
import classes from './Person.css'
import withClass from '../../../hoc/WithClass'
import Wrapper from '../../../hoc/Wrapper'
import PropTypes from 'prop-types'
import { AuthContext } from "../../../containers/App";
class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount');
   
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Person.js] Inside componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Person.js] Inside shouldComponentUpdate', nextProps, nextState);
    return nextProps.persons !== this.props.persons
      && nextProps.click !== this.props.click
      && nextProps.changed !== this.props.changed;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Person.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Person.js] Inside componentDidUpdate');
  }

  focus () {
    this.inputElement.current.focus();
  }

  render() {
    console.log('[Person.js] Inside render');
    return (
      <Wrapper>
        <AuthContext.Consumer>
          {auth => auth ? <p>I'm authenticated!</p> : null}
        </AuthContext.Consumer>
        {this.props.authenticated ? <p> Authenticated </p> : null }
        <p onClick={this.props.click}> I'm {this.props.name} and I'm {this.props.age} years old </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </Wrapper>
    );
  }

}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person); 