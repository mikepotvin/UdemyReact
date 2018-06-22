import React, { Component } from 'react';
import Person from './Person/Person'
class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
        this.lastPersonRef = React.createRef();
    }


    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount');
        this.lastPersonRef.current.focus();
    }
    render() {
        console.log('[Persons.js] Inside render');
        return this.props.persons.map((person, index) => {
            return <Person
                position={index}
                name={person.name}
                age={person.age}
                ref={this.lastPersonRef}
                authenticated={this.props.isAuthenticated}
                click={() => this.props.click(index)}
                changed={(event) => this.props.changed(event, person.id)}
                key={person.id} />
        })
    }
}

export default Persons