
turnElem = document.getElementById('turn');
turn = "O";
count = 0;
changeturn();

document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.innerText == "") {
            square.textContent = turn;
            square.style.color = (turn == "X") ? "firebrick" : "green";
            changeturn();
        }
    })
})

function changeturn() {
    if (count >= 9) {
        count = 0;
        turnElem.textContent = "Partie terminée !"
        return;
    }
    if (turn == "X")
        turn = "O";
    else
        turn = "X";

    count++;
    turnElem.textContent = `C'est à ${turn} de jouer`;
}