(function () {
  var words = ["search", "build", "work","learning"];
  i = 0;
  setInterval(function(){ $('#kata_ganti').fadeOut(function(){
      $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
    }); }, 3000)
})();