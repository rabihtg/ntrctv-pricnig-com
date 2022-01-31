const rangeInput = document.querySelector("#rangeInput");

rangeInput.addEventListener("input", function () {
  let value = ((this.value - this.min) / (this.max - this.min)) * 100;
  document.documentElement.style.setProperty(
    "--color-change-value",
    value + "%"
  );
});

rangeInput.addEventListener("mousedown", function () {
  document.documentElement.style.setProperty("--slider-cursor", "grabbing");
  document.documentElement.style.setProperty("--brightness-val", "75%");
});
rangeInput.addEventListener("mouseup", function () {
  document.documentElement.style.setProperty("--slider-cursor", "pointer");
  document.documentElement.style.setProperty("--brightness-val", "100%");
});
