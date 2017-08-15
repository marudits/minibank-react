//data
//import postsData from '../data/posts';

const defaultState = [];

function posts(state = defaultState, action){
	console.log('state: ', state)
	switch(action.type){
		case 'INCREMENT_LIKES':
			const i = action.index;
			return [
				...state.slice(0, i),
				{...state[i], likes: state[i].likes + 1},
				...state.slice(i+1)
			];
		default:
			return state;
	}
}

export default posts;