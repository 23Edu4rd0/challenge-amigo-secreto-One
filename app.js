let listaAmigos = [];
let quantidadeElementosLista = 0;
let sorteioRealizado = false; // Variável para verificar se o sorteio foi feito



// função para que o primeiro sorteio tenha de ser feito com no minimo 3 pessoas na lista
function atualizarQuantidadeLista(){
    quantidadeElementosLista = listaAmigos.length;
    console.log(quantidadeElementosLista);
    // Verifica se a lista tem pelo menos 3 elementos e se o sorteio ja foi realizado
    if (quantidadeElementosLista < 3 && !sorteioRealizado) {
        document.getElementById("sortear").disabled = true;
        document.getElementById("tituloPrincipal").innerHTML = `Adicione mais ${3 - quantidadeElementosLista} amigos`;
    } else {
        document.getElementById("sortear").disabled = false;
        document.getElementById("tituloPrincipal").innerHTML = `Digite o nome dos seus amigos`;
    }
}

function adicionarAmigo() {
    let nome = document.querySelector('#amigo').value;
    if (nome == "") {
        alert("Por Favor, Insira um nome")
        return;
    }
    listaAmigos.push(nome);
    console.log(listaAmigos);
    atualizarLista();
    atualizarQuantidadeLista(); 
    limparCampo();
}

function atualizarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < listaAmigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaAmigos[i];
        lista.appendChild(item);
    }
    atualizarQuantidadeLista(); 
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Adicione amigos antes de sortear');
        return;
    }
    let numeroAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[numeroAleatorio];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
    listaAmigos.splice(numeroAleatorio, 1);
    sorteioRealizado = true
    atualizarLista();
    atualizarQuantidadeLista();
    confettiDoCliff();    
    
}

// Função para limpar o campo de input
function limparCampo() {
    let chute = document.querySelector("input");
    chute.value = "";
}

function limparLista() {
    listaAmigos = [];
    atualizarLista();
    atualizarQuantidadeLista();
    sorteioRealizado = false;
    document.getElementById("resultado").innerHTML = "";
}

function confettiDoCliff() {
    confetti({
        particleCount: 150, // Quantidade de confetes
        spread: 180,        // Ângulo de dispersão
        origin: { x: 0.5, y: 0.5 } // Centro da tela
    });
}