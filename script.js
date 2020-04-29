const loginForm = document.querySelector('#login-form');
const newUserForm = document.querySelector('#new-user-form');


loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = e.target.elements[0].value;

  alert(userName);
});

newUserForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let newUserData = '';

  const formElements = e.target.elements;
  for (const element of formElements) {
    if (
      element.value === ''
      && element.name !== 'gender'
      && element.id !== 'facebook-register'
    ) {
      alert('Dados inválidos');

      return;
    }

    if (!getRadioValue(e.target, 'gender')) {
      alert('Dados inválidos');

      return;
    }

    if (element.id !== 'facebook-register') {
      if (element.id === 'name') {
        newUserData += element.value;
      } else if (element === getRadioValue(e.target, 'gender') || element.name !== 'gender') {
        newUserData += ` - ${element.value}`;
      }
    }
  }
  alert(newUserData);
});

function getRadioValue(form, name) {
  const radios = form.elements[name];
  let selectedRadio = '';

  for (const radio of radios) {
    if (radio.checked) {
      selectedRadio = radio;
    }
  }
  return selectedRadio;
}
