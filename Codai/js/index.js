var nome = "Benigno  Fernandes";
var cargo = "CTO - Growdev";

 var nomeHtml = document.getElementById("nome-no-html");
 var cargoHtml = document.getElementById("cargo-no-html");
 var texto1 = document.getElementById("texto-1"); 
 var texto2 = document.getElementById("texto-2");



function alterarNomeHtml( $nome){
    nomeHtml.innerHTML = $nome;
}


function alterarCargoHtml( $cargo){

cargoHtml.innerHTML = $cargo;

}


function logarNome(){
    console.log(nomeHtml);
}

function clickNoProjetos(){
    console.log("Clicou no botao projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function clickNoSobre(){
    console.log("Clicou no botao Sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

alterarNomeHtml( nome);
alterarCargoHtml( cargo);