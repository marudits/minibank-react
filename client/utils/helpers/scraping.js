import request from 'request';
import cheerio from 'cheerio';

//helpers
import { truncateString, getScrappingConfig } from "./stringManipulation";

export function scraping(url, type) {
	return new Promise((resolve, reject) => {
		request(url, (err, res, html) => {
			if(!err){
				switch(type){
					case "holidayHouses":
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
	const data = $(".grid-item"),
		SCRAPPING_ITEM = getScrappingConfig('holidayHouses');

	let items = [];

	for(let i = 0; i < data.length; i++){
		let imgSrc = $(data[i]).find('.photo-placeholder')[0].attribs.style;

		items.push(
			{
				imgSrc: imgSrc.slice(imgSrc.indexOf("https"), imgSrc.length - 2),
				title: $(data[i]).find('.HouseCard-title').text(),
				location: $(data[i]).find('.ListCard-location').text(),
				summary: $(data[i]).find('.ListCard-description span').text(),
				price: $(data[i]).find('.ListCard-price').text().replace('From ', ''),
				guests: $(data[i]).find('.ListCard-guests').text().trim(),
				bedrooms: $(data[i]).find('.ListCard-bedrooms').text().trim(),
				bathrooms: $(data[i]).find('.ListCard-bathrooms').text().trim(),
				detailUrl: SCRAPPING_ITEM.MAIN_URL + $(data[i]).find('.Button--book')[0].attribs.href,
			}
		)
	}

	console.log('scraping: items: ', items);
	return items;
}