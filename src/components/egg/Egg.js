import React, { Component } from 'react';
import './Egg.css';
import { observable } from 'mobx';

export default class Egg extends Component {

  constructor() {
    super();
    this.state = {
      position: 0
    }
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
          this.setState({
            position: this.state.position + 15
          });
          this.checkIfPositionAchieveMax();
          break;
        }
        case this.Directions.left: {
          this.setState({
            position: this.state.position - 15
          });
          this.checkIfPositionAchieveMin();
          break;
        }
      }
      this.positionChanged = this.position;
    }, 25)
  }

  checkIfPositionAchieveMax = () => {
    if (Math.abs(this.max - this.state.position) < 5) {
      this.direction = this.Directions.left;
    }
  }

  checkIfPositionAchieveMin = () => {
    if (Math.abs(this.state.position) < 5) {
      this.direction = this.Directions.right;
    }
  }

  getIndex = () => {
    return this.state.position + 'px';
  }

  stopEgg = () => {
    //this.startMilk();
    clearInterval(this.intervalForEgg);
  }

}