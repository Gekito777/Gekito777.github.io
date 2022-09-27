const InputFields = document.querySelectorAll("input")
const btn = document.querySelector("#myBtn")
const formArea = document.querySelector("#formPrint")
const refreshBtn = document.querySelector("#refreshBtn")
const titles = [
    "Store",
    "Equipment",
    "Serial",
   " Make",
    "Issue",
    "Parts",
    "FSP",
    "Lift"
] 

refreshBtn.addEventListener("click", () => {
    location.reload();
})

btn.addEventListener("click", () => {
    
    printDoc()
})

function printDoc(){
        
    
    for(let i = 0; i < titles.length; i++){
        

        const li = document.createElement("li")
        formArea.appendChild(li).innerText = `${titles[i]}:  ${InputFields[i].value} `;
        InputFields[i].value = "";  
      
        
    };
 
}