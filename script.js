//changing color on bar scroll

const navbar = document.querySelector(".topbar");

document.addEventListener("scroll", () => {
  if (window.scrollY >= 70) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//toggling mobile menu

const hamburgerIcon = document.querySelector(".hamburger-menu");

hamburgerIcon.addEventListener("click", () => {
  navbar.classList.toggle("opened");
});
