let amigos=[];

function adicionarAmigo(){
let inputAmigo = document.getElementById("amigo");
let nomeAmigo = inputAmigo.value;

if(!nomeAmigo) {
    alert("Adicione o nome do seu amigo :)");
    return;
}
 amigos.push(nomeAmigo);
 inputAmigo.value="";
 inputAmigo.focus();
 atualizarListaAmigos();
}
function atualizarListaAmigos(){
    let listaAmigos=document.getElementById("listaAmigos");
    listaAmigos.innerHTML="";
    
    for(let i=0;i<amigos.length;i++){
        let item=document.createElement("li");
        item.textContent=amigos[i];
        listaAmigos.appendChild(item);
    }
}
function sortearAmigo() {
    if (amigos.length=== 0){
        alert("Coloque mais amigos para concluir");
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random()* amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.textContent = `O amigo sorteado é: ${amigoSorteado}!:)`; 

    let limparLista = document.getElementById("ListaAmigos");
    limparLista.textContent="";
 }
