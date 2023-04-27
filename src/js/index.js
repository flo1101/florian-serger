
//Page Load
window.addEventListener("load", () => {
    document.querySelector("*").style.scrollBehavior = "unset";
    window.scrollTo(0, 0);
    document.querySelector("*").style.scrollBehavior = "smooth";
})

// Splide
const workSlider = new Splide( '.splide', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    snap    : true,
    arrows: false,
    perPage: 8,
    autoplay: true,
    pagination: false,
    interval: 3000,
    pauseOnHover: false
} );

workSlider.mount();

// Sidebar Menu
const menuBtn = document.querySelector(".btn-menu");
const closeMenuOnClick = document.querySelectorAll(".close-menu-onClick");

const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("showMenu");
})

closeMenuOnClick.forEach(el => {
    el.addEventListener("click", () => {
        menu.classList.toggle("showMenu");
    })
})

// Navbar
const nav = document.querySelector("nav");
let lastScrollY = window.scrollY;

nav.addEventListener("animationend", () => {
    document.querySelector("nav").style.opacity = "1";
    document.body.style.overflow = "visible";
})

window.addEventListener("scroll", () => {
    const top = document.querySelector('body').offsetTop;
    if (lastScrollY < window.scrollY && top === 0) {
        nav.classList.add("hideNav");
    } else {
        nav.classList.remove("hideNav");
    }
    lastScrollY = window.scrollY
    
})

// // Work Hover-Cursor
let cursor = document.querySelector(".visit-cursor");
document.addEventListener("mousemove", e => {
    let x = e.clientX - 55;
    let y = e.clientY - 55;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
})

const slides = document.querySelectorAll(".slide");

slides.forEach(slide => {
    slide.addEventListener("mouseenter", () => {
        cursor.style.transform = "scale(1)";
    })
    slide.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(0)";
    })
})