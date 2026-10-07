const professor = document.getElementById("professor");
const paredes = document.querySelectorAll(".parede:not(.borda)");

let x = 520;
let y = 370;

const velocidade = 5;

professor.style.left = x + "px";
professor.style.top = y + "px";

function bateuParede(novoX, novoY) {

    const largura = professor.offsetWidth;
    const altura = professor.offsetHeight;

    for (let parede of paredes) {

        const paredeX = parede.offsetLeft;
        const paredeY = parede.offsetTop;
        const paredeLargura = parede.offsetWidth;
        const paredeAltura = parede.offsetHeight;

        if (
            novoX < paredeX + paredeLargura &&
            novoX + largura > paredeX &&
            novoY < paredeY + paredeAltura &&
            novoY + altura > paredeY
        ) {
            return true;
        }
    }

    return false;
}

document.addEventListener("keydown", function(event) {

    let novoX = x;
    let novoY = y;

    if (event.key === "ArrowUp") {
        novoY -= velocidade;
    }

    if (event.key === "ArrowDown") {
        novoY += velocidade;
    }

    if (event.key === "ArrowLeft") {
        novoX -= velocidade;
    }

    if (event.key === "ArrowRight") {
        novoX += velocidade;
    }

    // Não deixa sair pela esquerda
    if (novoX < 15) {
        novoX = 15;
    }

    // Não deixa sair por cima
    if (novoY < 15) {
        novoY = 15;
    }

    // Não deixa sair pela direita
    if (novoX + professor.offsetWidth > 1085) {
        novoX = 1085 - professor.offsetWidth;
    }

    // Não deixa sair por baixo
    if (novoY + professor.offsetHeight > 635) {
        novoY = 635 - professor.offsetHeight;
    }

    // Verifica as paredes internas
    if (!bateuParede(novoX, novoY)) {

        x = novoX;
        y = novoY;

        professor.style.left = x + "px";
        professor.style.top = y + "px";
    }

});
