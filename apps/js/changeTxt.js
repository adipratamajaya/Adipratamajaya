(function () {
    var words = ["Back-End","Full-Stack","Front-End"],
    i = 0;
    setInterval(function(){ $('#txt_change').fadeOut(function(){
        $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
      }); }, 3200)
  })();