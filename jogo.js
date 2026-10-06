const professor = document.getElementById("professor");
const paredes = document.querySelectorAll(".parede");

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

    const largura = 70;
    const altura = 70;

    let bateu = false;

    paredes.forEach(function(parede) {

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
            bateu = true;
        }
    });

    if (!bateu) {
        x = novoX;
        y = novoY;

        professor.style.left = x + "px";
        professor.style.top = y + "px";
    }
});
