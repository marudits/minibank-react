const defaultState = [];

function loans(state = defaultState, action){
	let newState = Object.assign({}, state),
		data = action.data;
	
	switch(action.type){
		case 'GET_LIST_LOAN':
			newState = data
			return newState;
		default:
			return newState
	}
}

export default loans;