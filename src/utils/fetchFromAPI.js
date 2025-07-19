import axios from "axios";

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

//This Is For Rapid API

// const options = {
// 	url: BASE_URL,
// 	hostname: 'youtube-v31.p.rapidapi.com',
// 	port: null,
// 	params: {
// 		maxResults: 500,
// 		regionCode: 'IN',
// 	},
// 	path: '/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50',
// 	headers: {
// 		'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
// 		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
// 	}
// };

export const fetchFromAPI = async (url) => {
	// console.log(import.meta.env.VITE_YOUTUBE_API_KEY)
	try {
		const { data } = await axios.get(`${BASE_URL}/${url}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
		return data;
	} catch (error) {
		if(error) {
      	console.error('API Error:', error);
    } // so your app doesn't crash
	}
}