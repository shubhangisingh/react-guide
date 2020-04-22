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

  switchNameHandler = (newName) => {
    //console.log('button clicked')
    //this.state.persons[0].name= 'shubhangi'
    this.setState({
       persons: [
      {name: newName ,age: '19'},
      {name: 'Manushi', age: '9'},
      {name: 'Shubhangi', age: '13'}
      ]
  })
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
                {this.state.persons.map(person => {
                  return <Person 
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

