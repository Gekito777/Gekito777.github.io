const btn = document.querySelector("#burger_container");
const menuDrop = document.querySelector("#dropmenu");
const aTag = document.querySelectorAll("a");

document.addEventListener("mousedown", function (i) {

  if (i.target === btn || i.target.closest(".burger")){
    menuDrop.classList.toggle("active");
    btn.classList.toggle("active")
    
  } else if (i.target.matches("#menu_container") || !i.target.parentNode) {
    menuDrop.classList.remove("active");
    btn.classList.remove("active");
    
  }
  
  });

