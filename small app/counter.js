const countermeter = document.querySelector("#counter");
const counterInput = document.querySelector("#newText");

let maxCount = 28;
let mincount = 2
function counterHandler(){
  let counter = parseInt(counterInput.value.length)
    countermeter.innerText = `${counter}/30`;
  };
counterInput.addEventListener('input', function(e){
  let counter = counterInput.value.length;
  if(countermeter.innerText.length < 2) return;
  if(e.key === "Backspace" || e.key === "Delete") {
  counterHandler();
  };

  if (counter !== maxCount || counter !== mincount) {   
    counterHandler();
  }
  else if (counterInput.value.length === 1){
    countermeter.textContent = "0";
  }
});
