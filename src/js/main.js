
$(document).ready(function () {
  var success = $(".success");
  var controlForm = $("#submitcontrol");
  var footerButton = $("#submitfooter");
  var close = $(".success__close");
  var valute;



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

  
  



  var Myswiper = new Swiper('.swiper-container2', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="'+ className + '">' + (index + 1) + '</span>';
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


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




  
$().ready(function() {

 
  $(".footer").validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
      userNameForm: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhoneForm: {
        required: true,
        minlength: 18
      },

      userEmailForm: {
        required: true,
        email: true
      },


    },
    messages: {
      userNameForm: {
        required: "Заполните Имя",
        minlength: "имя не короче 2х символов",
        maxlength: "Имя не больше 15ти символов",
      },

      userPhoneForm: "Заполните Телефон",

      userEmailForm: {
        required: "Заполните поле email",
        email: "Введите корректный email name@domain.com",
      },


    },

    submitHandler: function (form) {
      $.ajax({

        type: "POST",
        url: "footer.php",
        data: $(form).serialize(),
        success: function (responce) {
          
          success.toggleClass('success--visible');

          $(form)[0].reset();

          close.on('click', function() {
           success.removeClass('success--visible');
          });

        }

      });

    }

  });

 
  $(".send").validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
      userNameSend: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhoneSend: {
        required: true,
        minlength: 18
      },

      // compound rule
      userEmailSend: {
        required: true,
        email: true
      },
    },
    messages: {
      userNameSend: {
        required: "Заполните Имя",
        minlength: "имя не короче 2х символов",
        maxlength: "Имя не больше 15ти символов",
      },

      userPhoneSend: "Заполните Телефон",

      userEmailSend: {
        required: "Заполните поле email",
        email: "Введите корректный email name@domain.com",
      }
    },

    submitHandler: function (form) {
      $.ajax({

        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (responce) {
          
          success.toggleClass('success--visible');

            $(form)[0].reset();

             close.on('click', function() {
             success.removeClass('success--visible');
            });

        }

      });
    

    }


  });


  $(".foorm-footer").validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      
      // compound rule
      userEmailSend: {
        required: true,
        email: true
      },
    },
    messages: {
      userEmail: {
        required: "Заполните поле email",
        email: "Введите корректный email name@domain.com",
      }
    },

    submitHandler: function (form) {
      $.ajax({

        type: "POST",
        url: "mail.php",
        data: $(form).serialize(),
        success: function (responce) {
          
          

        $(form)[0].reset();

             

        }

      });
    

    }


  });


  
 });

 $("[type=tel]").mask("+7 (000) 000-00-00", {
  placeholder: "Телефон",
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





