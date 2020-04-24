const btnLogin = document.getElementById('button-login');
const username = document.getElementById('name');
const email = document.getElementById('user-email-phone');
const pass = document.getElementById('user-password');
const register = document.getElementById('facebook-register');
const formRegister = document.getElementById('form-register');

function validate() {
  let valid = true;
  let genreChecked = false;
  [...formRegister.elements].forEach((field) => {
    if (['text', 'password'].indexOf(field.type) > -1 && field.value === '') {
      valid = false;
    }
    if (field.name === 'genre' && field.checked) {
      genreChecked = true;
    }
  });
  if (valid && genreChecked) {
    return true;
  }
  return false;
}

btnLogin.addEventListener('click', () => {
  event.preventDefault();
  if (email.value || pass.value) {
    alert(`${email.value}`);
  }
});

register.addEventListener('click', () => {
  event.preventDefault();
  const genre = document.querySelector('[name=genre]:checked');
  if (validate()) {
    alert(`${username.value} - ${genre.value}`);
  }
  else {
    alert('Dados Inválidos');
  }
});
