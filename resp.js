hamberger = document.querySelector('.hamberger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
right = document.querySelector('.right')

hamberger.addEventListener('click', ()=>{
    right.classList.toggle('visibility-resp');
    navList.classList.toggle('visibility-resp');
    navbar.classList.toggle('height-nav-resp');
})


