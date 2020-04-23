const entryButton = document.getElementById('button-login');
const emailInput = document.getElementById('user-email-phone');
const passInput = document.getElementById('user-password');

entryButton.addEventListener('click', function () {
  alert(emailInput.value);
});
