import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    // super invokes the constructor of the Component Class we are extending.
    super();
    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'asc1'
        },
        {
          name: 'Dracula',
          id: 'asr2'
        },
        {
          name: 'Zombie',
          id: 'as1w'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
      {
        this.state.monsters.map(el => {
          return <h1 key={el.id}> { el.name} </h1>
        })
      }
    </div>
    )
  }
}

export default App;
