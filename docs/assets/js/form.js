function validateEmail(t){return!!/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(t)}$(document).ready(function(){$("#user-email").keyup(function(){$(this).val().indexOf("@")>=0&&$(this).val().indexOf(".")>=0?($("#submit").removeClass("st-btn-mute").addClass("st-btn-color"),$("#st-join").attr("action","//docs.google.com/forms/d/e/1FAIpQLSe1XxxH6SR0l9wRzmvFr4lnnKDwtnF8JnwvFEiN6pBhLpqnQA/formResponse")):($("#submit").removeClass("st-btn-color").addClass("st-btn-mute"),$("#st-join").attr("action",""))}),$("#submit").click(function(t){var e=$("#user-email").val(),s=$("#user-name").val(),a=$("#user-lat").val(),o=$("#user-long").val(),r=$("#user-hex").val(),n=$("#user-invited-by").val(),i={"entry.729727579":e,"entry.918333152":s,"entry.800172011":a,"entry.218759317":o,"entry.244596198":r,"entry.1323190203":n};0==$.trim(e).length&&t.preventDefault(),validateEmail(e)?($.ajax({type:"POST",url:"//docs.google.com/forms/d/e/1FAIpQLSe1XxxH6SR0l9wRzmvFr4lnnKDwtnF8JnwvFEiN6pBhLpqnQA/formResponse",dataType:"json",data:i,statusCode:{0:function(){console.log("success"),mySwiper.appendSlide('<div class="st-cp-confirm swiper-slide" data-hash="confirmation"> <div class="st-cp-wrap-inner"> <h1>Thank You</h1> <h2 class="st-dynamic-hex">For helping us color the world</h2> <div class="st-divider"></div><p>We must bring all colors together. Please share <a href="/#app" class="st-dynamic-hex">Color App</a> with your family and friends. </p><div class="st-divider"></div><p>The world is our canvas and it needs your prismatic soul. <span class="st-dynamic-hex">#ColorApp #OurWorld #Unity #ShiftTheory #UseColorApp</span></p><p> <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcolor.shifttheory.com" class="st-dynamic-hex">Share via Facebook</a><br/> <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fcolor.shifttheory.com&text=The%20world%20is%20our%20canvas%20and%20it%20needs%20your%20prismatic%20soul.%20%23ColorApp%20%23OurWorld%20%23Unity%20%23ShiftTheory%20%23UseColorApp." class="st-dynamic-hex">Share via Twitter</a></p><a href="/#app" class="st-btn st-cp-btn-prev">Use Color</a></div></div>'),mySwiper.slideTo(3,300,!1),e.val(""),document.getElementById("st-join").reset()}}}),t.preventDefault()):t.preventDefault()})});