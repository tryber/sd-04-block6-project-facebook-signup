const entryButton = document.getElementById('button-login');
const emailInput = document.getElementById('user-email-phone');

entryButton.addEventListener('click', function () {
  alert(emailInput.value);
});
