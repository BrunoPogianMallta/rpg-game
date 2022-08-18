const cadastroForm = document.getElementById("form-cadastro");
const userEmail = document.getElementById("email-cadastro");
const passwordCadastro = document.getElementById("password-cadastro");
const passwordConfirmCadastro = document.getElementById('password-confirm-cadastro')

let conta =[]

const validateEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-aZ-Z]$"
)

const validatePassoword = new RegExp(
    "^(?=.*?[A-Za-z])(?=.*[0-9]).{6,}$"
)




function cadastrar(email,pass,passConfirm) {
    let usermail = email.value
    let userPass = pass.value
    let userPassConfirm = passConfirm.value

    if(!usermail){
        alert('Campo e-mail necessário')
    }
    if(!userPass){
        alert('Insira seu password')
    }
    if(userPass != userPassConfirm){
        alert('As senhas não são iguais')
    }

    let usuario ={
        usermail,
        userPass,
        userPassConfirm
    }

    
    console.log(usuario)
}




cadastroForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    cadastrar(userEmail, passwordCadastro,passwordConfirmCadastro);
})




