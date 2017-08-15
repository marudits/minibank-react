import request from 'superagent';

const API = 'http://localhost:3000/api';

//get loan
export function listLoan(data = []){
	return{
		type: 'GET_LIST_LOAN',
		data: data
	}
}


//list loan
export function getListLoan(){
	return function (dispatch){
		console.log('getListLoan');
		apiListLoan().then((result) => {
			console.log('getListLoan: err: ', result.err, '| result: ', result.data)
			dispatch(listLoan(result.data))
		})
	}
}

export function apiListLoan(){
	return new Promise((resolve, reject) => {
		console.log('apiListLoan')
		request
			.get(`${API}/Loans/listLoan`)
			.end((err, res) => {
				console.log('err: ', err, '| result: ', res.body)
				resolve({
					err,
					data: res.body
				})
			});
	});
}