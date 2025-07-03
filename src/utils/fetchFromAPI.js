import axios from "axios";

const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {
	url:BASE_URL,
	hostname: 'youtube-v31.p.rapidapi.com',
	port: null,
	path: '/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50',
	headers: {
		'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

export const fetchFromAPI=async(url)=>{
   const {data}= await axios.get(`${BASE_URL}/${url}`,options)
   return data;
}