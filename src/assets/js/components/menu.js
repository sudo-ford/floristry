let menuBtn = document.querySelector(".menu__btn--js");
let menu = document.querySelector(".menu--js");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("menu__btn--active");
    menu.classList.toggle("menu--active");
})