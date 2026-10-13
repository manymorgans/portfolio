function main() {
  const menuButton = document.getElementById("hamburger-menu");
  const menuPopup = document.getElementById("menu-popup");
  const closeX = document.getElementById("close-x");
  menuButton.onclick = () => {
    menuPopup.classList.remove("hidden");
  };
  closeX.onclick = () => {
    menuPopup.classList.add("hidden");
  };
  menuPopup.onmouseleave = () => {
    menuPopup.classList.add("hidden");
  };
}

main();
