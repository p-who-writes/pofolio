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