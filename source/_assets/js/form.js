$(document).ready(function() {

  ///////////////////////////////////////////////////////
  // Form Verification
  //
  $('#user-name').keyup(function() {
    if ( $('#user-name').val() ) {
      $('#submit').addClass("valid-name")
    }
    else {
      $('#submit').removeClass("valid-name")
    }
    checkValid();
  });

  $('#user-email').keyup(function() {
    if (($(this).val().indexOf('@') >= 0) &&
        ($(this).val().indexOf('.') >= 0)) {
      // $('#submit').removeClass('st-btn-mute').addClass('st-btn-color');
      // $('#st-join').attr('action', '//docs.google.com/forms/d/e/1FAIpQLSe1XxxH6SR0l9wRzmvFr4lnnKDwtnF8JnwvFEiN6pBhLpqnQA/formResponse');
      $('#submit').addClass("valid-email")
    }
    else {
      $('#st-join').attr('action', '');
      $('#submit').removeClass("valid-email")
    }
    checkValid();
  });

  // $('#user-lat').change(function() {
  //   if ( $('#user-lat').val() ) {
  //     $('#submit').addClass("valid-lat")
  //   }
  //   else {
  //     $('#submit').removeClass("valid-lat")
  //   };
  //   checkValid();
  // });

  // $('#user-long').change(function() {
  //   if ( $('#user-long').val() ) {
  //     $('#submit').addClass("valid-long")
  //   }
  //   else {
  //     $('#submit').removeClass("valid-long")
  //   };
  //   checkValid();
  // });


  $( "#user-name, #user-email" ).focus(function() {
    checkValid();
  });

  function checkValid() {
    if ($('#submit').hasClass('valid-name') &&
      $('#submit').hasClass('valid-email') ) {
        $('#submit').removeClass('st-btn-mute').addClass('st-btn-active');
        $('#st-join').attr('action', '//docs.google.com/forms/d/e/1FAIpQLScpLm1cIGxjxhuX09UACWGtRN3WIlI0DsI3o7jxj93kndLVUQ/formResponse');
    } else {    
      $('#submit').removeClass('st-btn-active').addClass('st-btn-mute');
      $('#st-join').attr('action', '');
    };
  }

  ///////////////////////////////////////////////////////
  // Form custom post to sheets + validation
  //
  $('#submit').click(function(e) {
    // e.preventDefault();
    // var stForm        = $('#user-email');
    var stForm      = $('#st-join');
    var userEmail   = $('#user-email').val();
    var userName    = $('#user-name').val();
    // var userLat     = $('#user-lat').val();
    // var userLong    = $('#user-long').val();
    // var userHex     = $('#user-hex').val();
    // var userInvite  = $('#user-invited-by').val();
    var url         = "//docs.google.com/forms/d/e/1FAIpQLScpLm1cIGxjxhuX09UACWGtRN3WIlI0DsI3o7jxj93kndLVUQ/formResponse";
    var data        = {
      'entry.1472272206' : userEmail,
      'entry.1659755818' : userName
    };
    
    if (validateEmail(userEmail)) {
      $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        data: data,
        statusCode: {
          0: function() {
                  console.log("success");
                  // window.location.href = "../confirmation/";
                  appSwiper.appendSlide('<div class="swiper-slide st-cp-confirm" data-hash="confirm"> <div class="st-cp-wrap-inner"> <div class="st-logo"></div><div class="st-divider"></div><p><b>Great!</b> Now look up for a message from us in your inbox.</b> <p>IMPORTANT: In reference to <b><a href="/#info">Rule #1</a></b>, Achieving unity depends exclusively on the participation of people like you. Please share with your family and friends.–</p><p> <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//shifttheory.com" target="_blank">Share via Facebook</a><br/> <a href="https://twitter.com/home?status=United%20we%20stand.%20Divided%20we%20fall.%20Play%20The%20Game%20%40ShiftTheory%20-%20https%3A//shifttheory.com/%20%23GameOfYourLife%20%23Unity%20%23ShiftTheory" target="_blank">Share via Twitter</a> </p><a href="/#app" class="st-btn st-btn-dark st-cp-btn-prev">OK</a> </div></div>');
                  appSwiper.slideTo(3, 300, false);
                  stForm[0].reset();
          }
        }
      });
      e.preventDefault();
    }

    else {
      // alert('Invalid Email Address');
      e.preventDefault();
    }

  }); // End form

}); // End document ready


///////////////////////////////////////////////////////
// Validate email filter
//
function validateEmail(userEmail) {
  var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (filter.test(userEmail)) {
    return true;
  }
  else {
    return false;
  }
}


