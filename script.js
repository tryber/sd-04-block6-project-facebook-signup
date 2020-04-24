let btnLogin;
let btnRegister;
let user;

let name;
let lastName;
let phoneEmail;
let newPassword;
let birthday;
let gender;

window.onload = function () {
  btnLogin = document.getElementById('button-login');
  btnRegister = document.getElementById('facebook-register');
  user = document.getElementById('user-email-phone');

  name = document.getElementById('name');
  lastName = document.getElementById('last-name');
  phoneEmail = document.getElementById('phone-email');
  newPassword = document.getElementById('new-password');
  birthday = document.getElementById('birthday');
  gender = document.getElementsByName('gender');

  btnLogin.addEventListener('click', function () {
    alert(user.value);
  });

  btnRegister.addEventListener('click', function () {
    alert(name.value);
    alert(lastName.value);
    alert(phoneEmail.value);
    alert(newPassword.value);
    alert(birthday.value);
    alert(gender[0].value);
  });
};
