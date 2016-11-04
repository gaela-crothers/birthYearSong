var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var SpotifyWebApi = require('spotify-web-api-node')
var spotifyApi = new SpotifyWebApi()

module.exports = router

var year = 2010

router.get('/', function(req, res, next) {

  spotifyApi.searchTracks('track:the year:' + year)
  .then(function(data) {
    var randomNum = Math.floor( Math.random() * (20) )

    var songData = {
      title: data.body.tracks.items[randomNum].name,
      artist: data.body.tracks.items[randomNum].artists[0].name,
      album: data.body.tracks.items[randomNum].album.name,
      songURI: data.body.tracks.items[randomNum].id
    }
    console.log(songData)
    // res.render('showSong', songData)

  })
  .catch(function(error) {
    console.log(error);
  })
})
