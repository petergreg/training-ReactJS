import React, { Component } from 'react';
import Person from './Person/Person';
import classes from './App.css';


class App extends Component {
  state = {
    persons: [
      { id: 'sef', name: 'Max', age: 28 },
      { id: 'dza', name: 'Greg', age: 27 },
      { id: 'aaa', name: 'Steph', age: 26 }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return id === p.id;
    });

    /*Using spread operator to create a new object from the originale data, so we avoid 
    modifying it. Better update states in an IMMUTABLE fashion :
    without mutating original state */
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    /*Using spread operator to create a NEW LIST from the originale data, so we avoid 
      modifying it. Better update states in an IMMUTABLE fashion :
      without mutating original state */
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClass = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div> 
      );
      
      btnClass.push(classes.Red);
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really Working</p>
        <button
          className={btnClass.join(' ')}
          onClick={this.togglePersonsHandler}>Toggle persons
        </button>

        {persons}

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App !!!'));
  }
}

export default App;