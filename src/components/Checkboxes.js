import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import '../App.css';

export default class Checkboxes extends Component {
	constructor(props) {
		super(props);

		this.handleCheck = this.handleCheck.bind(this);
	}

	handleCheck(crimeCode) {
		// this.props.onCheck(crime)
		console.log('handled', crimeCode)
	}

	render() {
		return (
			<div className="Checkboxes">
				{this.props.crimeCodes.map((crime) => {
					return (
						
						<Checkbox 
							className="Checkbox"
							key={crime.code}
							label={crime.crime} 
							checked={crime.checked}
							// onCheck={this.props.onCheck}
							onCheck={this.handleCheck}
							iconStyle={{width: '30%', left: '25px', fill: '#68E861'}}
						/>
					)
				})}
			</div> 
		)
	}
}
