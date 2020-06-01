$(document).ready(function() {

    var player;

    $('.video__play').on('click', function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '460',
        width: '100%',
        videoId: 'MZqtJ1IrRNI',
        events: {
          'onReady': videoPlay,
        }
      });
    });
    
    function videoPlay(event) {
      event.target.playVideo();
    }


});