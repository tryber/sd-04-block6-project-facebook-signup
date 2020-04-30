let nome = document.getElementById("name");
let lastName = document.getElementById("lastName");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let birth = document.getElementById("birth");
let gender = document.querySelectorAll("#sex");

let button = document.getElementById("facebook-register");


button.addEventListener("click", function () {
		if (nome.value === '') {
					alert("Campo Nome incorreto!");
					nome.focus();
				}
		if (lastName.value === '') {
					alert("Campo Sobrenome incorreto!");
					lastName.focus();
				}
		if (phone.value === '') {
					alert("Campo Celular incorreto!");
					phone.focus();
				}
		if (password.value === '') {
					alert("Campo Senha incorreto!");
					password.focus();
				}
		if (birth.value === '') {
					alert("Campo Data de Nascimento incorreto!");
					birth.focus();
				}
		for (let i = 0; i < gender.length; i += 1) {
					let choice = this;
							choice.addEventListener('click', function() {
								if (choice === '') {
									alert("Campo Gênero incorreto!");
									gender.focus();
									return;
							 	}        
				})
		}

	let dados = `Nome: ${nome.value}, Sobrenome: ${lastName.value}, Celular/Email: ${phone.value}, Data de Nascimento: ${birth.value}, Gênero: ${gender.value}`;
 	alert(dados)
	})

