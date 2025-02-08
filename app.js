//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

document.getElementById("amigo").addEventListener("keydown", apertarTeclaEnter);

function apertarTeclaEnter(evento){
    if (evento.key === "Enter") {
        adicionarAmigo();
    }
}
