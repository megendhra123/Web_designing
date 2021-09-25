$(document).ready(function(){
   $("#btn").click(function(){
     var name =  $("#name").val();
      $("#display-paragraph").slideDown(2000).html("<i>Hello! "+name+"</i>");
   });
});