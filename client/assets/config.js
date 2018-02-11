export const CONFIG = {
	URL: {
		API: "https://mini-bank-api.herokuapp.com/api/",
		SCRAPPING: [
			{
				KEY: "holidayHouses",
				URL: "https://www.holidayhouses.co.nz/Browse/List.aspx?locationsearch=&availablefrom=Any&availableto=Any&minguests=",
				MAIN_URL: "https://www.holidayhouses.co.nz"	
			}
		]
	},
	MODELS: {
		BANK: 'Banks'
	},
	LABEL: {
		TITLE: "MiniBank - React"
	},
	KEY: {
		GMAPS: 'AIzaSyAB9HTFdhaLVNYTk2S5AgtGqHasQDMiSCk'
	},
	MENU: [
		{
			ID: 1,
			KEY: "bank",
			LABEL: "Bank",
			URL: "/bank"
		},
		{
			ID: 2,
			KEY: "review",
			LABEL: "Review",
			URL: "/review"
		},
		{
			ID: 3,
			KEY: "property",
			LABEL: "Property",
			URL: "/property"
		},
	]
}