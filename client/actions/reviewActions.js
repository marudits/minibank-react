//helpers
import fire from '../utils/helpers/firebase';
import { objectListToArray } from '../utils/helpers/stringManipulation'

export function addReview(name, email, text){
	return (dispatch, getState) => {
		let dbReview = fire.firebase_.database().ref('reviews');
		dbReview.push({
			name: name,
			email: email,
			text: text,
			timestamp: Date.now()
		});	
	}
}

export function listReview(){
	return (dispatch, getState) => {
		let dbReview = fire.firebase_.database().ref('reviews');
		dbReview.on('value', (res) => {
			dispatch({
				type: 'REVIEW_SET_LIST',
				data: res.val()
			})
		})
	}
}

export function isTypingReview(name, text){
	return (dispatch, getState) => {
		let dbIsTyping = fire.firebase_.database().ref('isTyping');
		dbIsTyping.child(name).set({
				type: 'review',
				name: name,
				text: text
		});
	}
}

export function getIsTyping(){
	return (dispatch, getState) => {
		let dbIsTyping = fire.firebase_.database().ref('isTyping');

		dbIsTyping.on('value', (res) => {
			dispatch({
				type: 'REVIEW_SET_ISTYPING',
				data: res.val() ? Object.keys(res.val()).length : 0
			});
		});
	}
}

export function isFinishTypingReview(name){
	return (dispatch, getState) => {
		let dbIsTyping = fire.firebase_.database().ref('isTyping');
			dbIsTyping.child(name).remove();
	}
	
}