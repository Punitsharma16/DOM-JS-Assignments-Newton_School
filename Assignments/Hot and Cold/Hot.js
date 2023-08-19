const buttonId = document.getElementById("btn");
const emptyPtag = document.getElementById("num");
function randomNum(){
    // Math.round(Math.random()*40)-20;
    emptyPtag.textContent = Math.floor(Math.random()*40)-20;
}
buttonId.addEventListener("click",randomNum);