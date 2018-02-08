import request from 'superagent';

import { CONFIG } from '../../assets/config';

export function apiGetBankList(){

	return new Promise((resolve, reject) => {
		request
			.get(`${CONFIG.URL.API}${CONFIG.MODELS.BANK}`)
			.end((err, res) => {
				if(!err){
					resolve({data: res.body, err: null})
				} else {
					reject({data: null, err: err})
				}
			})
	});
}

export function apiFavouriteBank(bankId){
	return new Promise((resolve, reject) => {
		request
			.patch(`${CONFIG.URL.API}${CONFIG.MODELS.BANK}/favourite`, {bankId: bankId})
			.end((err, res) => {
				if(!err){
					resolve({data: res.body.result.data, err: null})
				} else {
					reject({data: null, err: err})
				}
			})
	});
}