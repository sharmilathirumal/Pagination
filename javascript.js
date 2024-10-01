var navbar = document.querySelector(".side-navbar")

function display(){
    navbar.style.left= "0";
    navbar.style.transition="2s"
}

function closeNavBar(){
    navbar.style.left= "-60%";
    navbar.style.transition="2s"
}

/*
// collections page fuctions
var productContainer = document.getElementById("products");
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    event.preventDefault();
    var enteredValue = event.target.value.toLowerCase()
    for(count=0;count<productlist.length;count+=1){
        var productName = productlist[count].querySelector("p").textContent

        if(productName.toLowerCase().indexOf(enteredValue)<0){
            productlist[count].style.display="none"
        }

        else{
            productlist[count].style.display="block"
        }
    }
})

//pagination link
//let pagenation = document.querySelector("paginatin-section")
//console.log(pagenation);
let pagination = document.querySelector(".paginatin-section") 
let array =new Array(pagination.querySelectorAll("a"))
   /* console.log(pagination)
    console.log(array[0][0].href)

let totalPage =5;
let currentPage =1;
let prevButton = document.getElementById("prev")
let nextButton = document.getElementById("next")

prevButton.addEventListener("click",function(){
    event.preventDefault();
    prevButton.style.backgroundColor="#1D232C";
    prevButton.style.color= "white";
    console.log(currentPage ===1);
   
    if(currentPage ===1){
       prevButton.disabled;
        prevButton.style.backgroundColor="white";
        prevButton.style.color="black";
        prevButton.style.cursor="default";
    }

    if(currentPage ===5){
        nextButton.disabled;
         nextButton.style.backgroundColor="white";
         nextButton.style.color="black";
         nextButton.style.cursor="default";
     }
    
})



for(i=0;i<links.length;i++){
        console.log(link[i]);
        link[i].addEventListener('click',function(event){
            event.preventDefault();
            event.target.style.backgroundColor='white';
            event.target.style.color='black';
        })
        
    }
    

function addAndRemoveProperty(event){
    event.target.preventDefault();
    let links = document.querySelectorAll(".link");
    for(i=0;i<links.length;i++){
        console.log(links[i]);
            links[i].style.backgroundColor='white';
       
    }
}

/*var activeButton = document.getElementsByClassName("link")
let currentValue =1;
function activeLink(){
    for(l of activeButton){
        l.classList.remove("active");
    }
   
}*/