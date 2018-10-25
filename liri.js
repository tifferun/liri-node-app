// Initialize dotenv
require("dotenv").config(); 

// NPM Modules
// const keys = require("./keys.js"); 
// var spotify = new spotify(keys.spotify); 

var Spotify = require('node-spotify-api');

// local modules

const keys = required("./keys.js");
 
const action = process.argv[2];

const input = process.argv[3];

// const spotify = new Spotify(keys.spotify);

console.log("KEYS", keys.Spotify); 

switch(action){
    case'concert-this':
        console.log("You want a concert for ", input);
        break;
    case'spotify-this-song':
        console.log("you want a song for ", input);
        break; 
    case 'movie-this': 
        console.log("you want movie info on ", input);
        break; 
    case 'do-what-it-says': 
        console.log("Do what is says", input);
        break; 
    default: 
        console.log("No idea what you are asking for.... "); 
}


