function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".cburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}