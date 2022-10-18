const countermeter = document.querySelector("#counter");
const counterInput = document.querySelector("#newText");
let counter = 0;
let maxCount = 30;

counterInput.addEventListener('keydown', function(e){

  if ( counterInput.value.length !== maxCount) {   

    let counter = counterInput.value.length
    
    countermeter.innerText = `${counter+1} /30`;
    let newcount = parseInt(countermeter.innerText)
    console.log(e)}

  
});