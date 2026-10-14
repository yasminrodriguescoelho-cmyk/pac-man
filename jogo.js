const professor = document.getElementById("professor");

let x = 450;
let y = 370;

professor.style.left = x + "px";
professor.style.top = y + "px";

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") x += 10;
    if (event.key === "ArrowLeft") x -= 10;
    if (event.key === "ArrowUp") y -= 10;
    if (event.key === "ArrowDown") y += 10;

    professor.style.left = x + "px";
    professor.style.top = y + "px";

});
