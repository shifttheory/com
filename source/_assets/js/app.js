// //////////////////////////////////////////////////////////////////
// // JS / Main
// //

// //////////////////////////////////////////////////////////////////
// // App / Preloader
// //

// $(window).on('load', function() { // makes sure the whole site is loaded 
//   $('#status').fadeOut(); // will first fade out the loading animation 
//   $('#preloader').delay(111).fadeOut('slow'); // will fade out the white DIV that covers the website. 
//   // $('body').delay(350).css({'overflow':'visible'});
// })

// //////////////////////////////////////////////////////////////////
// // Color Picker
// //

// // Create a new color picker instance
// // https://iro.js.org/guide.html#Getting-Started
// var colorPicker = new iro.ColorPicker(".st-cp-color-picker", {
//   // color picker options
//   // Option guide: https://iro.js.org/guide.html#Color-Picker-Options
//   width: 320,
//   height: 320,
//   color: {r: 123, g: 79, b: 255},
//   anticlockwise: true,
//   borderWidth: 0.75,
//   borderColor: "#fff",
//   // Dynamic CSS guide: https://iro.js.org/guide.html#Dynamic-CSS
//   css: {
//     "body, #st-cp-swatch, #st-cp-swatch-form": { "background-color": "$color" },
//     ".st-dynamic-hex": { "color": "$color" }
//   }
// });

// var values      = document.getElementById("st-cp-values");
// var valuesForm  = document.getElementById("st-cp-values-form");
// var css         = document.getElementById("css");

// // https://iro.js.org/guide.html#color-change
// colorPicker.on("color:change", function(color){
//   // Show the current color in different formats
//   // Using the selected color: https://iro.js.org/guide.html#Using-the-Selected-Color
//   values.innerHTML = color.hexString;
//   valuesForm.innerHTML = color.hexString;
//   $('#user-hex').val("").val(color.hexString).css("text-transform", "uppercase");
//   $('.st-dynamic-hex').css("color", color.hexString);

// });

// //////////////////////////////////////////////////////////////////
// // Swiper
// //

// var mySwiper = new Swiper ('.swiper-container', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: false,
//   initialSlide: 1,
//   spaceBetween: 300,
//   navigation: {
//     nextEl: '.st-cp-btn-next',
//     prevEl: '.st-cp-btn-prev',
//   },
//   hashNavigation: {
//     watchState: true,
//     replaceState: true,
//   },
//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },
//   // simulateTouch: false,
//   // shortSwipes: false,
//   // longSwipesRatio: 0.1,
//   // speed: 500,
//   // grabCursor: true,
//   // noSwipingClass: 
//   // effect: 'flip',
// });

// // Remove dynamic slide before recreaing it
// $('#submit').click(function(){ mySwiper.removeSlide(3); });

// // Disable Swiper on buttons
// $('button, input:button, .st-btn').addClass('swiper-no-swiping');


// //////////////////////////////////////////////////////////////////
// // Geo Location
// //

// var userLat = document.getElementById("user-lat");
// var userLong = document.getElementById("user-long");
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.watchPosition(showPosition);
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }
// function showPosition(position) {
//     document.getElementById('user-lat').value = position.coords.latitude;
//     document.getElementById('user-long').value = position.coords.longitude;
// }

// $("#getLocation").click(function() {
//   getLocation();
//   $("#user-lat, #user-long").addClass("valid");
// });

// //////////////////////////////////////////////////////////////////
// // Hide Form info when user inout
// //

// // $(  'input[id=user-lat]').keyup(function(){
// //   if($(this).val().length)
// //     $('.st-form-info').fadeOut(200, function () {
// //       $('.user-invite-code').fadeIn(400);
// //       $('.st-tagline').delay(200).fadeIn(400);
// //        // $('#text').animate({'opacity': 'show', 'paddingTop': 0}, 2000);
// //     });
// //   else
// //     $('.st-form-info').fadeIn(400, function () {
// //       $('.st-tagline').css("display", "none");
// //        // $('#text').animate({'opacity': 'show', 'paddingTop': 0}, 2000);
// //     });
// // });

// //////////////////////////////////////////////////////////////////
// // Swiper init Geo Location on form slide
// //

// // mySwiper.on('slideChange', function () {
// //   // console.log('slide changed');
// //   if (mySwiper.realIndex == 2) {
// //       getLocation();
// //   } else {}
// // });
