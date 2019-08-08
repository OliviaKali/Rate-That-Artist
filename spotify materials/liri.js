require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
var spotifyReq = require("node-spotify-api");
var spotify = new spotifyReq(keys.spotify);
var moment = require("moment");
var term = process.argv[2];
var query = process.argv.splice(3).join(" ");
var fs = require('fs');
checkTerm();
function checkTerm() {
    switch(term) 
    {
        case "spotify-this-song":
            spotifySong();
            break;
    }
}
function spotifySong()
{
    if (!query)
    {
        query = "Eminem";
    }
    spotify.search({ type: 'artist', query: query, limit: 1}, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
          }
          var jsonData = data[0];
         var showData = [
         "\nArtist: " + data.artists.items[0].name,
         "\nPicture: " + data.artists.items[0].images[1].url
         
          ].join("\n\n");
          console.log(showData);
          appendFile(showData);
          
    });
}