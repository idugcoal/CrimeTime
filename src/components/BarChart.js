import React, { Component } from 'react';
import Chart from "d3act/lib/components/Chart";
const crimeCodesJSON = require('../../appendedCodes4.json');


export default class BarChart extends Component {
	
	constructor(props) {
		super(props);
		
 		this.transformData = this.transformData.bind(this);
	}

	transformData(time, checkboxes, crimeCodes, crimes) {

		if(crimes === undefined) return '';
    
		let data = [];
    let crimeCounts = {};
    
    console.log('checkboxes', checkboxes)
    let crimesByHour = crimes.filter(crime => (Math.floor(crime.time_occ / 100) === time));
    let crimesByCheckbox = crimesByHour.filter((crime) => checkboxes.indexOf(crime.crm_cd) !== -1);

    crimesByCheckbox.forEach((crime) => {
      if(crimeCounts.hasOwnProperty(crime.crm_cd)) {
        crimeCounts[crime.crm_cd]++;
      } else {
        crimeCounts[crime.crm_cd] = 1;
      }
    });

    // console.log('crimeCounts', crimeCodes)
    // for(var crime in crimeCounts) {
    // 	console.log(crime);
    // }
    console.log('crimeCounts', crimeCounts);
    for(var code in crimeCodes) {
    	console.log(crimeCodes[code], 'code', code)
    	if(!crimeCounts.hasOwnProperty(crimeCodes[code].value)) {
    		let obj = {};
    		obj['xValue'] = crimeCodes[code].value
    		obj['yValue'] = 0
    		data.push(obj);
    	}
    }

// 
    for(var key in crimeCounts) {
    	let obj = {};
    	obj['xValue'] = crimeCodesJSON[key];
    	obj['yValue'] = crimeCounts[key];
    	data.push(obj);
    }

		console.log('data', data);
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