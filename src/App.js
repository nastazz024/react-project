import React, { Component } from 'react';
import './App.css';
import Egg from './components/egg/Egg';
import Milk from './components/milk/Milk';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import dataStore from './dataStore';
import { observer } from 'mobx-react';

@observer
export default class App extends Component {
  render() {
    console.log(dataStore.eggStopped)
    return (
      <Router>
        <div>
          <div className="btns" align="center">
            <Link to="/egg"><button className="btn btn-outline-success egg" type="button">Яйца</button></Link>
            <Link to="/milk"><button className={dataStore.eggStopped ? 'pulse btn btn-outline-success milk' : 'btn btn-outline-success milk'}  type="button">Молоко</button></Link>
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
