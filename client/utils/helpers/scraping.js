import request from 'request';
import cheerio from 'cheerio';

//helpers
import { truncateString } from "./stringManipulation";

export function scraping(url, type) {
	return new Promise((resolve, reject) => {
		request(url, (err, res, html) => {
			if(!err){
				switch(type){
					case "holidayHouses":
						//console.log(html);
						resolve(holidayHouses(html));
						break;
					default:
						resolve(null)
				}
				resolve(html)
			}
			reject(err)
		})
	})
}

function holidayHouses(html) {
	let $ = cheerio.load(html);
	const data = $(".grid-item");

	let items = [];

	for(let i = 0; i < data.length; i++){
		let imgSrc = $(data[i]).find('.photo-placeholder')[0].attribs.style;

		//console.log($(data[i]).find('.photo-placeholder'));
		items.push(
			{
				imgSrc: imgSrc.slice(imgSrc.indexOf("https"), imgSrc.length - 2),
				title: $(data[i]).find('.HouseCard-title').text(),
				location: $(data[i]).find('.ListCard-location').text(),
				summary: $(data[i]).find('.ListCard-description span').text(),
				price: $(data[i]).find('.ListCard-price').text().replace('From ', '')
			}
		)
	}

	return items;
}