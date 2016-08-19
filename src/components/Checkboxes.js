import React, { Component } from 'react';
var CheckBoxList = require('react-checkbox-list');
import '../App.css';

export default class Checkboxes extends Component {
	constructor(props) {
		super(props);

		this.handleCheckboxListChange = this.handleCheckboxListChange.bind(this);
	}

	handleCheckboxListChange(values) {
		console.log('in handleCheckboxListChange', values);
		this.setState = {checkboxes: values}
	}

	render() {
		return (
			<div className="Checkboxes">
				<CheckBoxList ref="chkboxList" defaultData={this.props.crimeCodes} onChange={this.props.handleCheck} />
			</div>
		)
	}
}


