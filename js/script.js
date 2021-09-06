console.log("start");

function validation(){
    var emailValue = document.getElementById("email").value;
    var regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var form = document.querySelector(".form");


    if (regEx.test(emailValue)){
        // alert("Valid Address");
        form.classList.remove("error");
        return true;
    }
    else{
        // alert("InValid Address");
        form.classList.add("error");
        return false;
    }
}