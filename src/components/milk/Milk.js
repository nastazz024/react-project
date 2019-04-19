import React, { Component } from 'react';
import './Milk.css';
import Egg from '../egg/Egg';
import { observable, computed, autorun } from 'mobx';
import { observer } from 'mobx-react';
import dataStore from '../../dataStore';

@observer
export default class Milk extends Component {
  intervalForMilk;

  constructor() {
    super();
  }

  componentDidMount() {
    if (dataStore.eggStopped) {
      this.startMilk();
    }
  }

  startMilk = () => {
    let elMilk = document.getElementById('imageMilk');
    elMilk.style.opacity = dataStore.opacity;
    dataStore.opacityChanging = false;
    this.intervalForMilk = setInterval(() => {
      elMilk.style.opacity = dataStore.opacity;
      if (dataStore.opacity > 0) {
        dataStore.changeOpacity();
      }
      if (dataStore.opacity === 0.009999999999999247) {
        alert("GAME OVER")
        dataStore.opacity = 1;
      }
    }, 50)
  }

  stopMilk = () => {
    dataStore.isEggStopped = false;
    clearInterval(this.intervalForMilk);
  }

  render() {
    const eggStopped = dataStore.eggStopped;
    return (
      <div>
        <div align="center">
          <img onClick={this.stopMilk} id="imageMilk" src="https://besplatka.ua/aws/10/37/67/82/app/flyaga-alyuminievaya-40l-photo-d600.png" />

        </div>
      </div>
    );
  }

}

