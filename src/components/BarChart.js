import React, { Component } from 'react';
import Chart from "d3act/lib/components/Chart";


export default class BarChart extends Component {
	
	constructor(props) {
		super(props);
		
 		this.transformData = this.transformData.bind(this);
	}

	transformData(time, checkboxes, crimeCodes, crimes) {

		if(crimes === undefined) return '';
    
		let data = [];
    let crimeCounts = {};
    
    let crimesByHour = crimes.filter(crime => (Math.floor(crime.time_occ / 100) === time));
    let crimesByCheckbox = crimesByHour.filter((crime) => checkboxes.indexOf(crime.crm_cd) !== -1);

    crimesByCheckbox.forEach((crime) => {
      if(crimeCounts.hasOwnProperty(crime.crm_cd)) {
        crimeCounts[crime.crm_cd]++;
      } else {
        crimeCounts[crime.crm_cd] = 1;
      }
    });

    for(var key in crimeCounts) {
    	let obj = {};
    	obj["xValue"] = key;
    	obj["yValue"] = crimeCounts[key];
    	data.push(obj);
    }

    // for()
		console.log('data', data);
		return(
			<Chart 
				type={"bar"}
				width={1200}
				height={500}
				margin={{top: 40, right: 40, bottom: 40, left: 40}}
				showTooltips={true}
				data={data}

			/>
		)
	}

	render() {
		// console.log(this.props)
		return <div> {this.transformData(this.props.time, this.props.checkboxes, this.props.crimeCodes, this.props.crimes)} </div>
		// return(
		// 	<Chart 
		// 		type={"bar"}
		// 		width={1200}
		// 		height={500}
		// 		margin={{top: 40, right: 40, bottom: 40, left: 40}}
		// 		showTooltips={true}
		// 		data={this.state.data}

		// 	/>
		// )
	}
}