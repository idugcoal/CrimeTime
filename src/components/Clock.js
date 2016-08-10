import React, { Component } from 'react';
import '../App.css';

export default class Clock extends Component {
  
  convertTime(hour) {
    var meridian = hour < 12 ? 'am' : 'pm';
    
    if (hour === 0) {
      hour = 12;
    } else if (hour > 12) {
      hour -= 12;
    }

    return (
      <div className="Time"> {hour + ':00 ' + meridian} </div>
    )
  }

  render() {
    return (
      <div className="Clock"> {this.convertTime(this.props.sliderValue)}</div>
    )
  }
}