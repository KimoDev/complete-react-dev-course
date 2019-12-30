import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    // super invokes the constructor of the Component Class we are extending.
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}, () => console.log(this.state.monsters) ))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <input 
        type='search' 
        placeholder='search monsters' 
        onChange={e => {
          this.setState({ searchField: e.target.value }, () => {
            console.log(this.state); // callback function to see current state. due to set state being asynchronous
            });
          }} 
        />
        <CardList monsters={filteredMonsters} />      
    </div>
    )
  }
}

export default App;
