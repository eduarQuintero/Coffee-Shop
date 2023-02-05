let botonMenu = document.querySelector(".header__boton-menu")
let menuLateral = document.querySelector(".menu-lateral")
let barraMenu = document.querySelector(".fa-bars")
let xMenu = document.querySelector(".fa-xmark")

botonMenu.addEventListener("click", () => {
    menuLateral.classList.toggle("mostrar")
    barraMenu.classList.toggle("ocultar")
    xMenu.classList.toggle("ocultar")
    console.log("completado")
})