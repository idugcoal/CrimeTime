import React, { Component } from 'react';
import Header from './components/Header';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Slider from './components/Slider';
import Clock from './components/Clock';
import Checkboxes from './components/Checkboxes';
const axios = require('axios');

import './App.css';

injectTapEventPlugin();



class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    sliderValue: 11
  }

  this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  componentDidMount() {
    const crimeApiUrl = "https://data.lacity.org/resource/y9pe-qdrd.json?$where=date_occ%20between%20%272015-10-01T12:00:00%27%20and%20%272016-01-01T00:00:00%27";
    this.serverRequest = axios.get(crimeApiUrl)
      .then((res) => {
        this.setState({crimes: res.data})
      })
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  handleSliderChange(value) {
      this.setState({
        sliderValue: value
      })
  }

  handleCheck(value) {
    console.log('CHECK', value);
  }
  
  render() {

    const muiTheme = getMuiTheme({
      slider: {
        trackSize: 4,
        trackColor: '#222',
        trackColorSelected: '#222',
        handleSize: 24,
        handleSizeActive: 20,
        handleColorZero: '#68E861',
        handleFillColor: '#68E861',
        selectionColor: '#68E861',
        rippleColor: '#e86168'
      },
    });

    return (
      <MuiThemeProvider muiTheme={muiTheme}>

        <div className="App">
          <Header />
        
          <Clock sliderValue={this.state.sliderValue} />
          <Slider 
            onSliderChange={this.handleSliderChange} 
            sliderValue={this.state.sliderValue}
          />
          <Checkboxes onCheck={this.handleCheck}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
