// Fade Animation

const fadeElements = document.querySelectorAll(
".card,.feature,.stat-box,.newsletter");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.2});

fadeElements.forEach(el=>{

el.classList.add("fade");

observer.observe(el);

});

// Search Button

const searchBtn=document.querySelector(".search-box button");

if(searchBtn){

searchBtn.addEventListener("click",()=>{

const value=document.querySelector(".search-box input").value;

if(value===""){

alert("Please enter a destination.");

}

else{

alert("Searching for: "+value);

}

});

}

// Newsletter

const subscribe=document.querySelector(".newsletter button");

if(subscribe){

subscribe.addEventListener("click",()=>{

const email=document.querySelector(".newsletter input").value;

const pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(pattern.test(email))

alert("Thank you for subscribing!");

else

alert("Enter a valid email address.");

});

}

// Scroll to Top Button

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>300||document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}