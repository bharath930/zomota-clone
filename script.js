// Hamburger Menu
document.getElementById("menu-toggle").onclick = function () {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
};

// Login Modal Controls
function openLogin() {
  document.getElementById("login-model").style.display = "flex";
}
function closeLogin() {
  document.getElementById("login-model").style.display = "none";
}