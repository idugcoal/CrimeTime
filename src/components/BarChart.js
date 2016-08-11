import React, { Component } from 'react';
import Chart from "d3act/lib/components/Chart";


export default class BarChart extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
            data: [
                { xValue: "React", yValue: 2 },
                { xValue: "Relay", yValue: 12 },
                { xValue: "GraphQL", yValue: 5 },
                { xValue: "Radium", yValue: 7 },
                { xValue: "Babel", yValue: 5 },
            ]
        };
	}

	render() {
		return(
			<Chart 
				type={"bar"}
				width={1200}
				height={500}
				margin={{top: 40, right: 40, bottom: 40, left: 40}}
				showTooltips={true}
				data={this.state.data}

			/>
		)
	}
}