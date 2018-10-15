module.exports = {
	horoscope: function(T, request, sign) {
		function callback(error, response, body) {
			if (!error && response.statusCode == 200) {
			results = JSON.parse(body);
		    //console.log(results);
		    T.post('statuses/update', { status: sign.name + "'s horoscope: " + results.description }, function(err, data, response) {
		  //console.log(results.description);
})
    console.log("Tweeted");
}
};
request(sign, callback);
//console.log(sign.name);
	},
	mood: function(T, request, sign) {
		function callback(error, response, body) {
			if (!error && response.statusCode == 200) {
				results = JSON.parse(body);
				T.post('statuses/update', { status: sign.name + "'s mood today: " + results.mood }, function(err, data, response) {
})
				console.log("Mood tweeted");
			}
		}
			request(sign, callback);
	}
};