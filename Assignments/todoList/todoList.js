
const addButton =  document.querySelector(".todo-button");

addButton.addEventListener('click', (event)=>{
    event.preventDefault();
    const newDiv = document.createElement("div");
    const liEl = document.createElement("li");
    liEl.setAttribute("class","todo-item");
    liEl.textContent = document.querySelector(".todo-input").value;
    newDiv.appendChild(liEl);

    const compelteButton = document.createElement("button");
    compelteButton.setAttribute("class","complete-btn");
    compelteButton.textContent = "Completed";
    compelteButton.addEventListener('click',(event)=>{
        const parentElement = event.target.parentElement;
        const task = parentElement.querySelector(".todo-item");
    
        if(task.style.textDecoration == ""){
            task.style.textDecoration = "line-through solid rgb(0,0,0)";
        }else{
            task.style.textDecoration = "";
        }
    })

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class","trash-btn");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener('click', (event)=>{
            event.target.parentElement.remove();
         })

         newDiv.appendChild(compelteButton);
         newDiv.appendChild(deleteButton);

    document.querySelector(".todo-list").appendChild(newDiv);
})

