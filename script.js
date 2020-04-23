let userEmailInput;

function OnLoginButton() {
  alert(userEmailInput.value);
}

function SetVariables() {
  userEmailInput = document.getElementById('user-email-phone');
}

function SetEvents() {
  document.getElementById('button-login').addEventListener('click', OnLoginButton);
}

window.onload = function () {
  SetVariables();
  SetEvents();
};
