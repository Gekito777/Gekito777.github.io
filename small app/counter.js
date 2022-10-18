const countermeter = document.querySelector("#counter");
const counterInput = document.querySelector("#newText");
let counter = 0;
let maxCount = 31;
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

  if ( counterInput.value.length !== maxCount) {   


    
    countermeter.innerText = `${counterInput.value.length}/30`;
    let newcount = parseInt(countermeter.innerText)
    console.log(e)}

  
});