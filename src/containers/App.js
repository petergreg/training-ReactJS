import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';


class App extends Component {

  constructor(props){
    super(props);
    console.log('[Apps.js] constructor')
  }

  state = {
    persons: [
      { id: 'sef', name: 'Max', age: 28 },
      { id: 'dza', name: 'Greg', age: 27 },
      { id: 'aaa', name: 'Steph', age: 26 }
    ],
    showCockpit: true,
    showPersons: false,
    changedCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state){
    console.log('[Apps.js] getDerivedStateFromProps')
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  souldComponentUpdate(nextProps, nextState){
    console.log('[App.js] souldComponentUpdate');
    return true;
}

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
}

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

    this.setState((prevState, props) => {
        return {
          persons: persons, 
          changedCounter: prevState.changedCounter +1
        }
    });
  };

  deletePersonHandler = (personIndex) => {
    /*Using spread operator to create a NEW LIST from the originale data, so we avoid 
      modifying it. Better update states in an IMMUTABLE fashion :
      without mutating original s tate */
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  render() {
    console.log('[App.js] render')
    let persons = null;

    if (this.state.showPersons) {
      persons = 
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}
          />
    }

    return (
      <Aux>
        <button
          onClick={() => {this.setState({ showCockpit: false});
        }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}>
        {this.state.showCockpit ? (
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons} 
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />
        ) : null} 
        {persons}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App !!!'));
  }






  
}

export default withClass(App, classes.App);  