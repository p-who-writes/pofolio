$(document).ready(function(){

    $(this).scrollTop(0);


    $(document).on("scroll", function () {

        var pageTop = $(document).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var tags = $("section");
        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i];

            if (($(tag).position().top + 150) < pageBottom) { 
                $(tag).addClass("visible")
            };
        };

    });

    $(function() {
        $("body").prognroll({
          height: 4, // progress bar height
          color: "#FFD800", // progress bar background color
          custom: false // if you make it true, you can add your custom div and see it's scroll progress on the page
        });
      });

    $('a[href*="#"]')
    .click(function(event) {
      // On-page links
      
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });


    $("#verizon-panel").mouseover(function() {

        setTimeout(function(){
            $("#hover-art-verizon").delay( 300 ).attr("src", "images/verizon-art-hover.svg");
          }, 400);
    });
    $("#verizon-panel").mouseout(function() {

        setTimeout(function(){
            $("#hover-art-verizon").attr("src", "images/verizon-art.svg");
          }, 400);
    });

    $("#bayesian-panel").mouseover(function() {

        setTimeout(function(){
            $("#hover-art-bayesian").delay( 300 ).attr("src", "images/bayesian-art-hover.svg");
          }, 400);
    });
    $("#bayesian-panel").mouseout(function() {

        setTimeout(function(){
            $("#hover-art-bayesian").attr("src", "images/bayesian-art.svg");
          }, 400);
    });


    $("#chatbot-panel").mouseover(function() {

        setTimeout(function(){
            $("#hover-art-chatbot").delay( 300 ).attr("src", "images/chatbot-art-hover.svg");
          }, 400);
    });
    $("#chatbot-panel").mouseout(function() {

        setTimeout(function(){
            $("#hover-art-chatbot").attr("src", "images/chatbot-art.svg");
          }, 400);
    });

    $("#twitch-panel").mouseover(function() {

        setTimeout(function(){
            $("#hover-art-twitch").delay( 300 ).attr("src", "images/twitch-art-hover.svg");
          }, 400);
    });
$("#twitch-panel").mouseout(function() {

        setTimeout(function(){
            $("#hover-art-twitch").attr("src", "images/twitch-art.svg");
          }, 400);
    });







    
  var colorCount = 0, colorCompare=0, timeOutFunction;
  $('#po-logo').mouseover(function() {
      timeOutFunction = setInterval(function(){colorCounter()}, 1000);
  });
  var colorCounter = function() {
      do {
          colorCount = Math.floor(Math.random() * 5) + 1;
      } while (colorCount == colorCompare);
      colorChanger(colorCount);
      colorCompare = colorCount;
  };

  $('#po-logo').mouseout( function() {
  clearInterval(timeOutFunction);
  $("#po-logo").attr("src", "logo-black.svg");

  });

  var colorChanger = function(count) {

      if (count==1)
      {
          $("#po-logo").attr("src", "logo-red.svg");
          console.log(count);

      }
      else if (count==2)
      {
          $("#po-logo").attr("src", "logo-blue.svg");
          console.log(count);
      }
      else if (count==3)
      {
          $("#po-logo").attr("src", "logo-green.svg");
          console.log(count);
      }
      else if (count==4)
      {
          $("#po-logo").attr("src", "logo-yellow.svg");
          console.log(count);
      }
      else if (count==5)
      {
          $("#po-logo").attr("src", "logo-pink.svg");
          console.log(count);
      };
  };

  });