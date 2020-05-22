let modalOpen = document.querySelector(".modal-js");
let modalClose = document.querySelector(".modal__close");
let modalOverlay = document.querySelector(".modal-overlay");
let modal = document.querySelector(".modal");
let modalName = modal.querySelector("input[type='text']");

modalOpen.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("modal--open");
    modalOverlay.classList.add("modal-overlay--open");
    modalName.focus();
})

modalClose.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("modal--open");
    modalOverlay.classList.remove("modal-overlay--open");
})

modalOverlay.addEventListener("click", () => {
    modal.classList.remove("modal--open");
    modalOverlay.classList.remove("modal-overlay--open");  
})