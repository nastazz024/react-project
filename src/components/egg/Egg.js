import React, { Component } from 'react';
import './Egg.css';
import { observer } from 'mobx';
import dataStore from '../../dataStore';

export default class Egg extends Component {

  constructor() {
    super();
    
  }

  render() {
    return (
      <div >
        <img id="imageEgg" onClick={this.stopEgg} src="http://pngimg.com/uploads/egg/egg_PNG40798.png" />
      </div>
    );
  }

  componentDidMount = () => {
    this.startEgg()
  }

  Directions = {
    left: 'left',
    right: 'right'
  }

  //@observable positionChanged;
  opacityChanged;
  direction = this.Directions.right;
  max = 1710;
  intervalForEgg;

  startEgg = () => {
    let elEgg = document.getElementById('imageEgg');
    this.intervalForEgg = setInterval(() => {
      elEgg.style.left = this.getIndex();
      switch (this.direction) {
        case this.Directions.right: {
          dataStore.changePosition(15);
          
          this.checkIfPositionAchieveMax();
          break;
        }
        case this.Directions.left: {
          dataStore.changePosition(-15);
          this.checkIfPositionAchieveMin();
          break;
        }
      }
      this.positionChanged = this.position;
    }, 25)
  }

  checkIfPositionAchieveMax = () => {
    if (Math.abs(this.max - dataStore.position) < 5) {
      this.direction = this.Directions.left;
    }
  }

  checkIfPositionAchieveMin = () => {
    if (Math.abs(dataStore.position) < 5) {
      this.direction = this.Directions.right;
    }
  }

  getIndex = () => {
    return dataStore.position + 'px';
  }

  stopEgg = () => {
    dataStore.changeEggStopped();
    clearInterval(this.intervalForEgg);
    
  }

}