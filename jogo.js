const professor = document.getElementById("professor");
const parede = document.querySelector(".parede");

let x = 250;
let y = 250;

document.addEventListener("keydown", function(event) {

    let novoX = x;
    let novoY = y;

    if (event.key === "ArrowUp") {
        novoY -= 5;
    }

    if (event.key === "ArrowDown") {
        novoY += 5;
    }

    if (event.key === "ArrowLeft") {
        novoX -= 5;
    }

    if (event.key === "ArrowRight") {
        novoX += 5;
    }

    // Tamanho da hitbox real do personagem
    const larguraHitbox = 31;
    const alturaHitbox = 53;

    // Espaço vazio da imagem antes do personagem
    const margemEsquerda = 19;
    const margemTopo = 12;

    const personagemEsquerda = novoX + margemEsquerda;
    const personagemDireita = personagemEsquerda + larguraHitbox;
    const personagemTopo = novoY + margemTopo;
    const personagemBaixo = personagemTopo + alturaHitbox;

    const paredeEsquerda = 50;
    const paredeDireita = 200;
    const paredeTopo = 50;
    const paredeBaixo = 70;

    const bateu =
        personagemEsquerda < paredeDireita &&
        personagemDireita > paredeEsquerda &&
        personagemTopo < paredeBaixo &&
        personagemBaixo > paredeTopo;

    if (!bateu) {
        x = novoX;
        y = novoY;

        professor.style.left = x + "px";
        professor.style.top = y + "px";
    }
});