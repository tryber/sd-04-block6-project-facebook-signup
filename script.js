var nome = document.getElementById("name")
var lastName = document.getElementById("lastName")
var phone = document.getElementById("phone")
var password = document.getElementById("password")
var birth = document.getElementById("birth")
var gender = document.querySelectorAll("#sex");

var button = document.getElementById("facebook-register")


button.addEventListener("click", function(){
  
    if (nome.value == ""){
        alert("Campo Nome incorreto!")
        nome.focus()
        return;
    }
    if (lastName.value == ""){
        alert("Campo Sobrenome incorreto!")
        lastName.focus()
        return;
    }
    if (phone.value == ""){
        alert("Campo Celular incorreto!")
        phone.focus()
        return;
    }
    if (password.value == ""){
        alert("Campo Senha incorreto!")
        password.focus()
        return;
    }
    if (birth.value == "") {
        alert("Campo Data de Nascimento incorreto!")
        birth.focus()
        return;
    }
    
    for(let i = 0; i < gender.length; i+=1 ){
        let choice = this
        choice.addEventListener("click", function(){
            if(choice == ""){
                alert("Campo Gênero incorreto!")
                gender.focus()
                return;
            }        
        })
    }
    
    var dados = `Nome: ${nome.value}, Sobrenome: ${lastName.value}, Celular/Email: ${phone.value}, Data de Nascimento: ${birth.value}, Gênero: ${gender.value}`;
    return alert(dados)
})

