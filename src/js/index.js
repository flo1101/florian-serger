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
    interval: 4000
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

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add("hideNav");
    } else {
        nav.classList.remove("hideNav");
    }
    lastScrollY = window.scrollY
})

// Cursor
let cursor = document.querySelector("#cursor");
document.addEventListener("mousemove", e => {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
})