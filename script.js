$(document).ready(function(){
    $('.projects').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      dots: true,
      focusOnSelect: false,
      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }]
    });
  });

  new WOW().init();