const filtersPanel = document.getElementById("filtersPanel");
const toggleFilters = document.getElementById("toggleFilters");
const clearFilters = document.getElementById("clearFilters");
const chips = document.querySelectorAll(".quick-filter button");

toggleFilters.addEventListener("click", () => {
  filtersPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

clearFilters.addEventListener("click", () => {
  document.querySelectorAll(".filters input[type='checkbox']").forEach((item) => {
    item.checked = false;
  });
});

chips.forEach((chip) => {
  chip.addEventListener("click", () => chip.classList.toggle("active"));
});
