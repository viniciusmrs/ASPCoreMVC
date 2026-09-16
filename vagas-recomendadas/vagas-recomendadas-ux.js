const guideButton = document.getElementById("showGuide");
const guidePanel = document.getElementById("guidePanel");
const filterButtons = document.querySelectorAll(".filters-used button:not(.clear)");
const clearButton = document.querySelector(".filters-used .clear");

guideButton.addEventListener("click", () => {
  guidePanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => button.remove());
});

clearButton.addEventListener("click", () => {
  filterButtons.forEach((button) => button.remove());
});
