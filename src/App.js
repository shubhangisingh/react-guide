import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>
       Hi, I am a react app
       </h1>
       <p>This is working!!!</p>
       <Person name= 'MAX' age= '29' />
       <Person  name= 'Manu' age= '27' >My Hobies: Fighting</Person> 
       <Person name= 'shubhi' age= '32' />
      </div>
    );
   // return React.createElement('div', null,React.createElement('h1',{className: 'App'}, 'Hi, I\'m a React App!!!!') )
  }
}

export default App;
