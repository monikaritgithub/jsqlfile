var email = document.querySelector('#email')
var password = document.querySelector('#password')
var emailError = document.querySelector('.email-error');
var passwordError = document.querySelector('.password-error');
var message = document.querySelector('#card-header');

email.onkeyup =  function(){ 
    keyUpCheck(email, "b@b.com", emailError)
}
password.onkeyup = () => keyUpCheck(password, 'password',passwordError)

function keyUpCheck(inputType, checkValue, inputError) {
    if(inputType.value !== checkValue) {
        inputError.innerHTML = "Incorrect Credentials";
        inputType.classList.add("is-invalid");
    } else {
        inputError.innerHTML = "";
        inputType.classList.remove('is-invalid');
        enableSubmitButton();
    }
}

function enableSubmitButton() {
    email.value == "b@b.com" && password.value == "password" ? document.querySelector('#form-button').removeAttribute('disabled') : null;
}

document.querySelector('#form-button').onclick = function() {
    message.style.display = "none";
    email.value="";
    password.value=""
};

