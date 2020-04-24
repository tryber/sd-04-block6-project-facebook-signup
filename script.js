const loginButton = document.getElementById('button-login')
const loginEmail = document.getElementById('user-email-phone')
const loginPassword = document.getElementById('user-password')
const loginForm = document.getElementById('fb-login-form')

loginForm.addEventListener('submit', function(event){
  event.preventDefault()
  alert(loginEmail.value)
})

