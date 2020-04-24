const btnLogin = document.getElementById('button-login');
const email = document.getElementById('user-email-phone');
const pass = document.getElementById('user-password');

btnLogin.addEventListener('click', () => {
  event.preventDefault();
  if (email.value || pass.value) {
      alert(`Confira as Informações:
      Email: ${email.value}
      Senha: ${pass.value}`);
  }
});
