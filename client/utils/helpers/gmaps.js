import { CONFIG } from '../../assets/config';

export function convertCoordsToImage(lat = 0, lng = 0, heading = 151.78, pitch = -0.76){
	return `https://maps.googleapis.com/maps/api/streetview?size=400x200&location=${lat},${lng}&heading=${heading}&pitch=-&key=${CONFIG.KEY.GMAPS}`
}