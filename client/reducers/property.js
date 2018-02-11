const defaultState = [];

function property(state = defaultState, action){
	let newState = Object.assign({}, state),
		data = action.data;
		
	switch(action.type){
		case 'PROPERTY_SET_LIST':
			newState.list = data
			return newState;
		case 'PROPERTY_SET_STATE':
			newState.state = data;
			if(data === 'ERROR'){
				newState.message = action.message;
			} else {
				newState.message = null;
			}
			return newState;
		default:
			return newState
	}
}

export default property;