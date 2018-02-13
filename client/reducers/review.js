const defaultState = [];

function review(state = defaultState, action){
	let newState = Object.assign({}, state),
		data = action.data;

	switch(action.type){
		case 'REVIEW_SET_LIST':
			newState.list = data
			return newState;
		case 'REVIEW_SET_ISTYPING':
			newState.isTyping = data;
			return newState;
		default:
			return newState
	}
}

export default review;