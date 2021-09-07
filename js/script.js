console.log("start");

function validation(){
    var emailValue = document.getElementById("email").value;
    var regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var form = document.querySelector(".form");


    if (regEx.test(emailValue)){
        form.classList.remove("error");
        console.log("Valid Address");
        return true;
    }
    else{
        form.classList.add("error");
        console.log("Invalid Address");
        return false;
    }
}