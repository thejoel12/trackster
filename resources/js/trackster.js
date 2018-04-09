
var Trackster = {};


$(document).ready(function () {
$('#searchicon').click(function(){
  Trackster.searchTracksByTitle($('#textinput').val());
});
});

const API_KEY = '5fa973d5490fd9f31ab5b3abc7b16159';

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {
  var htmlTrackRow =
  '<div class="container trackfill" id="tracks">' +
    '<div class="border">' +
    '<a href="' + track.url + '" class="col-sm-1"><i class="far fa-play-circle"></i></a> ' +
    '<span class="col-sm-1 col-sm-offset-1">1</span>' +
    '<span class="col-sm-3">' + track.name + '</span>' +
    '<span class="col-sm-2">' + track.artist + '</span>'+
    '<span class="col-sm-2">' + track.album + '</span>' +
    '<span class="col-sm-1">' + track.listeners + '</span>' +
    '<span class="col-sm-1">' + track.length + '</span>' +
  '</div>' +
  '</div>';

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/


Trackster.searchTracksByTitle = function(title) {
      $.ajax({
        url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + title + '&api_key=' + API_KEY + '&format=json',
        datatype: 'jsonp',
        success: function() {
          console.log('success');
        }
      });
    };
