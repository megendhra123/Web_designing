$(document).ready(function(){
    $("#append").click(function(){
        $("#text").append(" !!!");
    });
    $("#prepend").click(function(){
        $("#text").prepend("!!! ")
    });
    $("#btn-lightblue").click(function(){
        $("#text").addClass("text-color-lightblue");
    });
     $("#btn-bac").click(function(){
        $("#text").addClass("change-bac");
     });
  });