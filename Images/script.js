const menu = document.querySelector("#menu");
const nav = document.querySelector(".links")

menu.onclick = () => {
    menu.classList.tooggle("bx-x");
    nav.classList.toogle("active");
}