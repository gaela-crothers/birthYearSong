var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var SpotifyWebApi = require('spotify-web-api-node')
var spotifyApi = new SpotifyWebApi()

module.exports = router

spotifyApi.searchTracks('track:Love year:2014')
  .then(function(data) {
    console.log('Search by "Love" 2014 - first result is', data.body.tracks.items[0])
    console.log('Search by "Love" 2014 (first result) - track name is', data.body.tracks.items[0].name)
    console.log('Search by "Love" 2014 (first result) - artist is', data.body.tracks.items[0].artists[0].name)
    console.log('Search by "Love" 2014 (first result) - album is', data.body.tracks.items[0].album.name)
    console.log('Search by "Love" 2014 (first result) - Spotify ID is', data.body.tracks.items[0].id)
  }, function(err) {
    console.error(err)
  })


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
