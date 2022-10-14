const btn = document.querySelector("#burger_container");
const menuDrop = document.querySelector("#dropmenu");

// btn.addEventListener("click", function (i) {});

document.addEventListener("mousedown", function (i) {
  if (i.target.matches("#burger_container") || i.target.closest(".burger")) {
    menuDrop.classList.toggle("active");
    console.log(i.target);
  } else if (
    !i.target.matches("#burger_container") ||
    !i.target.closest(".burger")
  ) {
    menuDrop.classList.remove("active");
    console.log(i.target);
  }
});

// document.body.addEventListener(`click`, function (e) {
//   console.log(e.target.closest);
// });
