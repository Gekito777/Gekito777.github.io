const countermeter = document.querySelector("#counter");
const counterInput = document.querySelector("#newText");
let counter = 0;
let maxCount = 31;

counterInput.addEventListener('keydown', function(e){

  if ( counterInput.value.length !== maxCount) {   


    
    countermeter.innerText = `${counterInput.value.length}/30`;
    let newcount = parseInt(countermeter.innerText)
    console.log(e)}

  
});