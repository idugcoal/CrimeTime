import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Checkbox from 'material-ui/Checkbox';
import '../App.css';
// import checkboxesArray from '../../codes.js';
const crimeCodesJSON = require('../../codes.json');

export default class Checkboxes extends Component {

	constructor(props) {
		super(props)
		// console.log('Checkboxes constructor', crimeCodesJSON)
		this.state = {
			crimeCodes: crimeCodesJSON.crimeList
			// crimeCodes: crimeCodesJSON
		}

	}

	render() {
		console.log('crimeCodesJSON', crimeCodesJSON)

		return (
			<div className="Checkboxes">
				{this.state.crimeCodes.map((crime) => {
					return (
						
						<Checkbox 
							key={crime.crime}
							className="Checkbox"
							label={crime.crime} 
							onCheck={this.props.onCheck}
						/>
					)
				})}
			</div> 
		)
	}
		

}

// function mapStateToProps(state) {
//   // Whatever gets returned from here will show up as props inside of Crimes class

//   return {
//     checkboxes: [1, 2, 3]
//   }

// }