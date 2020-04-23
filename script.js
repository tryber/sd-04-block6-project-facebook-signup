let userEmailInput;
let userPasswordInput;

function OnLoginButton() {
  alert(`Email/Number: ${userEmailInput.value} Password: ${userPasswordInput.value}`);
}

function SetVariables() {
  userEmailInput = document.getElementById('user-email-phone');
  userPasswordInput = document.getElementById('user-password');
}

function SetEvents() {
  document.getElementById('button-login').addEventListener('click', OnLoginButton);
}

window.onload = function () {
  SetVariables();
  SetEvents();
};
