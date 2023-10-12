const buttons = document.querySelectorAll('.buttons');
const colorInput = document.querySelector('#color-input');
const rainbowButton = document.querySelector('#rainbow');
const eraserButton = document.querySelector('#eraser');
const resetButton = document.querySelector('#reset');
const gridDiv = document.querySelector('.grid');
const slider = document.querySelector('#slider');

let buttonSelected = colorInput;

function selectButton(event) {
    switch (event.target.id) {
        case "color-input":
            buttonSelected = colorInput;
            break;
        case "rainbow":
            buttonSelected = rainbowButton;
            break;
        case "eraser":
            buttonSelected = eraserButton;
            break;
        default:
            buttonSelected = buttonSelected;
            break;
    }
}

function createGrid(numSquares) {
    gridDiv.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;
    gridDiv.style.gridTemplateRows = `repeat(${numSquares}, 1fr)`;
    for (let i = 0; i < numSquares; i++) {
        for (let j = 0; j < numSquares; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener('mouseover', fillSquare);
            gridDiv.appendChild(square);
        }
    }  
}

function fillSquare() {
    if (buttonSelected === eraserButton) {
        this.style.backgroundColor = "#FFFFFF";
    } else if (buttonSelected === rainbowButton) {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = colorInput.value;
    }
}

function resetGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => square.style.backgroundColor = "white");
}

function changeGridSize() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => square.remove());
    createGrid(slider.value);
}

createGrid(slider.value);

buttons.forEach(button => button.addEventListener('click', selectButton));

resetButton.addEventListener('click', resetGrid);

slider.addEventListener('change', changeGridSize);


