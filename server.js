require("dotenv").config();
var keys = require("./keys");
var Spotify = require("node-spotify-api");

var express = require("express");
var app = express();
var fetch = require("node-fetch");

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

//user input
//ajax post route to get what they say
//json response to api 

app.post("/", function(req, res) {
function searchArtist() {
  var spotify = new Spotify(keys.spotify);

  spotify
    .search({ type: "artist", query: req.body.artist, limit: 3 })
    .then(function(response) {
      var artistName = response.artists.items[0].name;
      var artistGenres = response.artists.items[0].genres;
      var imageUrl = response.artists.items[0].images[0].url;
      var artistID = response.artists.items[0].id;

      var artist = {
        name: artistName,
        genres: artistGenres,
        image: imageUrl,
        id: artistID
      }
      res.json(artist);
    })
    .catch(function(err) {
      console.log(err);
    });
}
searchArtist();
});

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});