import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import '../App.css';

export default class SliderUI extends Component {
  
  constructor(props) {
    super(props);
    this.handleSlider = this.handleSlider.bind(this);
  }

  handleSlider(event, value) {
    this.props.onSliderChange(value);
  }

  render() {
    return (
      <div className="Slider">
        <Slider 
          min={0}
          max={23}
          step={1}
          defaultValue={this.props.sliderValue}
          value={this.props.sliderValue}
          onChange={this.handleSlider}
        />
      </div>
    );
  }
}
