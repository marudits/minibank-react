const defaultState = [];

function review(state = defaultState, action){
	let newState = Object.assign({}, state),
		data = action.data;

	switch(action.type){
		case 'GET_LIST_REVIEW':
			newState = data
			return newState;
		default:
			return newState
	}
}

export default review;