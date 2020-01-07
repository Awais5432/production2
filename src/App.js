import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About';
import Shop from './Shop';
import LeftMenu from './nav';
import {BrowserRouter as Router, Link, Switch ,Route} from 'react-router-dom';
import Vision from './About-us/Vision';
import Company from './About-us/Company';
import Team from './About-us/Team';
import Portfolio from './About-us/Portfolio';

function App() {
  return (
    <Router>
    <div className="App">
      <LeftMenu />
      <switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About} />
      <Route path='/shop' component={Shop} />
      <Route path='/vision' component={Vision} />
      <Route path='/company' component={Company} />
      <Route path='/team' component={Team} />
      <Route path='/portfolio' component={Portfolio} />

      </switch>
    </div>
    </Router>
  );
}

const Home = ()=>(
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;


