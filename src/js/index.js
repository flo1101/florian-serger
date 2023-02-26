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

