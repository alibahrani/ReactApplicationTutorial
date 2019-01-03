import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';


class App extends Component {
  state = {
    persons: [
      { id: 'asd',name: "Ali", age: 30},
      { id: 'dsa',name: "Hussain", age: 32},
      { id: 'zcv',name: "Jafar", age: 28}
    ],
    otherState: 'Some other state', 
    userInput:  "Place Holder",
    showPersons: false
  }

  switchNameHandler = () => {
    //console.log("Was Clicked")
    // this.state.persons[0].name = "Ali Al-Bahrani"
    this.setState({persons:[
      { name: "Ali", age: 30},
      { name: "Hussain", age: 32},
      { name: "Jafar", age: 27}
    ] })
  };

  userInputHandler = (event) => {
    this.setState({
      userInput: event.target.value
    })  
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id; 
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState ({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons; 
    this.setState({showPersons: !doesShow});

  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({persons: persons});

  }
  render() {
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue', 
      padding: '8px',
      cursor: 'pointer',
      
    }
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age = {person.age} 
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}
             />
          })}
        </div>
      
      );
    }

    let classes = [];
    if(this.state.persons.length <=2) {
      classes.push('red');
    }
    if(this.state.persons.length <=1) {
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1>Hi, I'm a with something new app</h1>
        <p className={classes.join(' ')}>This is Really working</p>
        <button style={style}
         onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        
      </div>
    );
  }
}

export default App;
