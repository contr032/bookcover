
$(document).ready(function() {

    $(".circle").click(function(){
      $(".square").css("background-color", "black");
      $(".title").css("color", "white");
      $(".author").css("color", "white");
      $(".top").css("color", "white");
      $(".bottom").css("color", "white");
      });
      $(".circle").hover(function(){
      $('#ad1').show()
      $('#ad2').show()
    });
    $(".circle").mouseleave(function(){
    $('#ad1').hide()
    $('#ad2').hide()
  });
});

$(document).ready(function(){
  $(".circle").click(function(){
    $(".circle").animate({left: '215px'},50);
  });
});



$(document).ready(function() {

    $(".circle").dblclick(function(){
      $(".square").css("background-color", "#F3F3F3");
      $(".title").css("color", "black");
      $(".author").css("color", "black");
      $(".top").css("color", "black");
      $(".bottom").css("color", "black");
  });

});

$(document).ready(function(){
  $(".circle").dblclick(function(){
    $(".circle").animate({left: '140'},50);
  });
});


$(document).ready(function() {
      $('#ad1').hide();
      $('#ad2').hide();
});
