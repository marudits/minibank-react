const defaultState = [];

function property(state = defaultState, action){
	let newState = Object.assign({}, state),
		data = action.data;
		
	switch(action.type){
		case 'GET_LIST_PROPERTY':
			newState = data
			return newState;
		default:
			return newState
	}
}

export default property;