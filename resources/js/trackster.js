$(document).ready(function() {
var Trackster = {};

$var API_KEY = 5fa973d5490fd9f31ab5b3abc7b16159;

$('#searchicon').click(function(){
  Trackster.searchTracksByTitle($('#textinput').val());
});

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/

$(document).ready(function () {
    $.ajax({
      url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&track=tiny&api_key=5fa973d5490fd9f31ab5b3abc7b16159&format=json',
      datatype: 'jsonp',
      success: function(data) {
        $('.weather').html('<p class="data">' + data.current_observation.weather + '</p>');
      }
    });
  });
});
Trackster.searchTracksByTitle = function(title) {

};


});
