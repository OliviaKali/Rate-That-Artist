require("dotenv").config();
var keys = require("./keys.js"); //don't know if i need this since its for the front-end
var Spotify = require("node-spotify-api");

var express = require("express");
var app = express();
var fetch = require("node-fetch");

function searchArtist() {
  var spotify = new Spotify(keys.spotify);

  spotify
    .search({ type: "artist", query: "Blink-182", limit: 3 })
    .then(function(response) {
      var artistName = response.artists.items[0].name;
      var artistGenres = response.artists.items[0].genres;
      var imageUrl = response.artists.items[0].images[0].url;
      var artistID = response.artists.items[0].id;

      console.log("Artist: " + artistName);
      console.log("Genre: " + artistGenres);
      console.log("imageUrl: " + imageUrl);
      console.log("Artist ID #: " + artistID);
    })
    .catch(function(err) {
      console.log(err);
    });
}

searchArtist();






// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// init Spotify API wrapper

// spotify.clientCredentialsGrant().then(
//   function(data) {
//     // Save the access token so that it's used in future calls
//     spotify.setAccessToken(data.body["access_token"]);
//   },
//   function(err) {
//     console.log(
//       "Something went wrong when retrieving an access token",
//       err.message
//     );
//   }
// );

// // http://expressjs.com/en/starter/static-files.html
// app.use(express.static("public"));

// // http://expressjs.com/en/starter/basic-routing.html
// app.get("/", function(request, response) {
//   response.sendFile(__dirname + "/views/index.html");
// });

// app.get("/search", function(request, response) {
//   let query = request.query.query;

//   if (request.query.context) {
//     if (request.query.context == "artist") {
//       query = "artist:" + request.query.query;
//     }
//     if (request.query.context == "track") {
//       query = "track:" + request.query.query;
//     }
//   }
//   spotifyApi.searchTracks(query).then(
//     function(data) {
//       response.send(data.body);
//     },
//     function(err) {
//       console.log(err);
//     }
//   );
// });

// // listen for requests :)
// var listener = app.listen(process.env.PORT, function() {
//   console.log("Your app is listening on port " + listener.address().port);
// });

//to refresh the token
// curl -H "Authorization: Basic SPOTIFY_ID="
// -d grant_type=refresh_token -d refresh_token=SPOTIFY_SECRET https://accounts.spotify.com/api/token;

// {
//     "access_token": "NgA6ZcYI...ixn8bUQ",
//     "token_type": "Bearer",
//     "scope": "user-read-private user-read-email",
//     "expires_in": 3600
//  }

// $(document).ready(function() {

// var searchArtist = function(query) {
//     $.ajax({
//         url: 'https://api.spotify.com/vi/search',
//         data: {
//           q: "artist" + query,
//           type: 'artist',
//           market: 'US'
//         }
//         // success: function (response) {
//         //     resultsPlaceholder.innerHTML = template(response);
//         // }
//       }).then(function (response) {

// //get rid of the may not use box and make the spotify playlist bigger to see songs

// $("#artistImageDiv").append(
// `<div class="tile is-ancestor">
//             <div class="tile is-vertical is-8">
//                 <div class="tile">
//                     <div class="tile is-parent is-vertical">
//                         <article class="tile is-child box">
//                             <p class="title">Spotify</p>
//                             <p class="subtitle">Top Left</p>
//                             <iframe src="https://open.spotify.com/embed/artist/${artistID}" width="300"
//                                 height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
//                         </article>
//                         <article class="tile is-child box">
//                             <p class="title">May not use</p>
//                             <p class="subtitle">Bottom box</p>
//                         </article>
//                     </div>`
// );

// `<iframe src="https://open.spotify.com/embed/artist/${artistID}"
// width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`

//   //might not need for loop if only using the first result
//   for (var i = 0; i < 3; i++) {
//     $("#artistImageDiv").append(
//       `<div class="tile is-parent">
//         <article class="tile is-child box">
//         <p class="title ">Artist Image</p>
//         <p class="subtitle">Image</p>
//         <figure class="image is-4by3">
//         <img id="artistImage" src="${imageUrl}" />
//   </figure>
// </article>
// </div>`
//     );
//   }
// });
// }

//    // }
// });

// searchArtist(userInput);

// //Spotify Info
// //Landing HTML needs search bar at the top, so users can search directly from the page
// //Landing HTML needs to display artist name + page needs padding

// //put into HTML
// <iframe src="https://open.spotify.com/embed/artist/6FBDaR13swtiWwGhX1WQsP"
// width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

// //Needs to be embedded in HTML
// // <script src="https://sdk.scdn.co/spotify-player.js"></script>

// var artistName = response.artists.items[0].name;
// var artistGenres = response.artists.items[0].genres;
// var imageUrl = response.artists.items[0].images[0].url
// var artistID = response.artists.items[0].id
// //include spotify popularity?
// //include integer column for the table
//     //some kind of average formula that gets the average from the total of reviews from the site to show the popularity

//     // curl --location --request GET "https://api.spotify.com/v1/artists/{{id}}" \
//     // --header "Accept: application/json" \
//     // --header "Authorization: Bearer {{authorization}}"

// //search for artists???

// // "https://api.spotify.com/v1"
// //GET	        /v1/artists/{id}

// const endpoint = "https://api.spotify.com/v1/recommendations";
// const params = {
//   'seed_artists': '6sFIWsNpZYqfjUpaCgueju',
//   'target_danceability': '0.9'
// };

// fetch(`${endpoint}?${qs.stringify(params)}`, {
//   method: "GET",
//   headers: {
//       Authorization: `Bearer ${userAccessToken}`
//   }
// })
// .then(response => response.json())
// .then(({tracks})) => {
//   tracks.forEach(item => {
//     console.log(`${item.name} by ${item.artists[0].name}`);
//   })
// }
