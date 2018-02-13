import moment from 'moment';

//assets
import { CONFIG } from '../../assets/config';

export function numToDays(num = []){
	const DAY_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	let days = [];
	num.sort((a, b) => a > b).forEach((x) => days.push(DAY_OF_WEEK[x]));
	return days.join(', ');
}

export function truncateString(text, length){
	let truncated = [];

	text.split(" ").forEach((x) => {
		if(truncated.join(" ").length < length){
			truncated.push(x)
		}
	});

	return `${truncated.join(" ")}...`
}

export function getScrappingConfig(key){
	return CONFIG.URL.SCRAPPING.find(x => x.KEY == key)
}

export function objectListToArray(list){
	let data = [];

	for(let key in list){
		data.push({...list[key], key: key})
	}

	return data;
}

export function calculateDiffTime(timestamp = Date.now()){
	let diffTime = (moment() - moment(new Date(timestamp))),
		sentTime = new Date(timestamp);

	// console.log('diffTime: ', diffTime, '| sentTime: ', sentTime);

	let countDays =  moment.utc(diffTime).dayOfYear() - 1,
		countHours = moment.utc(diffTime).hour(),
		countMinutes = moment.utc(diffTime).minute(),
		countSeconds = moment.utc(diffTime).second();

	if(countDays > 1){
		return moment(sentTime).format('D/MM/YY').toString();
	} else if(countDays === 1){
		return 'Yesterday';
	} else {
		if(countHours >= 1){
			return `${countHours}h ago`;
		} else if(countMinutes >= 1) {
			return `${countMinutes}m ago`;
		} else {
			return `${countSeconds}s ago`;
		}
    }
}