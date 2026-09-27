// Select the side navigation and buttons
var sidenav = document.getElementById("sidenav")
var menuToggle = document.getElementById("menu-toggle")
var closeNav = document.getElementById("close-nav")

menuToggle.addEventListener("click", function () {
    sidenav.style.right = "0"
})

closeNav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})