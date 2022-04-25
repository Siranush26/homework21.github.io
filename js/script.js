//Task 1
function toggleButton(){
       document.querySelector("#button")
    if(document.getElementById("login").style.display ==="none"){
       document.getElementById("login").style.display ="block";
    }
  else{
    document.getElementById("login").style.display ="none"
  }
}

//Task2
function lamp(){
    let picture=document.querySelector("#new")
    picture.classList.add('bg_yellow')
    
    }
    
    
 function lamp2(){
        let yell=document.querySelector(".lam")
        yell.classList.remove("lam")
        yell.classList.add('yellow2')
        
        }


//Task 3
function date(){
    d=new Date();
    let days=d.getDate()+' '+d.toString().substr(4,3)+','+" "+d.getFullYear();
    document.getElementById("day").innerText=days;
    if(document.getElementById("day").style.display ==="none"){
        document.getElementById("day").style.display ="block";
     }
   else{
     document.getElementById("day").style.display ="none"
   }
}



//Task 4

let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
