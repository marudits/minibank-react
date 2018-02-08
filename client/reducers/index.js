import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//reducer
import bank from './bank';
import review from './review';
import property from './property';

const rootReducer = combineReducers({
	bank,
	review,
	property,
	routing: routerReducer
});

export default rootReducer;