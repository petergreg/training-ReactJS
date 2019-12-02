import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name : 'Max', age: 28 },
      { name : 'Greg', age: 27 },
      { name : 'Steph', age: 26 }
  ],
  otherState: 'Some other state not used here'
});

console.log(personsState);

const switchNameHandler = () => {
  setPersonsState({persons: [
    { name : 'Maximilian', age: 28 },
    { name : 'Greg', age: 27 },
    { name : 'Steph', age: 26 }
    ]
  });
};
 
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really Working</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App !!!'));
  }

export default app;



// state = {
//   persons: [
//     { name : 'Max', age: 28 },
//     { name : 'Greg', age: 27 },
//     { name : 'Steph', age: 26 }
//   ],
//   otherState: 'Some other state'
//  }

//  switchNameHandler = () => {
//   //  console.log('Was clicked');
//   this.setState({persons: [
//     { name : 'Maximilian', age: 28 },
//     { name : 'Greg', age: 27 },
//     { name : 'Steph', age: 26 }
//   ]});
//  }