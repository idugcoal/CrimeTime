import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './components/Header';
import Clock from './components/Clock';
import Slider from './components/Slider';
import Checkboxes from './components/Checkboxes';
import BarChart from './components/BarChart';
import './App.css';
const crimeCodesJSON = require('../appendedCodes2.json');
// const crimeCodesJSON = require('../appendedCodes3.json');
const axios = require('axios');

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 11,
      crimeCodes: crimeCodesJSON.crimeList,
      checkboxes: ["648", "220", "624", "480", "761", "310", "320", "330", "110", "753", "886", "940", "910", "956", "762", "806", "352", "452", "438", "437", "210", "354", "350", "441", "440", "997", "888", "661", "520", "510"]
    };

    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
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

  handleCheck(values) {
    console.log('in handleCheck')
    this.setState({
      checkboxes: values
    })
  }
  
  render() {
    console.log('hello');
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
    // console.log('hello')
    return (
        <MuiThemeProvider muiTheme={muiTheme}>

          <div className="App">
            <Header />
          
            <Clock sliderValue={this.state.sliderValue} />
            <Slider 
              onSliderChange={this.handleSliderChange} 
              sliderValue={this.state.sliderValue}
            />
            <BarChart 
              time={this.state.sliderValue}
              checkboxes={this.state.checkboxes}
              crimeCodes={this.state.crimeCodes}
              crimes={this.state.crimes}
            />
            <Checkboxes 
              crimeCodes={this.state.crimeCodes}
              handleCheck={this.handleCheck}
            />
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
