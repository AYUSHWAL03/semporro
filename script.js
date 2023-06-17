const menuBtn = document.getElementsByClassName("menu-btn");
const navList = document.getElementsByClassName("nav-list");
menuBtn[0].addEventListener("click",()=>{
    navList[0].classList.toggle("active-menu");
});

const sliderImg = document.querySelector(".sliderImg");
console.log(sliderImg);
const images = document.querySelectorAll(".cardView")
console.log(images);