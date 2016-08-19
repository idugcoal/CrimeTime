import React, { Component } from 'react';
import Chart from 'react-bar-chart';
const crimeCodesJSON = require('../../appendedCodes4.json');


export default class BarChart extends Component {
	
	constructor(props) {
		super(props);
		
 		this.transformData = this.transformData.bind(this);
	}

	transformData(time, checkboxes, crimeCodes, crimes) {
		let data = [];
		
		if(crimes === undefined) return '';
    
    // create a valid crimes array
    let validCrimes = [
     // "648", 
     "220",
     "624", 
     "480", 
     "761", 
     "310", 
     "320", 
     "330", 
     "110", 
     "753", 
     "886", 
     "940", 
     "910", 
     "956", 
     "762", 
     "806", 
     "352", 
     "452", 
     "438", 
     "437", 
     "210", 
     "354", 
     "350", 
     "441", 
     "440", 
     "997", 
     "888", 
     "661", 
     "520", 
     "510"
    ]
    
    // create a crimesByHour object where key = hour (0 to 23) and value = an array of crime objects
		let crimesByHour = {
			"0" : [],
			"1" : [],
			"2" : [],
			"3" : [],
			"4" : [],
			"5" : [],
			"6" : [],
			"7" : [],
			"8" : [],
			"9" : [],
			"10" : [],
			"11" : [],
			"12" : [],
			"13" : [],
			"14" : [],
			"15" : [],
			"16" : [],
			"17" : [],
			"18" : [],
			"19" : [],
			"20" : [],
			"21" : [],
			"22" : [],
			"23" : []
		}

  	for(var key in crimes) {
  		let currTime = Math.floor(crimes[key].time_occ / 100)
  		crimesByHour[currTime].push(crimes[key]);
  	}

    let crimeCounts = {};
  	crimesByHour[time].map((crime) => {
  		if(crimeCounts.hasOwnProperty(crime.crm_cd)) {
  			crimeCounts[crime.crm_cd]++
  		} else {
  			crimeCounts[crime.crm_cd] = 1
  		}
  	});

  	// create an array of objects where obj['xValue'] is the x-axis value and obj['yValue'] is the y-axis value
  	for(key in crimeCounts) {
  		let obj = {};
  		obj['text'] = key;//crimeCodesJSON[key];
  		obj['value'] = crimeCounts[key]
  		// obj['hello'] = test;
			data.push(obj)
  	}

  	console.log('data before filter', data.length, data)
  	// return valid crimes that have been checked
  	data = data.filter((crime) => {
  		// console.log(crime['xValue']);
  		// if (checkboxes.indexOf(crime['xValue']) != -1) console.log('CHECKED');
  		// if (validCrimes.indexOf(crime['xValue'] != -1)) console.log('VALID');
  		// console.log("crime['xValue']", crime['xValue'])
  		return (checkboxes.indexOf(crime['text']) != -1 && validCrimes.indexOf(crime['text'] != -1))
  	})

  	console.log('data after filter', data.length, data)

		return(
			<Chart 
				// type={"bar"}
				width={1200}
				height={500}
				margin={{top: 40, right: 40, bottom: 150, left: 40}}
				showTooltips={true}
				data={data.sort((a, b) => ((a.xValue > b.xValue) ? 1 : ((b.xValue > a.xValue) ? -1 : 0)))}

			/>
		)
	}

	render() {
		
		return <div> {this.transformData(this.props.time, this.props.checkboxes, this.props.crimeCodes, this.props.crimes)} </div>
	}
}