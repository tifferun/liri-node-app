// Initialize dotenv
require("dotenv").config(); 

// NPM Modules
// const keys = require("./keys.js"); 

var spotify = new spotify(keys.spotify); 

var Spotify = require('node-spotify-api');

// local modules

const keys = require("./keys.js");
 
const action = process.argv[2];

const input = process.argv[3];

// const spotify = new Spotify(keys.spotify);
if (!action) {
    return console.log("you must provide an action")
}
if (!input) {
    return console.log("you must provide an input for " + action)
}


console.log("KEYS", keys.spotify); 

switch(action){
    case'concert-this':
    concertThis(input)
        break;

    case'spotify-this-song':
        spotifyThisSong(input)
        break; 

    case 'movie-this': 
        console.log("you want movie info on ", input);
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



function spotifyThisSong(song){
    console.log("You wnat a song for", song);
}

function movieThis(movie){
    console.log("you want movie info on", movie);
}


function doWhatItSays(it){
    console.log("Do what it says", it);
}
