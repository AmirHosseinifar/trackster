$(document).ready(function(){
  const API_KEY = 'e6c125d795116f5ac59abd4b047bb941';
  var Trackster = {};
  $("#search").click(function(){
    Trackster.searchTracksByTitle($('input').val());
  })

  Trackster.searchTracksByTitle= function(title){
    $.ajax({
      url:"https://ws.audioscrobbler.com/2.0/?method=track.search&track=" +title+ "&api_key=" + API_KEY + "&format=json",
      success: function(response){
        console.log(response.results.trackmatches.track);
      }
    })
  }
 
})