function toggleMenu(){
    const menu = document.querySelector(".menu-links"); //targeting the case
    const icon = document.querySelector(".hamburger-icon"); //targeting the case
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}