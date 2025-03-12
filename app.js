document.getElementById("amigo").addEventListener("keydown", apertarTeclaEnter);

function apertarTeclaEnter(evento) {
    if (evento.key === "Enter") {
        adicionarAmigo();
    }
}

let listaAmigos = [];
let quantidadeElementosLista = 0;
let sorteioRealizado = false;
const som = new Audio('assets/firecracker.mp3');
const musica = new Audio('assets/e-inveja-chat.mp3'); // Audio usado para teste e aprendizado

function atualizarQuantidadeLista() {
    quantidadeElementosLista = listaAmigos.length;
    console.log(quantidadeElementosLista);

    const botaoSortear = document.getElementById("sortear");
    const tituloPrincipal = document.getElementById("tituloPrincipal");
    const botaoLimpar = document.getElementById("limpar");

    if (quantidadeElementosLista < 3 && !sorteioRealizado) {
        botaoSortear.disabled = true;
        tituloPrincipal.innerHTML = `Adicione mais ${3 - quantidadeElementosLista} amigos`;
    } else {
        botaoSortear.disabled = false;
        tituloPrincipal.innerHTML = `Digite o nome dos seus amigos`;
    }

    botaoLimpar.disabled = quantidadeElementosLista === 0;
}

function adicionarAmigo() {
    let nome = document.querySelector('#amigo').value.trim();
    
    if (!nome) {
        alert("Por favor, insira um nome");
        return;
    }
    
    if (listaAmigos.includes(nome)) {
        alert("Esse amigo já foi adicionado");
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

    listaAmigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });

    atualizarQuantidadeLista();
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Adicione amigos antes de sortear');
        return;
    }

    let numeroAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[numeroAleatorio];
    document.getElementById("resultado").innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
    
    listaAmigos.splice(numeroAleatorio, 1);
    sorteioRealizado = true;
    atualizarLista();
    atualizarQuantidadeLista();
    confeteDoCliff();
}

function limparCampo() {
    document.querySelector("#amigo").value = "";
}

function limparLista() {
    listaAmigos = [];
    atualizarLista();
    atualizarQuantidadeLista();
    sorteioRealizado = false;
    document.getElementById("resultado").innerHTML = "Lista de amigos limpa";
}

function confeteDoCliff() {
    let end = Date.now() + (15 * 1000);
    let colors = ['#4b69fd', '#ffffff'];

    som.play();
    musica.play();
    
    (function frame() {
        confetti({ particleCount: 2, angle: 60, spread: 55, origin: { x: 0 }, colors: colors });
        confetti({ particleCount: 2, angle: 120, spread: 55, origin: { x: 1 }, colors: colors });
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}
