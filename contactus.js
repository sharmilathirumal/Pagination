var userName = document.getElementById("name");
var userEmail = document.getElementById("email");
var userComment = document.getElementById("message");
var submitButton =document.getElementById("btn");

submitButton.addEventListener("click",function(event){
    event.preventDefault();
    if(userName.value ==""||userEmail.value ==""||userComment.value ==""){
        alert("please enter all values")
    }

    else if(userName.value !=""||userEmail !=""||userComment !=""){
        alert("Thank You for your feedback!!!")
    }
    userName.value ="";
    userEmail.value ="";
    userComment.value ="";
})

var navbar = document.querySelector(".side-navbar")

function display(){
    navbar.style.left= "0";
    navbar.style.transition="2s"
}

function closeNavBar(){
    navbar.style.left= "-60%";
    navbar.style.transition="2s"
}