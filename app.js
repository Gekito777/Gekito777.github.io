const btn = document.querySelector("#burger_container");
const menuDrop = document.querySelector("#dropmenu");
const aTag = document.querySelectorAll("a");
// btn.addEventListener("click", function (i) {});

document.addEventListener("mousedown", function (i) {
  if (i.target === btn || i.target.closest(".burger")) {
    menuDrop.classList.toggle("active");
  } else if (i.target.matches("#menu_container") || !i.target.parentNode) {
    menuDrop.classList.remove("active");
    console.log(i.target.parentNode);
  }
});

// window.addEventListener("mouseup", function (e) {
//   if (e.target != menuDrop && e.target.parentNode != menuDrop) {
//     console.log(e);
//   }
// });

// document.body.addEventListener(`click`, function (e) {
//   console.log(e.target.closest);
// });
