// Troca a página de login pela página de registro e vice-versa
var login = document.getElementById("loginWrapper");
var registro = document.getElementById("registerWrapper");
var abrirRegistro = document.getElementById("fazerRegistro");
var abrirLogin = document.getElementById("fazerLogin")


function abrirReg(){
    login.style.display = "none";
    registro.style.display = "block";
}

function abrirLog(){
    registro.style.display = "none";
    login.style.display = "block";
}

abrirRegistro.addEventListener("click", abrirReg);
abrirLogin.addEventListener("click", abrirLog);

// Brincadeira exemplo de interação de login
function login(){
    var user = document.getElementById("username");
    var password = document.getElementById("password");

    var usuario = "Vitor";
    var senha = "12345";

    if(user.value == " "){
        alert("Você não entrou com um nome de usuário!");
        if(password.value == " "){
            alert("Você não entrou com uma senha!");
        }
    }

    if(user.value == usuario){
        if(password.value == senha){
            alert("Você está logado! "+"Bem vindo "+ user.value +"!");
        }
        else{
            alert("Você entrou com uma senha ou usuário invalido! Tente novamente.");
        }
    }
    else{
        alert("Você entrou com uma senha ou usuário invalido! Tente novamente.");
    }
}