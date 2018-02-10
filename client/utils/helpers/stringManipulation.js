import moment from 'moment';

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