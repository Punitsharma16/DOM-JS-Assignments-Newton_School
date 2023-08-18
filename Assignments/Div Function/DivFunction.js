function createDiv(width, height, text){
    width = width + "px";
    height = height + "px";

    let selectDiv = document.getElementById('container');
    let newDiv = document.createElement('div');
    newDiv.style.width = width;
    newDiv.style.height = height;
    newDiv.textContent = text;

    selectDiv.appendChild(newDiv);
}
createDiv(200,100, 'hello');


// Do not change this code
Window.createDiv = createDiv;