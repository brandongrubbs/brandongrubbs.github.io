var keys = require ('./keys.js');

var Twitter = require('twitter');

var Spotify = require('node-spotify-api');

var pullTweets = function(){

 
var client = new Twitter(keys.twitterApiKeys);
 
var params = {screen_name: '@The_TestApp'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {

  	for (i=0; i < tweets.length; i++){
    	console.log(" ");
    	console.log(tweets[i].created_at);
    	console.log(" ");
    	console.log(tweets[i].text)
    	console.log(" ");
    	console.log(tweets[i].screen_name);
    }	
  }
});

}

var artistName = function(artist){
	return artist.name;
}

var musicSearch = function(songName){
}
 
var spotify = new Spotify({
  id: "11457a4ae7014110bb034fa0d0b0de6b",
  secret: "a469770f55b84b00bd7dbda6f5b58427"
});
 
spotify.search({ type: 'track', query: 'songName' }, function(err,
	 data) {
  if (err) {
     console.log('Error occurred: ' + err);
     return;
  }
 
console.log(data.tracks.items [0]); 
});

var twchange = function(newCommand, altCommand){
	switch(newCommand){
		case 'my-tweets' :
			pullTweets();
			break;
		case 'spotify-this-song' :
			musicSearch(altCommand);
			break;
		default:
		console.log('Liri does not understand');
	}
}

var run = function(opt1, opt2){
	twchange(opt1, opt2);
};

run(process.argv[2], process.argv[3]);