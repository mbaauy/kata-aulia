const menuToggle = document.querySelector(".burger-menu input");
const navBar = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
    navBar.classList.toggle("slide");
});
