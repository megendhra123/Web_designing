$(document).ready(function(){

    var isFirstNameCorrect=false;
    var isLastNameCorrect=false;
    var isEmailIdtNameCorrect=false;
    var isUserNameCorrect=false;
    var isPasswordCorrect=false;
    var isConfirmCorrect=false;
    var isPhoneNumberCorrect=false;


    $("#firstNameTextField").focusout(function(){
        var firstName=$("#firstNameTextField").val();
        var patternName= /^[a-zA-Z]*$/;

        if(!patternName.test(firstName)){
            $("#firstNameError").show();
            $("#firstNameError").html("only characters allowed or no spaces allowed");
            $("#firstNameTextField").css("border-bottom","2px solid red");
        }else if(firstName.length<3){
            $("#firstNameError").show();
            $("#firstNameError").html("name must be greater than 2 digit");
            $("#firstNameTextField").css("border-bottom","2px solid red");
        }else {
            $("#firstNameError").hide();
            $("#firstNameTextField").css("border-bottom","2px solid green");
            isFirstNameCorrect=true;
        }
    });

    $("#lastNameTextField").focusout(function(){
        var firstName=$("#lastNameTextField").val();
        var patternName= /^[a-z A-Z]*$/;

        if(!patternName.test(firstName)){
            $("#lastNameError").show();
            $("#lastNameError").html("only characters allowed");
            $("#lastNameTextField").css("border-bottom","2px solid red");
        }else if(firstName.length<3){
            $("#lastNameError").show();
            $("#lastNameError").html("name must be greater than 2 digit");
            $("#lastNameTextField").css("border-bottom","2px solid red");
        }else {
            $("#lastNameError").hide();
            $("#lastNameTextField").css("border-bottom","2px solid green");
            isLastNameCorrect=true;
        }
    });

    $("#emailIdTextField").focusout(function(){
        var emailId=$("#emailIdTextField").val();
        var emailIdPattern= /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

         if(!emailIdPattern.test(emailId)){
            $("#emailIdError").show();
            $("#emailIdError").html("enter a vaild email id");
            $("#emailIdTextField").css("border-bottom","2px solid red");
        }else {
            $("#emailIdError").hide();
            $("#emailIdTextField").css("border-bottom","2px solid green");
            isEmailIdtNameCorrect=true;
        }
    });

    $("#userNameTextField").focusout(function(){
        var userName=$("#userNameTextField").val();

         if(userName.length<3){
            $("#userNameError").show();
            $("#userNameError").html("user name must be greater than 2 digit");
            $("#userNameTextField").css("border-bottom","2px solid red");
        }else {
            $("#userNameError").hide();
            $("#userNameTextField").css("border-bottom","2px solid green");
            isUserNameCorrect=true;
        }
    });

    $("#passwordTextField").focusout(function(){
        var password=$("#passwordTextField").val();

         if(password.length<8){
            $("#passwordError").show();
            $("#passwordError").html("password must be greater than 8 digit");
            $("#passwordTextField").css("border-bottom","2px solid red");
        }else {
            $("#passwordError").hide();
            $("#passwordTextField").css("border-bottom","2px solid green");
            isPasswordCorrect=true;
        }
    });

    $("#confirmPasswordTextField").focusout(function(){
        var confirmPassword=$("#confirmPasswordTextField").val();
        var password=$("#passwordTextField").val();

         if(confirmPassword!=password){
            $("#confirmPasswordError").show();
            $("#confirmPasswordError").html("confirm password and password are not match");
            $("#confirmPasswordTextField").css("border-bottom","2px solid red");
        }else {
            $("#confirmPasswordError").hide();
            $("#confirmPasswordTextField").css("border-bottom","2px solid green");
            isConfirmCorrect=true;
        }
    });

    $("#phoneNumberTextField").focusout(function(){
        var phoneNumber=$("#phoneNumberTextField").val();
        var phoneNoPattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;;

         if(!phoneNoPattern.test(phoneNumber)){
            $("#phoneNumberError").show();
            $("#phoneNumberError").html("enter a valid phone number");
            $("#phoneNumberTextField").css("border-bottom","2px solid red");
        }else {
            $("#phoneNumberError").hide();
            $("#phoneNumberTextField").css("border-bottom","2px solid green");
            isPhoneNumberCorrect=true;
        }
    });
    $("#registerButton").click(function(){

        if(isFirstNameCorrect==true && isLastNameCorrect==true &&isEmailIdtNameCorrect==true
            && isUserNameCorrect==true && isPasswordCorrect==true && isConfirmCorrect==true && isPhoneNumberCorrect==true){
            alert("Registration Successfull");
        }else{
            alert("Registration Unsuccessfull");
        }
    });


});