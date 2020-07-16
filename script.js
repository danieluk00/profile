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
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }]
    });
  });

  new WOW().init();

  const onload = () => {

    setTimeout(function(){ 
      document.querySelector('.card1').classList.remove('d-none');
      document.querySelector('.card2').classList.remove('d-none');

      document.querySelector('.card1').classList.add('slideInLeft','animated');
      document.querySelector('.card2').classList.add('slideInRight','animated');
     }, 1000);

    setTimeout(function(){ 
      document.querySelector('.profilepic').classList.add('animated','flip');
     }, 2500);
    
  }
