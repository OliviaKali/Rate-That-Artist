require("dotenv").config();
var keys = require("./keys.js");

$(document).ready(function() {

var searchArtist = function(query) {
    $.ajax({
        url: 'https://api.spotify.com/vi/search',
        data: {
          q: "artist" + query,
          type: 'artist',
          market: 'US'
        }
        // success: function (response) {
        //     resultsPlaceholder.innerHTML = template(response);
        // }
      }).then(function (response) { 

//get rid of the may not use box and make the spotify playlist bigger to see songs

$("#artistImageDiv").append(
`<div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile">
                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child box">
                            <p class="title">Spotify</p>
                            <p class="subtitle">Top Left</p>
                            <iframe src="https://open.spotify.com/embed/artist/${artistID}" width="300"
                                height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </article>
                        <article class="tile is-child box">
                            <p class="title">May not use</p>
                            <p class="subtitle">Bottom box</p>
                        </article>
                    </div>`
);


`<iframe src="https://open.spotify.com/embed/artist/${artistID}" 
width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`


  //might not need for loop if only using the first result
  for (var i = 0; i < 3; i++) {
    $("#artistImageDiv").append(
      `<div class="tile is-parent">
        <article class="tile is-child box">
        <p class="title ">Artist Image</p>
        <p class="subtitle">Image</p>
        <figure class="image is-4by3">
        <img id="artistImage" src="${imageUrl}" />
  </figure>
</article>
</div>`
    );
  }
});
}
   
   // }
});


searchArtist(userInput);

//Spotify Info
//Landing HTML needs search bar at the top, so users can search directly from the page
//Landing HTML needs to display artist name + page needs padding

//put into HTML
<iframe src="https://open.spotify.com/embed/artist/6FBDaR13swtiWwGhX1WQsP" 
width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>


//Needs to be embedded in HTML
// <script src="https://sdk.scdn.co/spotify-player.js"></script>

var artistName = response.artists.items[0].name;
var artistGenres = response.artists.items[0].genres;
var imageUrl = response.artists.items[0].images[0].url
var artistID = response.artists.items[0].id

//search for artists???

// "https://api.spotify.com/v1"
//GET	        /v1/artists/{id}

const endpoint = "https://api.spotify.com/v1/recommendations";
const params = {
  'seed_artists': '6sFIWsNpZYqfjUpaCgueju',
  'target_danceability': '0.9'
};

fetch(`${endpoint}?${qs.stringify(params)}`, {
  method: "GET",
  headers: {
      Authorization: `Bearer ${userAccessToken}`     
  }
})
.then(response => response.json())
.then(({tracks})) => {
  tracks.forEach(item => {
    console.log(`${item.name} by ${item.artists[0].name}`);
  })
}
