import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    // super invokes the constructor of the Component Class we are extending.
    super();
    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}, () => console.log(this.state.monsters) ))
  }

  render() {
    return (
      <div className="App">
      {
        this.state.monsters.map(el => <h1 key={el.id}> { el.name} </h1>)
      }
    </div>
    )
  }
}

export default App;
