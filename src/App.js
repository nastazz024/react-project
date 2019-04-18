import React, { Component } from 'react';
import './App.css';
import Egg from './components/egg/Egg';
import Milk from './components/milk/Milk';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import dataStore from './dataStore';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="btns" align="center">
            <Link to="/egg"><button className="btn btn-outline-success egg" type="button">Яйца</button></Link>
            <Link to="/milk"><button className="btn btn-outline-success milk" type="button">Молоко</button></Link>
          </div>

          <div className="imgs">
            <Route exact path="/egg" component={Egg} />
            <Route path="/milk" component={Milk} />
          </div>
        </div>
      </Router>

    );
  }
}
