import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
    {name: 'MAX' ,age: '29'},
    {name: 'Manu', age: '19'},
    {name: 'Shubhi', age: '23'}
    ],
    title: "Hi, I am a react app !!!!!!!!!!" ,
    showPersons: false
  }



  nameChangedHandler =(event) => {

     this.setState({
       persons: [
      {name: 'Max' ,age: '19'},
      {name: 'Manushi', age: '9'},
      {name: event.target.value, age: '13'}
      ]
  })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow 
    })
  }

  deletePersonHandler = (personIndex) => {
    //const persons= this.state.persons.slice(); 
     // create a copy array with elements of old array
    const persons =[...this.state.persons];
    // spread operator(...) -  ES method  to create a copy array with elements of old array
    const persons =[...this.state.persons];
    persons.splice(personIndex,1)
    this.setState({
      persons: persons
    })
  }
  render() {
    const mystyle= {
     backgroundColor: 'white',
     font: 'inherit',
     border: '1x solid blue',
     padding: '8px',
     cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <div >
                {this.state.persons.map((person, index) => {
                  return <Person 
                  click= {() => this.deletePersonHandler(index)}
                  name= {person.name}
                  age= {person.age}/>
                })}
              
          </div>  
      )
    }

    return (
     <div className="App">
       <h1>{this.state.title}</h1>
       <p>This is working!!!</p>
       <button 
        style= {mystyle}
        onClick= {this.togglePersonsHandler}>Toggle Person </button>
        {persons}
      </div>
    );
   // return React.createElement('div', null,React.createElement('h1',{className: 'App'}, 'Hi, I\'m a React App!!!!') )
  }
}

export default App;

