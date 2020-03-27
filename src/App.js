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
    ]
  }
  render() {
    return (
     <div className="App">
       <h1>
       Hi, I am a react app
       </h1>
       <p>This is working!!!</p>
       <button>Switch Name </button>
       <Person name={this.state.persons[0].name} age= {this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age= {this.state.persons[1].age} >My Hobies: Fighting</Person> 
        <Person name={this.state.persons[2].name} age= {this.state.persons[2].age} />
      </div>
    );
   // return React.createElement('div', null,React.createElement('h1',{className: 'App'}, 'Hi, I\'m a React App!!!!') )
  }
}

export default App;

