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

$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    pagination: {
      el: ".swiper-pagination",

    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  var nextBtn = $(".swiper-button-next");
  var prevBtn = $(".swiper-button-prev");
  

  //nextBtn.css("left", prevBtn.width() + 400);

});