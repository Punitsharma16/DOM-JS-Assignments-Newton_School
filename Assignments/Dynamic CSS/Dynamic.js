const colorBox = document.getElementById("colorbox");
const colorButton = document.getElementById("colorchange");
const divText = document.getElementById("text-container");
const sizeChange = document.getElementById("fontsize");
const underlineButton = document.getElementById("underline");
const italicButton = document.getElementById("italic");
const boldButton = document.getElementById("bold");
const fontFamilyList = document.getElementById("list");
const getStyleButton = document.getElementById("getstyle");
const allDetails = document.getElementById("css-props");

colorButton.addEventListener('click', ()=>{
    divText.style.color = colorBox.value;
});

sizeChange.addEventListener("input", ()=>{
    divText.style.fontSize = sizeChange.value +"px";
});

underlineButton.addEventListener("click",()=>{
    if(divText.style.textDecoration !== "underline"){
        divText.style.textDecoration = "underline"
    }else{
        divText.style.textDecoration = "none";
    }
})

italicButton.addEventListener("click",()=>{
    if(divText.style.fontStyle !== "italic"){
        divText.style.fontStyle = "italic";
    }else{
        divText.style.fontStyle = "normal";
    }
})

boldButton.addEventListener("click", ()=>{
    if(divText.style.fontWeight !== "bold"){
        divText.style.fontWeight = "bold";
    }else{
        divText.style.fontWeight = "normal";
    }
})

fontFamilyList.addEventListener("change",()=>{
    divText.style.fontFamily = fontFamilyList.value;
})

getStyleButton.addEventListener("click",()=>{
    let props = window.getComputedStyle(divText);
    let csstext = `
    color : ${divText.style.color};
    font-size : ${sizeChange.value}px;
    text-decoration: ${divText.style.textDecoration === "underline" ?"underline":"none"};
    font-style : ${divText.style.fontStyle === "italic"? "italic":"none"};
    font-weight: ${divText.style.fontWeight === "bold"?"bold":"none"};
    `;
    allDetails.textContent = csstext;
})