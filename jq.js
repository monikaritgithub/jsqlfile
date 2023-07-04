
$('#email').keyup(function(){
    keyupCheck($('#email'), 'b@b.com', $('.email-error'))
});
$('#password').keyup(function(){
    keyupCheck($('#password'), 'password', $('.password-error'))
})
function keyupCheck(inputType, checkValue, inputError) {
    if(inputType.val() !== checkValue) {
        inputError.html("Incorrect");
        inputType.addClass("is-invalid");
    } else {
        inputError.html("");
        inputType.removeClass("is-invalid")
        enableSubmitButton()
    }
}
function enableSubmitButton() {
    $('#email').val() == "b@b.com" && $('#password').val() == "password" ? $('#form-button').removeAttr("disabled") : $('#form-button').attr("disabled",true);
}

$('#form-button').click(function(){
    $('#card-header').show();
    $('#email').val("");
    $('#password').val("");
})

