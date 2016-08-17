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






























// import React, { Component } from 'react';
// import Checkbox from 'material-ui/Checkbox';
// import '../App.css';

// export default class Checkboxes extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.handleCheck = this.handleCheck.bind(this);
// 	}

// 	handleCheck(crime) {
// 		console.log('in handleCheck', crime);
// 	}

// 	render() {
// 		return (
// 			<div className="Checkboxes">
// 				{this.props.crimeCodes.map((crime) => {
// 					return (
// 						<Checkbox 
// 							className="Checkbox"
// 							key={crime.code}
// 							iconStyle={{width: '30%', left: '25px', fill: '#68E861'}}
// 							label={crime.crime} 
// 							// onCheck={this.handleCheck(crime)}
// 							onCheck={this.handleCheck}
// 							// onCheck={this.props.handleCheck(this)}
// 							checked={crime.checked}
							
// 						/>
// 					)
// 				})}
// 			</div>
// 		)
// 	}
// }
