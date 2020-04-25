const btLogar = document.getElementById('button-login');
const email = document.getElementById('user-email-phone');

function exibeLogin() {
  alert(email.value);
}

window.onload = function () {
  btLogar.onclick = exibeLogin;
};
