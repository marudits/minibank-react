import request from 'superagent';

const CONFIG = require('../config'),
	API = CONFIG.url.api;

export function apiGetPost(params){
	return new Promise((resolve, reject) => {
		request
			.get(`${API}/Rides`)
			.query(params)
			.end((err, res) => {
				resolve({
					err,
					data: res.body
				})
			});
	});
}