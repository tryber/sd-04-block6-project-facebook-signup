
const loginEmail = document.getElementById('user-email-phone')
const loginForm = document.getElementById('fb-login-form')

loginForm.addEventListener('submit', function(event){
  event.preventDefault()
  alert(loginEmail.value)
})
