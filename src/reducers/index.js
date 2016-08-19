import { combineReducers } from 'redux';
import checkboxReducer from './checkboxReducer';
import sliderReducer from './sliderReducer';

const rootReducer = combineReducers({
  checkboxes: checkboxReducer,
  slider: sliderReducer,
  // crimes: crimesReducer
});

export default rootReducer;
