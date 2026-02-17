const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.onclick = () => {
  navbar.classList.toggle("open");
};
