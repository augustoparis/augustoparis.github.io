$(document).ready(function(){
  //alert("hello world");
  if(window.location.href=="http://augustoparis.github.io") {

  $("#sidebar").css({width:'100%'});

  console.log('app.js');

  $("#btnblog").click(function(){
    $("#sidebar").animate({width:'33.3333%'},'slow');
  });

  }
});
