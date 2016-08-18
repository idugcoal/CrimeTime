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
		console.log('checkboxes', checkboxes);
		// console.log('crimeCodes', crimeCodes);
		// console.log('crimes', crimes);

		if(crimes === undefined) return '';
    
		let data = [];
    let crimeCounts = {};
    
	  // filter crimes that occur in selected timeframe
    let crimesByHour = crimes.filter(crime => (Math.floor(crime.time_occ / 100) === time));
  
    // console.log('crimesByHour', crimesByHour);

    // add zero values for crime codes not found in time-filtered crimeCounts
    for(var code in crimeCodes) {
    	// if crimeCounts doesn't have a value for the crime, give it zero
    	let obj = {};
    	if(!crimesByHour.hasOwnProperty(crimeCodes[code].value)) {
    		obj['xValue'] = crimeCodes[code].label
    		obj['yValue'] = 0
    		// console.log('no')
    	} else {
    		obj['xValue'] = crimeCodes[code].label
    		let count = 0;
    		for(var key in crimesByHour) {
    			if(crimesByHour[key].crm_cd == crimeCodes[code].value) {
    				count++
    			}
    		}
    		obj['yValue'] = count;
    		// console.log('yes')
    		if(checkboxes.indexOf(crimeCodes[code].value) !== -1) {
	    		data.push(obj);
	    	} else {
	    		data.splice(data.indexOf(crimeCodes[code].value))
	    	}
    	}
    }

    	



    // add true values for all crime codes 


    // console.log('crimeCounts', crimeCounts)
    console.log('data', data);

  //   // filter crimes in the selected timeframe that have been selected
  //   let crimesByCheckbox = crimesByHour.filter((crime) => checkboxes.indexOf(crime.crm_cd) !== -1);
  //   // create counts object for checked crimes in the selected timeframe
  //   crimesByCheckbox.forEach((crime) => {
  //     if(crimeCounts.hasOwnProperty(crime.crm_cd)) {
  //       crimeCounts[crime.crm_cd]++;
  //     } else {
  //       crimeCounts[crime.crm_cd] = 1;
  //     }
  //   });

  //   // console.log('crimeCounts', crimeCounts);

  //   // create data object
  //   for(var key in crimeCounts) {
  //   	let obj = {};
  //   	obj['xValue'] = crimeCodesJSON[key];
  //   	obj['yValue'] = crimeCounts[key];
  //   	data.push(obj);
  //   }

		// // console.log('data', data);
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