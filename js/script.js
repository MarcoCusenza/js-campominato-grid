const grid = document.getElementById("grid");
let difficulty = 0; // 0=EASY 1=MEDIUM 2=HARD
let numBox = 49;
let boxPerRow = 7;

const easy = document.querySelector(".easyBtn");
const medium = document.querySelector(".mediumBtn");
const hard = document.querySelector(".hardBtn");


//Inizializzazione griglia modalità easy
grid.className = "easyGrid";
fillGrid(7);


//Controllo sul click del cambio difficolta --> nuova partita
easy.addEventListener('click', function () { changeDifficulty(0) });
medium.addEventListener('click', function () { changeDifficulty(1) });
hard.addEventListener('click', function () { changeDifficulty(2) });




//Riempimento griglia
function fillGrid(nItems) {
    for (let i = 0; i < nItems; i++) {
        for (let j = 0; j < nItems; j++) {
            let box = document.createElement("div");
            box.className = "box";
            //Classe speciale per elementi della prima e ultima riga
            if (i == 0) {
                box.classList.add("noTop");
            }
            if (i == nItems - 1) {
                box.classList.add("noBot");
            }

            //Classe speciale per elementi della prima e ultima colonna
            if (j == 0) {
                box.classList.add("noLeft");
            }
            if (j == nItems - 1) {
                box.classList.add("noRight");
            }
            grid.appendChild(box);
        }
    }
    console.log(grid);
}

//Cambio difficoltà e nuova griglia con nuovo riempimento
function changeDifficulty(lvl) {
    if (lvl == 0) {
        numBox = 49;
        boxPerRow = 7;
        grid.className = "easyGrid";
        grid.innerHTML = "";
        fillGrid(boxPerRow);
    } else if (lvl == 1) {
        numBox = 81;
        boxPerRow = 9;
        grid.className = "mediumGrid";
        grid.innerHTML = "";
        fillGrid(boxPerRow);
    } else {
        numBox = 100;
        boxPerRow = 10;
        grid.className = "hardGrid";
        grid.innerHTML = "";
        fillGrid(boxPerRow);
    }
}