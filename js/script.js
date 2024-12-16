"use strict";

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close_modal = document.querySelector('.close-modal');
const show = document.querySelectorAll('.show');
let form = document.querySelectorAll('.form-control');
let formedit = document.querySelectorAll('form-control').style.border = " 2px solid red "





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
    document.getElementById('demo').innerHTML = "I'm a Web desginer based in Herat,AFG"
}
// form 
const formhandler = function () {
    if (form === 0) {
        return formedit


    }
    else {
        alert("dldll")
    }
}
