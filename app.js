$(document).ready(function(){

$('.slider').slick({
    arrows: false,
    dots: true,
    appendDots:'.slider-dots',
    dotsClass: 'dots',
});

});


hamberger = document.querySelector('.hamberger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
right = document.querySelector('.right')

hamberger.addEventListener('click', ()=>{
    right.classList.toggle('visibility-resp');
    navList.classList.toggle('visibility-resp');
    navbar.classList.toggle('height-nav-resp');
})

/*
let hamberger = document.querySelector('.hamberger')
let cross = document.querySelector('.cross')
let mobileNav = document.querySelector('.mobile-nav')

hamberger.addEventListener('click', function(){
    mobileNav.classList.add('open');
})

cross.addEventListener('click', function(){
    mobileNav.classList.remove('open');
})



*/

/* download CV button */

function downloadFile(){
    var link = document.createElement("a");
    link.download = "CV";
    link.href = "./resume.png";
    link.click();
}

/* contact button */
let scrollButton = document.getElementById("scrollButton");
let targetSection = document.getElementById("contact");

scrollButton.addEventListener("click", function() {
  targetSection.scrollIntoView({behavior: "smooth", block: "start"});
});
