var request = require('superagent')
var SpotifyWebApi = require('spotify-web-api-node')
var express = require('express')
var router = express.Router()

var spotifyApi = new SpotifyWebApi()

router.get('/', function(req, res){
  console.log("we're at the route")
  res.render('index', {title: "Mel and Michael"})
})
//
// spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
//   .then(function(data){
//     console.log("Artist Albums", data.body.items[0])
//   })
//   .catch(function(err){
//     console.log(err)
//   })
//
// var songURL =  '<iframe src="https://embed.spotify.com/?uri=spotify:track:"'+songURI+'" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'
// var songURI = "64Ny7djQ6rNJspquof2KoX"
module.exports = router
