import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import SearchBox from './components/search-box/searchbox.component';
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

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1> Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
          value={this.state.searchField}
        />
        <CardList monsters={filteredMonsters} />      
    </div>
    )
  }
}

export default App;
