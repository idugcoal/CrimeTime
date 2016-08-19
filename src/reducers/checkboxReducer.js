import {
	UPDATE_CHECKBOXES
} from '../actions/types';

export default function(state = [], action) {
	switch(action.type) {
		case UPDATE_CHECKBOXES: 
			console.log(action)
			return [...state, action.payload.data];
			break;
	}

	return state;
}