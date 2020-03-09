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
      document.querySelector('.profilepic').classList.add('animated','flip');
     }, 1500);
    
  }


  /* Open when someone clicks on the span element */
function openNav(name) {
  document.getElementById("myNav").style.width = "100%";

  const overlayName = document.getElementById('overlay-name');
  if (name=='connect4') {
    overlayName.innerText = 'Connect 4';
  }
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}