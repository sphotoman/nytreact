import axios from 'axios';
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

export const helper={
	query: (searchTopic, startYear, endYear, callBack) => {
		startYear+='0101';
		endYear+='1230';
		console.log(searchTopic, startYear, endYear);
		var queryURLBase = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${authKey}&q=${searchTopic}&begin_date=${startYear}&end_date=${endYear}`;
		console.log(queryURLBase);
		return axios.get(queryURLBase).then(res=>{
			callBack(res.data.response.docs); 
		})
	}
}