const defaultState = [];

function property(state = defaultState, action){
	let newState = Object.assign({}, state),
		data = action.data;
		
	switch(action.type){
		case 'PROPERTY_SET_LIST':
			newState.list = data
			return newState;
		default:
			return newState
	}
}

export default property;