const Btn = document.querySelector(".myBtn");
const addText = document.querySelector("[name='text']");

function inserText(text) {
  if (text === "") return;
  textData.push(text);
  const li = document.createElement("li");
  const mainArea = document.querySelector("#myList");
  mainArea.appendChild(li).innerHTML = capitalizeFirstLetter(text);
  localStorage.setItem("text", JSON.stringify(textData));
  const edit = document.createElement("button");
  edit.innerText = "Edit"
  edit.id = "ListEdit";
  const liClear = document.createElement("button");
  liClear.innerText = "X";
  liClear.id = "liClear";
  const span = document.createElement("span");
  span.appendChild(edit);
  span.appendChild(liClear);
  li.appendChild(span);
  addText.value = "";
 }

const existingtext = JSON.parse(localStorage.getItem("text")) || [];
const textData = [];
const textToErase = existingtext;

for (ele of existingtext) {
  inserText(ele.trim());
}

function capitalizeFirstLetter(str) {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalized;
}

Btn.addEventListener("click", () => {
  inserText(addText.value);
  countermeter.innerText = "0/30"
});

addText.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".myBtn").click();
    addText.value = "";
    document.querySelector("#counter").textContent = "0/30"
  }
});
let allList = document.querySelectorAll("li");
function resfreshPage() {
  window.location.reload();
}
document.body.addEventListener(
  "mousedown",
  function (e) {
    if (e.target.matches("#ListEdit")) {
      const clearNode = e.target.closest("li");
      const index = Array.from(clearNode.parentElement.children).indexOf(
        clearNode
      );
      const li = document.createElement("li")
        const parent = document.querySelector("ol")
      const inputEdit = document.createElement("input");
      inputEdit.classList.add("editor"); 
      inputEdit.style.transition = "200ms ease-in";
      parent.replaceChild(inputEdit, allList[index]);
      const backBtn = document.createElement("button")
      backBtn.classList.add("backBtn")
      allList[index].appendChild(backBtn)
      inputEdit.addEventListener("keyup", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          console.dir(e.target.parentElement)
          textData.splice(index, 1, inputEdit.value);
          localStorage.setItem("text", JSON.stringify(textData));
          resfreshPage();
          
         
        }
      });
    }
    if (e.target.matches("li") || !e.target.closest("ol")) {
      return;
    }
    if (e.target.nodeName === "DIV") { 
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
    }
  },
  false
);
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
