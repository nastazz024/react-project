import React, { Component } from 'react';
import './Milk.css';

export default class Milk extends Component {

  intervalForMilk;
  constructor() {
    super();
    this.state = {
      opacity: 1
    }
  }

  render() {
    return (
      <div align="center">
        <img id="imageMilk" src="https://besplatka.ua/aws/10/37/67/82/app/flyaga-alyuminievaya-40l-photo-d600.png" />

      </div>
    );
  }

  componentDidMount() {
    this.startMilk()
  }

  startMilk() {
    let elMilk = document.getElementById('imageMilk');

    this.intervalForMilk = setInterval(() => {
      elMilk.style.opacity = this.state.opacity;
      if (this.state.opacity > 0) {
        this.setState({
          opacity: this.state.opacity - 0.01
        })
      }
      if (this.state.opacity === 0.009999999999999247) {
        alert("GAME OVER")
      }
    }, 50)
  }

  stopMilk() {
    //this.startEgg();
    clearInterval(this.intervalForMilk);
    this.current = 1;
  }
  
}

