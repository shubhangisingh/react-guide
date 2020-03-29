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
    title: "Hi, I am a react app !!!!!!!!!!" 
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
  }
    )
  }
  render() {
    return (
     <div className="App">
       <h1>{this.state.title}</h1>
       <p>This is working!!!</p>
       <button onClick= { () => this.switchNameHandler('pradeep')}>Switch Name </button>
       <Person 
         name={this.state.persons[0].name} age= {this.state.persons[0].age} />
        <Person 
         name={this.state.persons[1].name} age= {this.state.persons[1].age} click={this.switchNameHandler.bind(this,'Max!!!')}>My Hobies: Fighting</Person> 
        <Person 
         name={this.state.persons[2].name} age= {this.state.persons[2].age} />
      </div>
    );
   // return React.createElement('div', null,React.createElement('h1',{className: 'App'}, 'Hi, I\'m a React App!!!!') )
  }
}

export default App;

