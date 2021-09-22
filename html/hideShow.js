    $(document).ready(function(){
          $(".hide").click(function(){
              $(this).hide(500);
          });
          $(".show").click(function(){
              $(".hide").show();
          });
   });