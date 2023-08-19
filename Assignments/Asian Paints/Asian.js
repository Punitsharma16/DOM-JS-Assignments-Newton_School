const blocks = document.getElementsByClassName("block");
const numInput = document.getElementById("wall_id");
const colorInput = document.getElementById("wall_color");
const applyButton = document.getElementById("apply-btn");
const resetButton = document.getElementById("reset-btn");
function applyColor(){
    for(let i=0; i<blocks.length; i++){
        if(blocks[i].id === numInput.value){
        blocks[i].style.backgroundColor = colorInput.value;
        }
    }
}

function resetColor(){
    for(let i=0; i<blocks.length; i++){
        blocks[i].style.backgroundColor = "transparent";
    }
}

applyButton.addEventListener("click",applyColor);
resetButton.addEventListener("click",resetColor);