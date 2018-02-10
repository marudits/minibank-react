import { scraping } from "../utils/helpers/scraping";

export function setPropertyList(){
	return (dispatch, getState) => {
		const url = "https://www.holidayhouses.co.nz/Browse/List.aspx?locationsearch=&availablefrom=Any&availableto=Any&minguests=",
			type = "holidayHouses";

		scraping(url, type)
			.then(res => {
				dispatch({
					type: 'PROPERTY_SET_LIST',
					data: res
				})
			})
	}
}