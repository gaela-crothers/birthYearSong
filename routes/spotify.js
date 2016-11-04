var request = require('superagent')
var SpotifyWebApi = require('spotify-web-api-node')
var express = require('express')
var router = express.Router()

var spotifyApi = new SpotifyWebApi()

router.get('/', function(req, res){
  console.log("we're at the route")
  res.render('showSong', {title: "Mel and Michael", songURI:songURI})
})

var songURL =  '<iframe src="https://embed.spotify.com/?uri=spotify:track:"'+songURI+'" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'
var songURI = "64Ny7djQ6rNJspquof2KoX"

module.exports = router
