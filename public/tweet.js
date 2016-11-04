
function tweetSong (songTitle, artist) {
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(songTitle) + " - " + encodeURIComponent(artist));
}
