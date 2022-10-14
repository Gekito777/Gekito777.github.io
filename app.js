const btn = document.querySelector("#burger_container");
const menuDrop = document.querySelector(".dropmenu");

// btn.addEventListener("click", function (i) {});

document.addEventListener("mousedown", function (i) {
  console.log(i.target.closest);
});

document.body.addEventListener(`click`, function (e) {
  console.log(e.target.closest);
});
