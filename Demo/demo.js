function formValidation(){
    var userName= document.form1.userName.value;
    var password= document.form1.password.value;
    if(userName!=null){
        if(password.length>=8 && password.length<=12){
            alert("Username : "+userName+"\nPassword : "+password);
        }else{
            alert("Password must have more than 8 digit and less than 12 digit");
        }
    }else{
        alert("Enter a valid user name");
    }
}