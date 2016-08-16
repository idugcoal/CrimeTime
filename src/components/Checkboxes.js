import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import '../App.css';

export default class Checkboxes extends Component {
	constructor(props) {
		super(props);

		this.handleCheck = this.handleCheck.bind(this);
	}

	handleCheck(crime) {
		console.log('in handleCheck', crime);
	}

	render() {
		return (
			<div className="Checkboxes">
				{this.props.crimeCodes.map((crime) => {
					return (
						<Checkbox 
							className="Checkbox"
							key={crime.code}
							iconStyle={{width: '30%', left: '25px', fill: '#68E861'}}
							label={crime.crime} 
							// onCheck={this.handleCheck(crime)}
							// onCheck={this.handleCheck(crime.checked)}
							onCheck={this.props.handleCheck}
							checked={crime.checked}
							
						/>
					)
				})}
			</div>
		)
	}
}
