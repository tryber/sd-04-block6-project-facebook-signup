const email = document.getElementById('user-email-phone');
const login = document.getElementById('button-login');


//  REQUISITO 7 mostrar email ao clicar no botão
login.addEventListener('click', function showEmail() {
  alert(email.value);
});
