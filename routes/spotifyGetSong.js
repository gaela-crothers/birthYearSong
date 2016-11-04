var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var SpotifyWebApi = require('spotify-web-api-node')
var spotifyApi = new SpotifyWebApi()

module.exports = router

router.get('/', function(req, res, next) {
  spotifyApi.searchTracks('track:the year:' + req.query.year)
  .then(function(data) {
    var randomNum = Math.floor( Math.random() * (20) )

    var songData = {
      songTitle: data.body.tracks.items[randomNum].name,
      artist: data.body.tracks.items[randomNum].artists[0].name,
      album: data.body.tracks.items[randomNum].album.name,
      songURI: data.body.tracks.items[randomNum].id
    }
    console.log(songData)
    var songObjectWithTweet = tweetSong(songData)
    res.render('showSong', songObjectWithTweet)

  })
  .catch(function(error) {
    console.log(error);
  })
})

function tweetSong (songObject) {
    songObject.twitterURL = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(songObject.songTitle + " - " + songObject.artist)
    return songObject

}
