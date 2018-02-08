import { apiGetBankList, apiFavouriteBank } from "../utils/api/bank";

export function setBankList(){
	return  (dispatch, getState) => {
		apiGetBankList()
			.then(res => {
				dispatch({
					type: 'BANK_SET_LIST',
					data: res.data
				})
			})
	}
}

export function favouriteBank(bankId){
	return  (dispatch, getState) => {
		apiFavouriteBank(bankId)
			.then(res => {
				dispatch({
					type: 'BANK_ADD_FAVOURITE',
					data: res.data
				})
			})
	}
}