const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = e.target.elements[0].value;

  alert(userName);
});
