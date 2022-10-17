const countermeter = document.querySelector("#counter");
const counterInput = document.querySelector("#newText");
let counter = 0;
counterInput.addEventListener("input", function (j) {
  if (counterInput.nodeValue !== "") {
    counter++;
    countermeter.textContent = counter;
    console.log(j);
  } else if (j.inpuType === "deleteContentBackward") counter--;
});
