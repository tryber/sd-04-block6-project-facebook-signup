let btnLogin;
let user;

window.onload = function () {
  btnLogin = document.getElementById('button-login');
  user = document.getElementById('user-email-phone');

  btnLogin.addEventListener('click', function () {
    alert(user.value);
  });
};
