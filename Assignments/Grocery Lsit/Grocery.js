const AllPriceValues = document.querySelectorAll("[data-ns-test=price]");
const TableBody = document.querySelector("tbody");
// create elments
const tRow = document.createElement("tr");
const tCol = document.createElement("td");
const tCol2 = document.createElement("td");

let numOfClick = 0;

function calcTotal(){
    // remove The data on next click
    if(numOfClick > 0){
        const lastChild = TableBody.lastChild;
        TableBody.removeChild(lastChild);
    }
    // sum of all prices
    let sum = 0;
    AllPriceValues.forEach((el)=>{
        sum += parseInt(el.textContent);
    })
    // giving the values to th row
    tCol.textContent = "Grand Total";
    tCol2.setAttribute("data-ns-test","grandTotal");
    tCol2.textContent = sum;
    // append
    tRow.appendChild(tCol);
    tRow.appendChild(tCol2);
    TableBody.appendChild(tRow);
    // increase the num Of Click
    numOfClick++;
}
