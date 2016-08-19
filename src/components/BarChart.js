import React, { Component } from 'react';
import Chart from 'react-bar-chart';
// import Chart from "d3act/lib/components/Chart";

const crimeCodesJSON = require('../../appendedCodes4.json');

export default class BarChart extends Component {
	
	constructor(props) {
		super(props);
		
 		this.transformData = this.transformData.bind(this);
	}

	transformData(time, checkboxes, crimeCodes, crimes) {
		let data = [];
		
		if(crimes === undefined) return '';
    
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

  	for(key in crimeCounts) {
  		let obj = {};
  		obj['text'] = key;
  		obj['value'] = crimeCounts[key]
			data.push(obj)
  	}

  	data = data.filter((crime) => {
      let crimeCode = crime['text'];
      crime['text'] = crimeCodesJSON[crimeCode];
  		return (checkboxes.indexOf(crimeCode) != -1 && validCrimes.indexOf(crimeCode != -1))
  	})

  	console.log('data after filter', data.length, data)

		return(
			<Chart 
        // type={"bar"}
				width={1200}
				height={500}
				margin={{top: 40, right: 40, bottom: 150, left: 40}}
				ylabel={"Number of incidents"}
				data={data.sort((a, b) => ((a.text > b.text) ? 1 : ((b.text > a.text) ? -1 : 0)))}
			/>
		)
	}

	render() {
		
		return <div> {this.transformData(this.props.time, this.props.checkboxes, this.props.crimeCodes, this.props.crimes)} </div>
	}
}