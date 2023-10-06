function toggleMenu() {
    const menu = document.querySelector(".menu__links")
    const icon = document.querySelector(".nav__hamburger--icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}