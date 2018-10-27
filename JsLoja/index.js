var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

var remover1 = document.getElementById("botao1");
var remover2 = document.getElementById("botao2");
var remover3 = document.getElementById("botao3");
var remover4 = document.getElementById("botao4");

quantidade1=0;
quantidade2=0;
quantidade3=0;
quantidade4=0;

document.getElementById("item1").innerHTML= quantidade1;
document.getElementById("item2").innerHTML= quantidade2;
document.getElementById("item3").innerHTML= quantidade3;
document.getElementById("item4").innerHTML= quantidade4;

var abreCarrinho = document.getElementsByClassName("carrinho");

var carrinho = document.getElementsByClassName("carrinho");
var fimCompra = document.getElementById("fimCompra");

var saldo =500;
var total=0;

document.getElementById("total").innerHTML=total;
document.getElementById("valor").innerHTML=saldo;


function abre(){
    document.getElementById("carrinhoLojaWrapper").style.display = "block";
}

function voltar(){
    document.getElementById("carrinhoLojaWrapper").style.display = "none";
}

function muda(){
    total=total+80;
    quantidade1=quantidade1+1;
    document.getElementById("total").innerHTML= total;
    document.getElementById("item1").innerHTML= quantidade1;
}

function muda1(){
    total=total+30;
    quantidade2=quantidade2+1;
    document.getElementById("total").innerHTML= total;
    document.getElementById("item2").innerHTML= quantidade2;
}

function muda2(){
    total=total+60;
    quantidade3=quantidade3+1;
    document.getElementById("total").innerHTML= total;
    document.getElementById("item3").innerHTML= quantidade3;
}

function muda3(){
    total=total+300;
    quantidade4=quantidade4+1;
    document.getElementById("total").innerHTML= total;
    document.getElementById("item4").innerHTML= quantidade4;
}

function remove1(){
   if(quantidade1==0){
       alert("Não há nenhum Anel da Ordem Templária na sacola!");
   }
   else{
    total=total-80;
    quantidade1=quantidade1-1;
    document.getElementById("total").innerHTML= total;
    document.getElementById("item1").innerHTML= quantidade1;
   }
}

function remove2(){
    if(quantidade2==0){
        alert("Não há nenhum Colar Cruz Templária na sacola!");
    }
    else{
    total=total-30;
    quantidade2=quantidade2-1;
    document.getElementById("total").innerHTML= total;
    document.getElementById("item2").innerHTML= quantidade2;
    }
}

function remove3(){
    if(quantidade3==0){
        alert("Não há nenhum Elmo de Batalha na sacola!");
    }
    else{
    total=total-60;
    quantidade3=quantidade3-1;
    document.getElementById("total").innerHTML= total;
    document.getElementById("item3").innerHTML= quantidade3;
    }
}

function remove4(){
    if(quantidade4==0){
        alert("Não há nenhuma Espada Medieval na sacola!");
    }
    else{
    total=total-300;
    quantidade4=quantidade4-1;
    document.getElementById("total").innerHTML= total;
    document.getElementById("item4").innerHTML= quantidade4;
    }
}

function deposito(){
    var quant = parseInt(document.getElementById("dep").value);
    saldo=saldo+quant;
    document.getElementById("valor").innerHTML = saldo;
    alert("Seu depósito foi realizado com sucesso!");
}

function compra(){
    if(total > saldo){
        alert("Você não possui saldo suficiente!");
    }
    else{
        saldo = saldo - total;
        total=0;
        quantidade1=0;
        quantidade2=0;
        quantidade3=0;
        quantidade4=0;
        document.getElementById("total").innerHTML=total;
        document.getElementById("valor").innerHTML= saldo;
        document.getElementById("item1").innerHTML= quantidade1;
        document.getElementById("item2").innerHTML= quantidade2;
        document.getElementById("item3").innerHTML= quantidade3;
        document.getElementById("item4").innerHTML= quantidade4;
        alert("Compra realizada com sucesso!");
    }
}

btn1.addEventListener("click", muda);
btn2.addEventListener("click", muda1);
btn3.addEventListener("click", muda2);
btn4.addEventListener("click", muda3);
fimCompra.addEventListener("click", compra);
abreCarrinho.addEventListener("click",abre);
