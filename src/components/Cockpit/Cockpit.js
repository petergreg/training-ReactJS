import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {


    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons){
        btnClass = classes.Red;
    }

    if (props.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={props.assignedClasses.join(' ')}>This is really Working</p>
            <button
            className={btnClass.join(' ')}
            onClick={this.togglePersonsHandler}>Toggle persons
            </button>
        </div>
    );

};

export default cockpit;