const countermeter = document.querySelector("#counter");
const counterInput = document.querySelector("#newText");
let counter = 0;
let maxCount = 30;
// counterInput.addEventListener("input", function (j) {
// if(counterInput.value !== "" || counter < 30)
// { counter++
//   countermeter.innerText = `${counter}/30`;
//   // console.log(countermeter.innerText.length)
//   console.log(j)
// };
//   return counter;
// });
counterInput.addEventListener('keydown', function(e){

  if (counterInput.value !== "" || counter === 30) {   

    counter++
    countermeter.innerText = `${counter}/30`;
    let newcount = parseInt(countermeter.innerText)
    console.log(e)}

  if(e.key !== "Backspace" || e.key !== "Delete"){ 
   
    
  }

  else return;
});