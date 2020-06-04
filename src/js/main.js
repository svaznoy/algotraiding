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



$(document).ready(function () {
  /**
   * При прокрутке страницы, показываем или срываем кнопку
   */
  $(window).scroll(function () {
    // Если отступ сверху больше 50px то показываем кнопку "Наверх"
    if ($(this).scrollTop() > 500) {
      $("#arrow").fadeIn();
    } else {
      $("#arrow").fadeOut();
    }
  });

  /** При нажатии на кнопку мы перемещаемся к началу страницы */
  $("#arrow").click(function () {
    $("body,html").animate({
        scrollTop: 0,
      },
      2500 
    );
    return false;
  });


  $(window).scroll(function () {
    // Если отступ сверху больше 50px то показываем кнопку "Наверх"
    if ($(this).scrollTop() > 500) {
      $("#mobile").fadeIn();
    } else {
      $("#mobile").fadeOut();
    }
  });

  /** При нажатии на кнопку мы перемещаемся к началу страницы */
  $("#mobile").click(function () {
    $("body,html").animate({
        scrollTop: 0,
      },
      2500 
    );
    return false;
  });





  var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animate__animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: false, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
  });
  wow.init();


  //перемещение плавное вниз
    $("#nav").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 6500); 
  });

  $("#foot").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        up = $(id).offset().up;
    $('body,html').animate({scrollTop: up}, 6250);
  });


 

});