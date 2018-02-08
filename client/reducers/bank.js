const defaultState = [];

function bank(state = defaultState, action){
	switch(action.type){
		case 'BANK_GET_LIST':
			break;
		case 'BANK_SET_LIST':
			return Object.assign({}, state, {list: action.data});
		case 'BANK_ADD_FAVOURITE':
			let newList = state.list.map((x, i) => {
				if(x.id === action.data.id){
					return Object.assign({}, x, action.data);
				}
				return x;
			});
			return Object.assign({}, state, {list: newList});
		default:
			return state;
	}
}

export default bank;