//"use strict";

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close_modal = document.querySelector('.close-modal');
const show = document.querySelectorAll('.show');






const hidemodal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');


}
const showmodal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');


}

for (let i = 0; i < show.length; i++) {
    show[i].addEventListener('click', showmodal)
    close_modal.addEventListener('click', hidemodal)

}

overlay.addEventListener('click', hidemodal);
modal.addEventListener('click', hidemodal);

// change the text 
function demo() {
    document.getElementById('demo').innerHTML = "I'm a Web desginer based in Herat,AFG";


}
// form 
function checkInput() {
    var inputField = document.getElementById("form-control");

    if (inputField.value.trim() === "") {
        inputField.classList.remove('valid');
        inputField.classList.add('invalid');
    } else {
        inputField.classList.remove('invalid');
        inputField.classList.add('valid');
    }
}
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting
    checkInput(); // Check the input when form is submitted
});

document.getElementById("form-control").addEventListener("input", checkInput);

function downloadCVt() {
    const cvData = {
        name: "Mahsoumeh ",
        email: "mahsuma.rezai@gmail.com",
        experience: [" ✔ 2024 : work on more 80 project in coding section three are in my GitHub account.",
            "✔ 2024 : work with CTI in Front-end team.",
            " ✔ 2023 :  Teaching coding for girls with online tools  .",


        ],
    };
    const cvString = JSON.stringify(cvData, null, 2);
    const blob = new Blob([cvString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'myCV.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
// Example button to trigger the download 

function downloadCV() {
    document.getElementById('downloadLink');
} 
