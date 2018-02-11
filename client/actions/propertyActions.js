//utils
import { scraping } from "../utils/helpers/scraping";
import { getScrappingConfig } from '../utils/helpers/stringManipulation'

export function setPropertyList(){
	return (dispatch, getState) => {
		const url = "https://www.holidayhouses.co.nz/Browse/List.aspx?locationsearch=&availablefrom=Any&availableto=Any&minguests=",
			type = "holidayHouses";

		const SCRAPPING_ITEM = getScrappingConfig('holidayHouses');

		dispatch({
			type: 'PROPERTY_SET_STATE',
			data: 'LOADING'
		})

		scraping(SCRAPPING_ITEM.URL, SCRAPPING_ITEM.KEY)
			.then((res, err) => {
				dispatch({
					type: 'PROPERTY_SET_LIST',
					data: res
				});

				dispatch({
					type: 'PROPERTY_SET_STATE',
					data: 'LOADED'
				})
			})
			.catch(err => {
				dispatch({
					type: 'PROPERTY_SET_STATE',
					data: 'ERROR',
					message: err
				})
			})
	}
}