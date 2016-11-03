var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var SpotifyWebApi = require('spotify-web-api-node')
var spotifyApi = new SpotifyWebApi()

module.exports = router

var year = 2012

spotifyApi.searchTracks('track:the year:' + year)
  .then(function(data) {
    var randomNum = Math.floor( Math.random() * (20) )

    console.log('Search for random 2014 track with "the" - track name is', data.body.tracks.items[randomNum].name)
    console.log('Search for random 2014 track with "the" - artist is', data.body.tracks.items[randomNum].artists[0].name)
    console.log('Search for random 2014 track with "the" - album is', data.body.tracks.items[randomNum].album.name)
    console.log('Search for random 2014 track with "the" - Spotify ID is', data.body.tracks.items[randomNum].id)
  }, function(err) {
    console.error(err)
  })
