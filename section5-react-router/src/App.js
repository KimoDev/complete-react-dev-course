import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HomePage2 = props => {
  console.log(props);
  return (
    <div>
      <Link to="/hats">Hats</Link>
      <button onClick={() => props.history.push('/hats')}>hi</button>
      <h1>Home page 2</h1>
    </div>
  )
}

const HatsPage = (props) => {
  console.log(props)
  return (
    <div>
      <h1>HatsPage</h1>
    </div>
  )
}

const HatsDetails = () => {
  return (
    <div>
      <h1>HatsDetails</h1>
    </div>
  )
}



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage2}/>
        <Route exact path='/hats' component={HatsPage}/>
        <Route path='/hats/:id' component={HatsDetails}/>
      </Switch>
    </div>
  );
}

export default App;

