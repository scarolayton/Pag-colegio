let menu = document.querySelector("header")

document.querySelector(".hamburger-menu").addEventListener("click", () => {
    menu.classList.toggle("show");
})


menu.querySelector(".fas").addEventListener("click", () => {
    menu.querySelectorAll(".header__container--a").forEach((subMenu) => {
        subMenu.classList.toggle("showSubMenu");
    })
})