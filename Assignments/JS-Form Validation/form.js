const ageInput = document.getElementById("q_age");
const errorHolder = document.getElementById("errors-holder");
const submitButton = document.querySelector("button");
const phoneCheckBox = document.getElementById("q_owns_phone");
const resultHolder = document.getElementById("result-holder");
function ageChange(e){
    if(ageInput.value < 5){
        errorHolder.textContent = "You need to be atleast 5 years old to participate";
        submitButton.disabled = true;
    }else{
        errorHolder.textContent = "";
        submitButton.disabled = false;
    }
}

// const  ownPhone = phoneCheckBox.checked;
function handleSubmit(e){
     const ageInput = document.getElementById("q_age").value;
    e.preventDefault();
    if(ageInput == "0"){
        errorHolder.textContent = "Please choose age";
        resultHolder.textContent = "";
        return;
    }else{
        errorHolder.textContent = "";
    }

    if(phoneCheckBox.checked){
        if(ageInput < 13){
            resultHolder.textContent = "You are too young to have a phone";
        }else{
            resultHolder.textContent = "Use your phone in moderation";
        } 
    }
    else{
        if(ageInput < 13){
            resultHolder.textContent = "You will get a phone soon";
        }else{
            resultHolder.textContent = "You should get a phone";
        }
    }
}

