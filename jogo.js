const professor = document.getElementById("professor");
const jogo = document.getElementById("jogo");

const paredes = document.querySelectorAll(".parede:not(.borda)");

let x = 450;
let y = 370;

const velocidade = 5;

professor.style.left = x + "px";
professor.style.top = y + "px";

function bateuParede(novoX, novoY) {
    const largura = professor.offsetWidth;
    const altura = professor.offsetHeight;

    for (const parede of paredes) {
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

function mover
