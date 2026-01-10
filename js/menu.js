const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("open");

  if (menu.classList.contains("open")) {
    toggle.textContent = "CLOSE";
  } else {
    toggle.textContent = "MENU";
  }
});