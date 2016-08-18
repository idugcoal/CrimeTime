import React, { Component } from 'react';
import Chart from "d3act/lib/components/Chart";
const crimeCodesJSON = require('../../appendedCodes4.json');


export default class BarChart extends Component {
	
	constructor(props) {
		super(props);
		
 		this.transformData = this.transformData.bind(this);
	}

	transformData(time, checkboxes, crimeCodes, crimes) {

		// console.log('time', time);
		// console.log('checkboxes', checkboxes);
		// console.log('crimeCodes', crimeCodes);
		// console.log('crimes', crimes);

		if(crimes === undefined) return '';
    
		let data = [];
    let crimeCounts = {};
    
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
  		let time = Math.floor(crimes[key].time_occ / 100)
  		crimesByHour[time].push(crimes[key]);
  	}

  	console.log(crimesByHour);

 
		return(
			<Chart 
				type={"bar"}
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