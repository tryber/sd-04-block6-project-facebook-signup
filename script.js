let userEmailInput;
let userPasswordInput;

function OnLoginButton() {
  alert(`Email/Number: ${userEmailInput} Password: ${userPasswordInput}`);
}

function SetVariables() {
  userEmailInput = document.getElementById('user-email-phone');
  userPasswordInput = document.getElementById('user-password');
}

function SetEvents() {
  document.getElementById('button-login').addEventListener('click', OnLoginButton);
}

window.onload = function () {
  this.SetVariables();
  this.SetEvents();
}
