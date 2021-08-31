$(document).ready(function(){
    $("#hideButton").click(function(){
        $("#text").hide();
    });
    $("#showButton").click(function(){
        $("#text").show();
    });
    $("#toggleButton").click(function(){
        $("#text").toggle();
    });
    $("#fadeInButton").click(function(){
        $("#text").fadeIn(2000);
    });
    $("#fadeOutButton").click(function(){
        $("#text").fadeOut(2000);
    });
    $("#delayFadeOutButton").click(function(){
        $("#text").delay(2000).fadeOut();
    });
    $("#delayFadeInButton").click(function(){
        $("#text").delay(2000).fadeIn();
    });
    $("#changeTextButton").click(function(){
        var text= $("#changeTextField").val();
        if(text!=null && text.length>4){
            $("#text").text(text);
        }else{
            alert("text character must greater than 4");
        } 
    });
    $("#yellowBackgroundButton").click(function(){
        $("#text").css("background-color","yellow");
    });
    $("#blueBackgroundButton").click(function(){
        $("#text").css("background-color","lightblue");
    });
});