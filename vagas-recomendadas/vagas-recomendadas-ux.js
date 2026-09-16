const filterButtons = document.querySelectorAll(".filters-used button:not(.clear)");
const clearButton = document.querySelector(".filters-used .clear");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => button.remove());
});

clearButton.addEventListener("click", () => {
  filterButtons.forEach((button) => button.remove());
});
