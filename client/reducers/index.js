import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import loans from './loans'

const rootReducer = combineReducers({
	posts,
	comments,
	loans,
	routing: routerReducer
});

export default rootReducer;