import {
	UPDATE_SLIDER
} from '../actions/types';

export default function(state = [], action) {
	switch(action.type) {
		case UPDATE_SLIDER: 
			console.log(action)
			return [...state, action.payload.data];
			break;
	}

	return state;
}