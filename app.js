const btn = document.querySelector("#burger_container");
const menuDrop = document.querySelector("#dropmenu");

// btn.addEventListener("click", function (i) {});

document.addEventListener("mousedown", function (i) {
  if (i.target === btn || i.target.closest(".burger")) {
    menuDrop.classList.toggle("active");
  } else if (i.target === menuDrop) return;
  else if (
    !i.target.matches("#burger_container") ||
    !i.target.closest(".burger")
  ) {
    menuDrop.classList.remove("active");
  }
});

// document.body.addEventListener(`click`, function (e) {
//   console.log(e.target.closest);
// });
