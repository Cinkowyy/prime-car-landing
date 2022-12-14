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

//closing menu when click link

const links = navbar.querySelectorAll("nav a.nav-link");
links.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("opened");
  });
});
