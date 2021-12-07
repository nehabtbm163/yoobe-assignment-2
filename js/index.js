'use strict'
console.log("js loaded");

//get reference to our inputs
//name
const nameInput = document.querySelector('#name');
//email
const emailInput = document.querySelector('#email');
//message
const messageInput = document.querySelector('#message');


//get reference to our error messages
//name error
const nameError = document.querySelector('#nameError');
//email error
const emailError = document.querySelector('#emailError');
//message error
const messageError = document.querySelector('#messageError');

const submitBtn = document.querySelector('#submit');
//listen for submit
//listen for a 'click' event. Once it has been heard, call the handleSubmitBtn function
submitBtn.addEventListener('click', handleSubmitBtn)

//if the submit button has been pressed, validate
function handleSubmitBtn(event) {
    event.preventDefault() //stops the form from refreshing the page
    let hasError = false;
    nameError.innerHTML = '';
    emailError.innerHTML = '';
    messageError.innerHTML = '';
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    messageError.style.display = 'none';

    if (nameInput.value === '') {
        hasError = true;
        nameError.innerHTML = 'Please enter a name';
        nameError.style.display = 'block';
    } else {
        if (nameInput.value.length < 2 || nameInput.value.length > 40) {
            hasError = true;
            nameError.innerHTML = 'Please enter a valid name between 2 to 40 characters';
            nameError.style.display = 'block';
        }
    }

    if (emailInput.value === '') {
        hasError = true;
        emailError.innerHTML = 'Please enter an email';
        emailError.style.display = 'block';
    } else {
        if (emailInput.value.length < 2 || emailInput.value.length > 40) {
            hasError = true;
            emailError.innerHTML = 'Please enter a valid email between 2 to 40 characters';
            emailError.style.display = 'block';
        }
    }

    if (messageInput.value === '') {
        hasError = true;
        messageError.innerHTML = 'Please enter a message';
        messageError.style.display = 'block';
    } else {
        if (messageInput.value.length < 2 || messageInput.value.length > 200) {
            hasError = true;
            messageError.innerHTML = 'Please enter a valid message between 2 to 200 characters';
            messageError.style.display = 'block';
        }
    }
    if(!hasError){
        console.log("success");
    }
}
