$(document).ready(function(){

  const API_KEY = 'e6c125d795116f5ac59abd4b047bb941';
  var Trackster = {};

  $('input').keydown(function(e){
    if(e.which == 13) {
      Trackster.searchTracksByTitle($('input').val());
    }
  })

  $("#search").click(function(){
    Trackster.searchTracksByTitle($('input').val());
  })

  $("#search").click(function(){
    $('#search-result').empty();
  })

  Trackster.renderTracks = function(tracks) {
    for(i=0; i<tracks.length; i++){
      var a= '<div class="row detail-section">' +
      '<div class="col-xs-1 ">' + 
        '<a href="' +tracks[i].url+ '">'+
          '<i class="far fa-play-circle fa-2x play-button"></i>' +
        '</a>'+
      '</div>' +
      '<div class="col-xs-3">'+tracks[i].name+'</div>' +
      '<div class="col-xs-2">'+tracks[i].artist+'</div>' +
      '<div class="col-xs-2"><img src="' + tracks[i].image[1]['#text'] + '"/></div>' +
      '<div class="col-xs-1 col-xs-offset-1">'+numeral(tracks[i].listeners).format('0,0')+'</div>' +
      '<div class="col-xs-1">'+tracks[i].streamable+'</div>' + 
      '</div>'; 
      
      $('#search-result').append(a);
    }
  }
  
  Trackster.searchTracksByTitle= function(title){
    $.ajax({
      url:"https://ws.audioscrobbler.com/2.0/?method=track.search&track=" +title+ "&api_key=" + API_KEY + "&format=json",
      success: function(response){
        Trackster.renderTracks(response.results.trackmatches.track);
      }
    })
  }
 
})