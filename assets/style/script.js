const toggleButton = document.getElementsByClassName("toggle-menu")[0];
const navbar = document.getElementsByClassName("nav-link")[0];

toggleButton.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
