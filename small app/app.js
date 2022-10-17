const Btn = document.querySelector(".myBtn");
const addText = document.querySelector("[name='text']");

function inserText(text) {
  if (text === "") return;
  textData.push(text);
  const li = document.createElement("li");
  const mainArea = document.querySelector("#myList");
  mainArea.appendChild(li).innerHTML = `${capitalizeFirstLetter(
    text
  )}<span><button id="ListEdit">Edit</button> <button id="liClear">X</button></span>`;
  localStorage.setItem("text", JSON.stringify(textData));
  addText.value = "";
}

const existingtext = JSON.parse(localStorage.getItem("text")) || [];
const textData = [];
const textToErase = existingtext;

for (ele of existingtext) {
  inserText(capitalizeFirstLetter(ele));
}

function capitalizeFirstLetter(str) {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

  return capitalized;
}

Btn.addEventListener("click", () => {
  inserText(addText.value);
});

addText.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".myBtn").click();
    addText.value = "";
  }
});

let allList = document.querySelectorAll("li");

function resfreshPage() {
  window.location.reload();
}

document.body.addEventListener(
  "mousedown",
  function (e) {
    console.log(e.target);
    console.log(e.clientY);
    if (e.target === document.querySelector("#ListEdit")) {
      const inputEdit = document.createElement("input");
      const parentEle = document.querySelector("#ListEdit").closest("li");
      inputEdit.style.position = "absolute";
      inputEdit.classList.add("editor");
      parentEle.appendChild(inputEdit);
      inputEdit.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          const clearNode = e.target.closest("li");
          const index = Array.from(clearNode.parentElement.children).indexOf(
            clearNode
          );

          textData.splice(index, 1, inputEdit.value);

          localStorage.setItem("text", JSON.stringify(textData));

          console.log(textData);

          console.log(`Text Block Erased`);
          window.resfreshPage();
        }
      });
    }

    if (e.target.nodeName === "LI") {
      e.target.style.textDecorationLine = "line-through";
    }
    if (e.target.nodeName === "DIV") {
      document.querySelector(".modalBtn").click();
    } else if (e.target.matches("#liClear")) {
      const liNodes = document.querySelectorAll("li");
      const clearNode = e.target.closest("li");
      const index = Array.from(clearNode.parentElement.children).indexOf(
        clearNode
      );

      textData.splice(index, 1);

      localStorage.setItem("text", JSON.stringify(textData));

      console.log(textData);

      console.log(`Text Block Erased`);

      liNodes[index].remove();
      // liNodes[index].style.pointerEvents = "none";
      // window.resfreshPage()
    }
  },
  false
);

//modal under construction.

const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modalBtn");
const modalOpen = document.querySelector("#modalOpen");

modalClose.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target === modalClose) {
    modal.style.display = "none";
  }
});

modalOpen.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target === modalOpen) {
    modal.style.display = "flex";
  }
  return;
});

///
const textSquare = document.querySelector("#textSquare");
const btnMenudrop = document.querySelector("#btnMenu");
const dropMenu = document.querySelector(".drop_downMenu");

btnMenudrop.addEventListener("click", function (e) {
  if (e.target.matches("#btnMenu") || e.target.closest("drop_downMenu"))
    btnMenudrop.classList.toggle("active");
  console.log(e.target);
});

window.addEventListener("mouseup", function (event) {
  if (event.target != btnMenudrop && event.target.parentNode != btnMenudrop) {
    btnMenudrop.classList.remove("active");
  }
});
