const btLogar = document.getElementById('button-login');
const email = document.getElementById('user-email-phone');
const dataNasc = document.getElementById('data-nasc');

function exibeLogin() {
    alert(email.value);
}

window.onload = function () {
    btLogar.onclick = exibeLogin;
    dataNasc.DatePickerX.init();
}