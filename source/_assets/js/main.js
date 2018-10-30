//////////////////////////////////////////////////////////////////
// JS / Main
//

//////////////////////////////////////////////////////////////////
// App / Preloader
//

$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(111).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  // $('body').delay(350).css({'overflow':'visible'});
})



//////////////////////////////////////////////////////////////////
// Geo Location
//

var userLat = document.getElementById("user-lat");
var userLong = document.getElementById("user-long");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    document.getElementById('user-lat').value = position.coords.latitude;
    document.getElementById('user-long').value = position.coords.longitude;
}

$("#getLocation").click(function() {
  getLocation();
  $('#submit').addClass("valid-lat valid-long");
  checkValid();
});


//////////////////////////////////////////////////////////////////
// App Swiper
//

var appSwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  initialSlide: 1,
  spaceBetween: 300,
  navigation: {
    nextEl: '.st-cp-btn-next',
    prevEl: '.st-cp-btn-prev',
  },
  hashNavigation: {
    watchState: true,
    replaceState: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // simulateTouch: false,
  // shortSwipes: false,
  // longSwipesRatio: 0.1,
  // speed: 500,
  // grabCursor: true,
  // noSwipingClass: 
  // effect: 'flip',
});

// Remove dynamic slide before recreaing it
$('#submit').click(function(){ appSwiper.removeSlide(3); });

// Disable Swiper on buttons
$('button, input:button, .st-btn').addClass('swiper-no-swiping');


//////////////////////////////////////////////////////////////////
// TableTop +  Color Swiper
//

// window.addEventListener('DOMContentLoaded', init)

// var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1_9v5bAsbJRIZmaHOLjdX-1LVt2Zk2XF7Q6qGb2t5j5w/edit?usp=sharing';
// var userId    = "invite.id";
// var userName  = "user.name";
// var userHex   = "user.hex"; 
// var userScore = "invite.score";1

// function init() {
//   Tabletop.init( {
//     key: public_spreadsheet_url,
//     callback: showInfo,
//     simpleSheet: true,
//     prettyColumnNames: false
//   });
// };

