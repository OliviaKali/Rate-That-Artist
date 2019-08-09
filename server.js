// require

// router.get("/api/artists", function(req, res) {

//     function searchArtist() {
//       var spotify = new Spotify(keys.spotify);
    
//       spotify
//         .search({ type: "artist", query: "blink-182", limit: 3 })
//         .then(function(response) {
//           var artistName = response.artists.items[0].name;
//           var artistGenres = response.artists.items[0].genres;
//           var imageUrl = response.artists.items[0].images[0].url;
//           var artistID = response.artists.items[0].id;
    
//           console.log("Artist: " + artistName);
//           console.log("Genre: " + artistGenres);
//           console.log("imageUrl: " + imageUrl);
//           console.log("Artist ID #: " + artistID);
          
//         })
//         .catch(function(err) {
//           console.log(err);
//         });
//     }
    
//     searchArtist();
//   });
  
//   app.listen(PORT, function() {
//     console.log("Server listening on: http://localhost:" + PORT);
//   });