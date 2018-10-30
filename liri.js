// Initialize dotenv
require("dotenv").config(); 

const request = require("request");

// NPM Modules
// const keys = require("./keys.js"); 
const keys = require("./keys.js");

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);  

//var OMDb = new OMDb(keys.OMDb); 


// local modules


 
const action = process.argv[2];

const input = process.argv[3];

// const spotify = new Spotify(keys.spotify);
if (!action) {
    return console.log("you must provide an action")
}
if (!input) {
    return console.log("you must provide an input for " + action)
}


// console.log("KEYS", keys.spotify); 

switch(action){
    case'concert-this':
    concertThis(input)
        break;

    case'spotify-this-song':
        spotifyThisSong(input)
        break; 

    case 'movie-this': 
        console.log("you want movie info on", input);
        movieThis(input)
        break; 
      

    case 'do-what-it-says': 
        console.log("Do what it says", input);
        break; 

    default: 
        console.log("No idea what you are asking for.... "); 
}

// put all my functions below for each of the four actions listed in the homework instructions... starting with msContentScript, songs, movies.. 



function concertThis(artist){
    console.log("You want a concert for", artist);
    //return the results from API call to node-spotify-api and log it out to the console// similiar to Thursdays class activity of changing info on the movies ei: year, plot, actors #18 or #19//
}





// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from


function spotifyThisSong(song){

    // function (error, response, body) {
    //     if (!error && response.statusCode === 200)
    // };

    // get Elvis' albums, passing a callback. When a callback is passed, no Promise is returned 
    spotify.search({ type: 'track', query:song}, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
      });
   
  // get Elvis' albums, using Promises through Promise, Q or when
 

    console.log("You want a song for", song);
    console.log("Here's the preview link ", song);
    console.log("The album that the song is from", song);
}






function movieThis(movie){
    request("https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy",
   function (error, response, body) {
    if (!error && response.statusCode === 200)
    
    {
        console.log("The title of this moive is: " + JSON.parse(body).Title);     
        console.log("The year this movie was released was: " + JSON.parse(body).Year);
        console.log("The rating of the movie is: " + JSON.parse(body).Rated);
        // console.log("The rotten tomatoes review is: " + JSON.parse(body).Ratings);
        console.log("The movie was produced in: " + JSON.parse(body).Country);
        console.log("The movie's language is: " + JSON.parse(body).Language);
        console.log("The plot of this moive is: " + JSON.parse(body).Plot);
        console.log("The actors in the movie are: " + JSON.parse(body).Actors);
      }
    });

   }




// request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", 
// function(error, response, body) {

//   // If the request is successful (i.e. if the response status code is 200)
//   if (!error && response.statusCode === 200) {

//     // Parse the body of the site and recover just the imdbRating
//     // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
//     console.log("The movie's rating is: " + JSON.parse(body).Year);
//     console.log("The plot of this moive is: " + JSON.parse(body).Plot);
//   }
// });
/// look over #17 ///

// * Title of the movie. x
// * Year the movie came out.x
// * IMDB Rating of the movie.x
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.x
// * Plot of the movie.x
// * Actors in the movie.x


// "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";






function doWhatItSays(it){
    console.log("Do what it says", it);
}
