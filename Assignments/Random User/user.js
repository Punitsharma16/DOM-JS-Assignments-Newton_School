const imageElement = document.getElementById("profile-image");
const userName = document.getElementById("user-name");
const infoButtons = document.querySelectorAll(".additional-info-button");
const additionalInfo = document.getElementById("additional-info");
const getUser = document.getElementById('get-user');

const fetchUserData = () => {
    fetch("https://randomuser.me/api/")
    .then((res) => {
    return res.json();
    })
    .then((data) => {
        const {email,phone,name: {first, last },
        dob: { age },picture: { large },
        } = data.results[0];

        const info = { age: age, email: email, phone: phone };

        //  Image
        imageElement.setAttribute("src", large);

        //  Name
        userName.textContent = `${first} ${last}`;

        infoButtons.forEach((button) => {
        button.addEventListener("click", (ev) => {
            // console.log(ev.target.dataset.attr2);
            additionalInfo.textContent = info[ev.target.dataset.attr];
        });
        });
    })
}

fetchUserData();
getUser.addEventListener('click', fetchUserData );