window.onload = function () {
  const botaoEntrar = document.getElementById('button-login');
  const emailOuTelefone = document.getElementById('user-email-phone');
  function alertLogin() {
    alert(emailOuTelefone.value);
  }
  botaoEntrar.addEventListener('click', alertLogin);
};
