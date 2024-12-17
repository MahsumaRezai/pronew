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

// Optional: Check on input change
document.getElementById("form-control").addEventListener("input", checkInput);

function downloadCVt() {
    const cvData = {
        name: "John Doe",
        email: "john.doe@example.com",
        experience: ["Job 1", "Job 2"],
    };
    const cvString = JSON.stringify(cvData, null, 2);  
    const blob = new Blob([cvString], { type: "application/json" }); // Adjust the type if it's not JSON 
    // Create a download link using a Blob URL 
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'myCV.json'; // Or 'myCV.txt', etc.  depending on the data type 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url); // Clean up the URL 
}
// Example button to trigger the download 

function downloadCV() {
    document.getElementById('downloadLink').click();
} 
