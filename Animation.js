$(document).ready(function(){
  $("#ani-left").click(function(){
     $("#box").animate({ left : '250px' });
  });
  $("#ani-big").click(function(){
     $("#box").animate({
          left : '160px',
          width: '200px',
          height: '200px',
          opacity: '0.5'
          });
     });
  $("#ani-width-tog").click(function(){
     $("#box").animate({ height : 'toggle' });
     });
  $("#ani-queue").click(function(){
            $("#box").animate({ height: '250px', opacity: '0.5'});
            $("#box").animate({ width: '250px', opacity: '1'});
            $("#box").animate({ height: '100px', opacity: '0.5'});
            $("#box").animate({ width: '100px', opacity: '1'});
       });
  $("#ani-text").click(function(){
            $("#box").animate({ width: '200px', height: '80px'},1200);
            $("#display-para").show(2000);
  });
  });