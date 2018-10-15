const delay = require('delay');

var Twit = require('twit');

var config = require('./config.js');

var T = new Twit(config);

var request = require('request');

var tweets = require('./tweets.js');

var aries = {
name: 'Aries',
url: 'https://aztro.sameerkumar.website/?sign=aries&day=today',
method: 'POST'
};

var taurus = {
name: 'Taurus',
url: 'https://aztro.sameerkumar.website/?sign=taurus&day=today',
method: 'POST'
};

var gemini = {
name: 'Gemini',
url: 'https://aztro.sameerkumar.website/?sign=gemini&day=today',
method: 'POST'
};

var cancer = {
name: 'Cancer',
url: 'https://aztro.sameerkumar.website/?sign=gemini&day=today',
method: 'POST'
};

var leo = {
name: 'Leo',
url: 'https://aztro.sameerkumar.website/?sign=leo&day=today',
method: 'POST'
};

var virgo = {
name: 'Virgo',
url: 'https://aztro.sameerkumar.website/?sign=virgo&day=today',
method: 'POST'
};

var libra = {
name: 'Libra',
url: 'https://aztro.sameerkumar.website/?sign=libra&day=today',
method: 'POST'
};

var scorpio = {
name: 'Scorpio',
url: 'https://aztro.sameerkumar.website/?sign=scorpio&day=today',
method: 'POST'
};

var sagittarius = {
name: 'Sagittarius',
url: 'https://aztro.sameerkumar.website/?sign=sagittarius&day=today',
method: 'POST'
};

var capricorn = {
name: 'Capricorn',
url: 'https://aztro.sameerkumar.website/?sign=capricorn&day=today',
method: 'POST'
};

var aquarius = {
name: 'Aquarius',
url: 'https://aztro.sameerkumar.website/?sign=aquarius&day=today',
method: 'POST'
};

var pisces = {
name: 'Pisces',
url: 'https://aztro.sameerkumar.website/?sign=pisces&day=today',
method: 'POST'
};

var signList = [aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn, aquarius, pisces];

/* tweets once a day
setInterval(tweetHoroscope, 1000*60*60*24); 
setInterval(tweetMood, 1000*60*60*24);
*/

//tweets the daily horoscope of very sign
function tweetHoroscope() {
	for (i=0;i<=11; i++) {
		tweets.horoscope(T, request, signList[i]);
	}
};

//tweets the daily mood of every sign
function tweetMood() {
	for (i=0;i<=11; i++) {
	tweets.mood(T, request, signList[i]);
	}
};

tweetHoroscope();
tweetMood();
