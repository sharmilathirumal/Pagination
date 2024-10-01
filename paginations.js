var navbar = document.querySelector(".side-navbar")

function displayContent(){
    navbar.style.left= "0";
    navbar.style.transition="2s"
}

function closeNavBarLink(){
    navbar.style.left= "-60%";
    navbar.style.transition="2s"
}

var productContainer = document.getElementById("products");
var search = document.getElementById("search");
var productlist = productContainer.querySelectorAll("div");
var paginationSection = document.getElementById("paginatin-container");
var prod = document.getElementById("products").getElementsByTagName("div");
search.addEventListener("keyup", function () {
  event.preventDefault();
  var enteredValue = event.target.value.toLowerCase();
  for (count = 0; count < productlist.length; count += 1) {
    var productName = productlist[count].querySelector("p").textContent;

    if (productName.toLowerCase().indexOf(enteredValue) < 0) {
      productlist[count].style.display = "none";
    } else {
      productlist[count].style.display = "block";
    }
  }
  paginationSection.style.display ="none";
});

//pagination

var paginationNumber = document.getElementById("pagination-number");
  var display = 8;
  var count = 1;
  var buttoncount = Math.ceil(prod.length / display);
  //console.log(paginationNumber)

    for (let i = 1; i <=buttoncount; i++){
      var newbutton = document.createElement("button");
      newbutton.innerHTML = i;
      //console.log(newbutton)
      paginationNumber.appendChild(newbutton);
    }
  var previousButton =document.getElementById("prev-button")
  var nextButton =document.getElementById("next-button")
  previousButton.setAttribute("disabled",true);
  previousButton.style.color="gray";

  function main(pageNum){
var nextPage = display * pageNum;
var prevPage = display * (pageNum -1);
for(let i=0;i<prod.length;i++){
  prod[i].style.display="none";
  if(i<nextPage && i>=prevPage){
    prod[i].style.display="block";
  }
}
  }
   
  main(1);

  document.getElementById("prev-button").addEventListener("click",prev);
  document.getElementById("next-button").addEventListener("click",next);

  var buttonNumbers = paginationNumber.getElementsByTagName("button");

  for( let i=0;i<buttonNumbers.length;i++){
    buttonNumbers[i].addEventListener("click",buttonClick)

  }
  buttonNumbers[count-1].classList.add("active");
function buttonClick(){
    buttonNumbers[count-1].classList.remove("active");
    if(this.innerHTML == buttoncount){
      nextButton.setAttribute("disabled",true);
      nextButton.style.color="gray";
      previousButton.removeAttribute("disabled");
      previousButton.style.color ="black";
      
    }

    else if(this.innerHTML ==1){
      nextButton.removeAttribute("disabled");
      nextButton.style.color="black";
      previousButton.setAttribute("disabled",true);
      previousButton.style.color ="gray";
    }

    else{
      nextButton.removeAttribute("disabled")
      nextButton.style.color="black"
      previousButton.removeAttribute("disabled")
      previousButton.style.color="black"
    }

    count = this.innerHTML;
    main(count);
    this.classList.add("active");
  }
  
  function next(){
    previousButton.removeAttribute("disabled");
    previousButton.style.color="black";
    if(count !==buttoncount){
      buttonNumbers[count-1].classList.remove("active");
      buttonNumbers[count].classList.add("active");
      count++;
    }
    if(count ==buttoncount){
      nextButton.setAttribute("disabled",true);
      nextButton.style.color ="gray";
    }
    main(count);
  }

  function prev(){
    nextButton.removeAttribute("disabled");
    nextButton.style.color ="black";
    if(count !==1){
      buttonNumbers[count-1].classList.remove("active");
      buttonNumbers[count-2].classList.add("active");
      count--;
    }
    if(count ===1){
      previousButton.setAttribute("disabled",true);
      previousButton.style.color ="gray";
    }
    main(count);
  }

 