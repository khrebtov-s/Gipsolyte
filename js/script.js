$(function () {
    jQuery(function($){
    $("#date").mask("99/99/9999");
    $("#phone").mask("+7 (999) 999-9999");
    $("#tin").mask("99-9999999");
    $("#ssn").mask("999-99-9999");
  });
    new WOW().init();
  
      $(document).ready(function(){
      $('.popup-btn').on('click', function(event) {
        event.preventDefault();
        $('.popup').fadeIn();
      });
      $('.popup-close').on('click', function(event) {
        event.preventDefault();
        $('.popup').fadeOut();
      });

      // Слайдер с отзывами
      $('.feedback-slider').slick({
        prevArrow: '<button type="button" class="feedback-slider-btn feedback-prev-btn"><img src="img/feedback/prev.svg" alt="Previos" /></button>',
        nextArrow: '<button type="button" class="feedback-slider-btn feedback-next-btn"><img src="img/feedback/next.svg" alt="Next" /></button>'
      });
      $('.features-slider').slick({
      infinite: true,
      slidesToShow: 4,
     slidesToScroll: 1,
   

   responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        prevArrow: '<button class="prev"></button>',
        nextArrow: '<button class="next"></button>',
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        prevArrow: '<button class="prev"></button>',
        nextArrow: '<button class="next"></button>',
        slidesToScroll: 1
      }
    }]
    });
   });
});

