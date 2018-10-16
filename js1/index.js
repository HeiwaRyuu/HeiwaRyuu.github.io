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