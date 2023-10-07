const gridDiv = document.querySelector(".grid");

let numSquares = 16;
for (let i = 0; i < numSquares; i++) {
    for (let j = 0; j < numSquares; j++) {
        let square = document.createElement("div");
        square.classList.add("square")
        gridDiv.appendChild(square);
    }
}